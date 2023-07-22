# SpringBoot本地上传文件到resources目录永久保存下载的最佳实践

需求背景：Java后端项目上传文件是一个很常见的需求，一般正式项目中我们上传文件都是利用第三方阿里云OSS这类的，但是如果只是为了学习之用，那我们可能就会直接上传到电脑上某个本地文件夹。

但是上传到自己电脑上某个文件夹，那换一台电脑就看不到了，还有一般文件上传之后我们还需要返回给前端文件的下载路径，如果是电脑上随便某个文件夹，那前端很可能是访问不到的。

为了解决前端访问这个问题，我们可以把文件上传到后端服务的静态资源目录里，这样前端就可以直接通过后端服务的地址和端口加上资源路径来访问了。

### 实现思路

上传文件的路径我们可以用 ResourceUtils.getURL("classpath:").getPath() 这个方法来获取，拿到的就是编译后的 target/classes 目录的绝对路径，前端上传的文件就可以直接存到这个下面的目录，比如：target/classes/upload/logo.jpg，给前端返回的下载地址就像这样的：http://localhost:8080/upload/logo.jpg。

上面的思路确实解决了上传和下载的问题，但是 target 目录是会变动的，而且不会提交到代码仓库，如果我们清理后再重新编译或者换台电脑编译，之前上传的文件就都没了。

这可怎么办呢？仔细一想我们项目不是有一个叫 resources 用来存放静态资源的目录吗，这个目录正常也会提交到代码仓库进行管理的，那我们每次上传的文件不就可以一块提交到仓库里，这部就实现了永久保存。

说干就干，就直接将文件保存到 resources/upload 目录下，后端一run前端一上传，文件确实被保存到了 resources/upload 目录下。再仔细一看不对，前端的地址没发访问刚上传的文件，因为 target/classes 目录下压根没有刚上传的文件，重新点一次 compile 编译后将 resources 目录下的文件同步到了 target/classes 目录下确实可以实现访问，但是总不能我们每次上传后都要自己重新点一下编译重新运行吧。

最后一合计，那我把resources和target结合一下，将文件同时保存到这两个目录下，是不是就可以实现永久保存和实时访问了呢。

### 终极方案

用System.getProperty("user.dir")可以获取到项目的工作目录，再拼上项目的结构目录就可以拿到 resources 目录的绝对路径；target/classes 运行目录可以用 ResourceUtils.getURL("classpath:").getPath() 获取。

注意如果最后上传的资源目录访问404，要看下 application.yml 里 spring.mvn 的静态资源路径，pom.xml里的 resources过滤规则，还有 WebMvcConfiguration 里配置的 addResourceHandler 静态资源拦映射有没有拦截掉。

最后前端传过来的是一个 File 文件，但是一个文件其实是没办法循环去保存到多个目录下的，第一个文件夹保存成功后后面的都会报错，想一下我们平时在电脑上保存一个文件也只能保存到一个目录下，再要保存到其他目录则自己复制一份过去就好了，这里也是一样第一个目录我们直接保存，第二个则可以用 spring 提供的 FileCopyUtils.copy 直接复制文件就可以了。

### 完整代码

UploadFileUtil.java
```java
package com.sky.utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.util.FileCopyUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

public class UploadFileUtil {
    /**
     * 获取文件保存路径
     *
     * @return File
     * @throws FileNotFoundException
     */
    static List<File> getUploadDirectory() throws FileNotFoundException {
        // 开发环境获取 target/classes 目录：清理重新编译后就没有了
        File targetPath = new File(ResourceUtils.getURL("classpath:").getPath());
        // System.out.printf("项目运行的绝对路径：" + path.getAbsolutePath());
        // 输出 xx/sky-parent/sky-server/target/classes
        // 生产环境 不存在 target/classes 目录
        if (!targetPath.exists()) {
            // 获取当前运行目录
            targetPath = new File("");
        }

        // 开发环境 resources 目录：可永久保存
        String resourcesPath = System.getProperty("user.dir") + "/sky-server/src/main/resources";
        // System.out.printf("resources目录路径：" + resourcesPath);
        File path = new File(resourcesPath);


        File upload = new File(path.getAbsolutePath(), "upload");
        File uploadTarget = new File(targetPath.getAbsolutePath(), "upload");

        // 不存在则创建
        if (!upload.exists()) {
            upload.mkdirs();
        }
        if (!uploadTarget.exists()) {
            uploadTarget.mkdirs();
        }

        List<File> files = new ArrayList<File>();
        files.add(upload);
        files.add(uploadTarget);

        // System.out.printf("当前目录：" + files);

        return files;
    }

    public static String upload(MultipartFile myFile, String dir) throws IOException {
        String filePath = "";
        if (!myFile.isEmpty()) {
            try {
                String filename = myFile.getOriginalFilename();
                filename = UUID.randomUUID() + filename.substring(filename.lastIndexOf("."));

                // 之所以保存到 resources 和 target 两个目录，兼顾开发测试和永久保存
                // 只保存到resources目录下每次上传了要重新编译下，target则清理打包后就没有了
                List<File> files = getUploadDirectory();

                // 注意这里一个文件不能循环同时写入多个目录，保存了第一个，第二个要复制过去
                File curFile = new File(files.get(0), filename);
                myFile.transferTo(curFile);
                FileCopyUtils.copy(curFile, new File(files.get(1), filename));
                //for (File f: files) {
                    //File curFile = new File(f, filename);
                    //myFile.transferTo(curFile);
                //}

                filePath = "http://localhost:8080/upload/" + filename;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return filePath;
    }
}
```

~pom.xml~
注意：这个不需要配置，加了这个会导致 target 目录里不能同步 application.yml 配置文件，会导致获取不到各类配置报错，如 mysql 的地址、账号、密码未配置查询数据库报错：Failed to configure a DataSource: ‘url‘ attribute is not specified and no embedded datasource
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <build>
        <resources>
            <resource>
                <directory>src/main/resources</directory>
                <includes>
                    <include>upload/**</include>
                </includes>
                <filtering>false</filtering>
            </resource>
        </resources>
    </build>
</project>
```

application.yml
```yaml
server:
  port: 8080

spring:
  mvc:
    static-path-pattern: /upload/**
```

WebMvcConfiguration
```java
package com.sky.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;


import java.util.List;

/**
 * 配置类，注册web层相关组件
 */
@Configuration
public class WebMvcConfiguration extends WebMvcConfigurationSupport {
    /**
     * 设置静态资源映射
     * @param registry
     */
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 设置上传的文件静态资源映射，application 里的 mvc 里也要设置下静态目录
        registry.addResourceHandler("/upload/**")
                .addResourceLocations("classpath:/upload/", "file:upload/");
    }
}
```

### 使用示例

在 controller 接收前端用表单上传的 File 文件
```java
package com.sky.controller.common;

import com.sky.result.Result;
import com.sky.utils.UploadFileUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * 公共请求
 */
@RestController
@RequestMapping("/common")
@Api(tags = "公共")
@Slf4j
public class CommonController {

    @PostMapping("/upload")
    @ApiOperation("上传文件")
    public Result uploadFile(MultipartFile file) throws IOException {
        log.info("上传文件：{}", file);
        String fileUrl = UploadFileUtil.upload(file, "");
        if (fileUrl == null || fileUrl == "") {
            return Result.error("上传失败");
        }
        return Result.success(fileUrl);
    }
}
```