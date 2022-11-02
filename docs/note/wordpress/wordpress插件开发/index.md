# wordpress插件开发

想要使用 REST API 需要自己额外安装插件：WordPress REST API，现在 WordPress 5.0以上的版本已经默认支持 REST API了，不需要额外去安装插件。

新站首次用 Postman 去 访问 REST API 接口，如：http://www.cafe123.cn/wp-json/wp/v2/posts，会发现返回的是 404，需要自己在管理后台将：设置-固定链接-常用设置，设置为除“朴素”外的其他选项(建议选数字型)，再去请求就可以拿到数据了。

## 遇到的问题

新加了一些 api 路由遇到的报错：

**1. 未找到匹配URL和请求方式的路由**
```json
{
    "code": "rest_no_route",
    "message": "未找到匹配URL和请求方式的路由。",
    "data": {
        "status": 404
    }
}
```
这种情况就是路径或请求方式有问题，仔细去核对下

**2. 此路由的句柄无效**
```json
{
    "code": "rest_invalid_handler",
    "message": "此路由的句柄无效。",
    "data": {
        "status": 500
    }
}
```
这种情况就是有请求到路由，但是路由的回调函数有问题，我这里是在类 class 里注册的路由，路由自身的方法要用 $this->funcName 这样去调用

**3. WP_Error类的第一个参数不能设为0**

接口校验不通过时，我们会选择直接 return 一个 WP_Error 对象，但是要注意 WP_Error 的第一个状态码如果是字符串数字会被直接转成数字，切记不能设置为数字或字符串 0，这样会导致前端不能抛出错误提示，啥也收不到
```php
if (empty($username)) {
    return new WP_Error(10001, "用户名不能为空", "");
}
```

**4. get_post_format 获取文章形式一直返回false**

WP_Query 里查出来无 format 和 sticky 这两个字段，所以只能自己额外获取，但是要注意默认的 standard 标准形式get_post_format 也会返false，所以记得自己要设置一个默认值

```php
$format = get_post_format($postId) ?: 'standard';
```

**5. 函数参数没设置默认值，接口调用会报错**

获取用户信息时定义了一个格式化用户信息的方法，第二个参数 $t 开始没设置默认值，调用时不需要的就不会传，但是当方法里用到 $t 去判断为假时接口会直接崩了，自己设置一个默认值就好了。

```php
private function fmt_user_info($u, $t = "") {
    $role_info = array(
        administrator =>  '管理员',
        editor        =>  '编辑',
        author        =>  '作者',
        contributor   =>  '贡献者',
        subscriber    =>  '订阅者',
    );
    $roleId = $u->roles[0];

    $user = array(
        "id" => $u->ID,
        "userName" => $u->data->user_login,
        "nickname" => $u->data->display_name ?: $u->$data->user_nicename,
        "date" => $u->data->user_registered,
        "roleId" => $roleId,
        "roleName" => $role_info[$roleId],
    );

    // 列表页不返回用户邮箱
    if ($t === 'login') {
        $user['email'] = $u->data->user_email;
    }
    return $user;
}
```

## 知识点

**1. 变量设置默认值**

javascript 中给变量设置默认值可以直接用或运算符 ||，但是在 php 中或运算符 || 只能用来判断，会返回布尔值，要像js中设置默认值只能用if判断或者三元运算符

```php
$a = "";
$b = $a ? $a : "Hello"

// 可简写成下面的这种形式：
// $b = $a ?: "Hello"
```

**2. Object 对象**

在PHP 中，有三种类型的数组：
```php
// 数值数组：以数字为键的数组，键从0开始自增
$arr = ['zhou', 'xiao', 'hei'];

// 关联数组：带有指定的键的数组，每个键关联一个值
$list = ['id'=>1, 'name'=>'周小黑'];

// 多维数组：包含一个或多个数组的数组
```
其实关联数组就是 javascript 中的对象 Object

**3. 数组取值**

php 中要获取数组（或"对象"，即上面说到的关联数组，也就是前端js中的object）的属性值，要用 ["xx"]，不能用 -> ，横线箭头这个是 class 类对象才能这样获取

```php
$arr = array(
    "name": "zhou",
    "age": 18,
);

// 获取属性正确方式
$name = $arr["name"];

// 错误方式
$name = $arr->name;
```

**4. WP_Query 和 WP_Comment_Query 中的 no_found_rows 参数**

WP_Query 和 WP_Comment_Query 这两个查询类里，其实都有这个参数no_found_rows，是用来禁止 SQL_CALC_FOUND_ROWS 查询（这个玩意就是用来计算咱分页查询的总条数的，据说性能不高）。

如果 no_found_rows 为 false， 最大页 max_num_pages、总条数found_posts/found_comments 就不会去被计算，我们直接获取就都是0。

但是要注意 WP_Query 文档上并没有写 no_found_rows 这个参数，翻源码可以发现是有的，WP_Comment_Query 文档上有写 no_found_rows 参数，但是要注意它的默认值是 true。

WP_User_Query 里也有个同样的参数，不过名字叫 count_total，默认为 true。

[WP_Query 文档](https://developer.wordpress.org/reference/classes/wp_query/__construct/)

[WP_Comment_Query 文档](https://developer.wordpress.org/reference/classes/WP_Comment_Query/__construct/)

[WP_User_Query 文档](https://developer.wordpress.org/reference/classes/wp_user_query/)

**5. 获取总数**

* 获取页面总数：wp_count_posts('page');
* 获取分类总数：wp_count_terms('category');
* 获取标签总数：wp_count_terms('post_tag');
* 获取用户总数：$wpdb->get_var("SELECT COUNT(ID) FROM $wpdb->users");

[wp_count_terms](https://developer.wordpress.org/reference/functions/wp_count_terms/) 方法也可以传递参数进行统计，比如统计标签，获取标签列表里的设置了是否隐藏空文章标签 hide_empty 为 true，wp_count_terms 方法里也要传进去 hide_empty 为 true，否则统计出来的总数不对。

**6. 获取请求参数**

```php
<?php
function my_awesome_func( WP_REST_Request $request ) {
  // You can access parameters via direct array access on the object:
  $param = $request['some_param'];

  // Or via the helper method:
  $param = $request->get_param( 'some_param' );

  // You can get the combined, merged set of parameters:
  $parameters = $request->get_params();

  // The individual sets of parameters are also available, if needed:
  $parameters = $request->get_url_params();
  $parameters = $request->get_query_params();
  $parameters = $request->get_body_params();
  $parameters = $request->get_json_params();
  $parameters = $request->get_default_params();

  // Uploads aren't merged in, but can be accessed separately:
  $parameters = $request->get_file_params();
}
```

[Adding Custom Endpoints](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints)

**7. self 和 $this**

self调用的是类，而$this调用的则是实例化的对象。

能用$this的地方一定使用self，能用self的地方不一定能用$this，静态的方法中不能使用$this，静态方法给类访问的。

注意访问不一样，注意 $ 的有无，self::$变量名，$this->变量名。


## 参考资料
* [WordPress Developers](https://developer.wordpress.org)
* [REST API Handbook](https://developer.wordpress.org/rest-api)
* [WordPress：注册新的 REST 接口](https://ninghao.net/blog/5492)
* [WordPress开发手册](https://www.kancloud.cn/jabber/wordpress/296846)