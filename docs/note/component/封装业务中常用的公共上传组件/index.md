# 封装业务中常用的公共上传组件

直接用 input 的 file 属性，图片回显要用到 FileReader 读取文件成 base64，压缩图片可以利用 canvas，如果要缓存在本地由于文件一般都较大，localStorage 之类的本地存储都有大小限制不合适，可以用 indexedDB 本地数据库去实现。

注意拖拽上传 @drop 需要阻止一个默认事件 @dragover.prevent 才能生效。

```vue
<template>
  <div
    class="v-upload"
    @dragover.prevent
    @drop="handleDrop"
    @click="handleUpload"
  >
    <slot>
      <button>上传</button>
    </slot>

    <input
      ref="fileInput"
      type="file"
      style="display: none;"
      :accept="accept"
      @change="handleChange"
    >
  </div>
</template>

<script>
  /**
   * 公共上传组件
   * 业务中单个上传图片和excel文件较多，样式可直接交给父组件控制，上传组件内只做选择文件的相关逻辑
   * ie 已死，不用考虑 ie 了
   * TODO：1. 扩展多选文件，不过这个功能业务中使用较少，多个文件可多次调用此组件实现
   *       2. 直接调用公共上传接口上传到 CDN 上，直接 return 获取到的 CDN 资源链接
   */
  export default {
    name: 'VUpload',
    props: {
      drag: { // 是否可拖拽上传
        type: Boolean,
        default: false,
      },
      maxSize: { // 文件大小限制，单位 M，默认最大 2 M，为 0 则不限制大小
        type: Number,
        default: 0,
      },
      accept: { // 允许的文件格式，input 标签原生的属性，会在选择文件时过滤
        type: String,
        default: '', // image/*  video/*  audio/*  .pdf  text/html ...
      },
      format: { // 支持的文件类型，识别文件的后缀名，可与 accept 属性结合使用
        type: Array,
        default: () => [],
      },
      compress: { // 压缩限制，默认 1 M，上传图片时超过此大小自动压缩，为 0 则不压缩
        type: Number,
        default: 1
      },
      // multiple: { // 是否支持多选文件
      //   type: Boolean,
      //   default: false
      // },
      // uploadServer: { // 是否直接上传到服务器，可配合 api 使用
      //   type: Boolean,
      //   default: false
      // },
      // api: { // 上传接口地址
      //   type: String,
      //   default: '',
      // }
    },
    data() {
      return {}
    },
    methods: {
      handleUpload() {
        this.$refs.fileInput.dispatchEvent(new MouseEvent('click'))
      },

      /**
       * 拖拽
       */
      handleDrop(e) {
        if (!this.drag) return
        e.preventDefault()
        const files = e.dataTransfer.files
        if (!files.length) return
        this.handleChange(files, true)
      },

      handleChange(f, isDrop) {
        const files = (isDrop && f) ? f : this.$refs.fileInput.files
        if (files.length > 0) {
          const file = files[0]
          const fileSize = file.size
          const fileName = file.name
          const fileSuffix = fileName.split('.').pop().toLocaleLowerCase() // 转换成小写后缀，注意不包括点 .
          const imgSuffix = `(bmp|jpg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp|jpeg)`
          // const imgReg = new RegExp(`.*\.${imgSuffix}$`)
          const imgReg = new RegExp(`${imgSuffix}$`)
          const isImg = imgReg.test(fileSuffix)
          const fileFormatName = isImg ? '图片' : '文件'

          // 文件大小校验
          const n = this.maxSize
          if ((n > 0) && fileSize > 1024 * 1024 * n) {
            this.$message.warning(`${fileFormatName}大小不能超过${n}M，请压缩后上传！`)
            this.$refs.fileInput.value = ''
            return
          }

          // 文件格式校验
          if (this.format.length) {
            const isValid = this.format.some(item => item.toLocaleLowerCase() === fileSuffix)
            if (!isValid) {
              this.$message.warning(`${fileFormatName}格式不正确！`)
              this.$refs.fileInput.value = ''
              return
            }
          }

          if (!isImg) {
            this.handleEmit({ file, fileName, fileSize, isImg })
          } else {
            this.readFile({ file, fileName, fileSize, isImg })
          }
        } else {
          this.$message.error('请刷新页面后重新上传！')
        }
        this.$refs.fileInput.value = ''
      },

      /**
       * 读取文件信息
       */
      readFile({ file, fileName, fileSize, isImg }) {
        this.compressImage({ file, fileName, fileSize, isImg })
      },

      /**
       * 压缩图片
       */
      compressImage({ file, fileName, fileSize, isImg }) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = e => {
          // 读取 base64 图片地址，用在页面上回显
          const imgSrc = e.target.result

          if (this.compress <= 0 || fileSize <= this.compress * 1024 * 1024) { // 不压缩
            this.handleEmit({ file, fileName, fileSize, isImg, imgSrc })
          } else {
            const img = new Image()
            img.src = imgSrc
            img.onload = e => {
              const w = img.width / 1.5
              const h = img.height / 1.5
              const quality = 0.7 // 默认图片质量为0.92
              // 生成canvas
              const canvas = document.createElement('canvas')
              const ctx = canvas.getContext('2d')
              // 创建属性节点
              const anw = document.createAttribute('width')
              anw.nodeValue = w
              const anh = document.createAttribute('height')
              anh.nodeValue = h
              canvas.setAttributeNode(anw)
              canvas.setAttributeNode(anh)

              // 铺底色 PNG转JPEG时透明区域会变黑色
              ctx.fillStyle = '#fff'
              ctx.fillRect(0, 0, w, h)

              ctx.drawImage(img, 0, 0, w, h)
              // quality值越小，所绘制出的图像越模糊
              const base64 = canvas.toDataURL('image/jpeg', quality) // 图片格式jpeg或webp可以选0-1质量区间

              // 去掉url的头，并转换为byte
              const bytes = window.atob(base64.split(',')[1])
              // 处理异常,将ascii码小于0的转换为大于0
              const ab = new ArrayBuffer(bytes.length)
              const ia = new Uint8Array(ab)
              for (let i = 0; i < bytes.length; i++) {
                ia[i] = bytes.charCodeAt(i)
              }
              let newFile = new File([ab], fileName, { type: 'image/jpeg' })
              this.handleEmit({ file: newFile, fileName, fileSize, isImg, imgSrc })
            }
            img.onerror = e => {
              consloe.error(e)
            }
          }
        }
        reader.onerror = e => {
          consloe.error(e)
        }
      },

      /**
       * 将文件信息传递给父组件
       */
      handleEmit({ file, fileName, fileSize, isImg, imgSrc }) {
        this.$emit('file', { file, fileName, fileSize, isImg, imgSrc })
      }
    },
  }
</script>
<style scoped>
.v-upload {
  display: inline-block;
}
</style>
```

### accept 的5种取值

* 匹配图片
image/*

* 匹配音频
audio/*

* 匹配视频
video/*

* 一个有效的无扩展名 MIME type
A valid MIME type with no extensions，如：text/plain

* 用点.开头的文件扩展名，多个用英文逗号分隔
A file extension starting with the STOP character (U+002E)，如：.jpg, .png, .doc，逗号前写不写空格都可以，文件扩展名的大小写，系统一般是不予区别的，所以大小写都一样（特殊情况：如gas汇编器对于扩展名为 .s 和 .S 的文件处理方法不一样）


### 常见 accept 类型
```
* .3gpp  audio/3gpp， video/3gpp  3GPP Audio/Video
* .ac3   audio/ac3   AC3 Audio
* .asf   allpication/vnd.ms-asf  Advanced Streaming Format
* .au    audio/basic AU Audio
* .css   text/css    Cascading Style Sheets
* .csv   text/csv    Comma Separated Values
* .doc   application/msword  MS Word Document
* .dot   application/msword  MS Word Template
* .dtd   application/xml-dtd Document Type Definition
* .dwg   image/vnd.dwg   AutoCAD Drawing Database
* .dxf   image/vnd.dxf   AutoCAD Drawing Interchange Format
* .gif   image/gif   Graphic Interchange Format
* .htm   text/html   HyperText Markup Language
* .html  text/html   HyperText Markup Language
* .jp2   image/jp2   JPEG-2000
* .jpe   image/jpeg  JPEG
* .jpeg  image/jpeg  JPEG
* .jpg   image/jpeg  JPEG
* .js    text/javascript， application/javascript JavaScript
* .json  application/json    JavaScript Object Notation
* .mp2   audio/mpeg， video/mpeg  MPEG Audio/Video Stream， Layer II
* .mp3   audio/mpeg  MPEG Audio Stream， Layer III
* .mp4   audio/mp4， video/mp4    MPEG-4 Audio/Video
* .mpeg  video/mpeg  MPEG Video Stream， Layer II
* .mpg   video/mpeg  MPEG Video Stream， Layer II
* .mpp   application/vnd.ms-project  MS Project Project
* .ogg   application/ogg， audio/ogg  Ogg Vorbis
* .pdf   application/pdf Portable Document Format
* .png   image/png   Portable Network Graphics
* .pot   application/vnd.ms-powerpoint   MS PowerPoint Template
* .pps   application/vnd.ms-powerpoint   MS PowerPoint Slideshow
* .ppt   application/vnd.ms-powerpoint   MS PowerPoint Presentation
* .rtf   application/rtf， text/rtf   Rich Text Format
* .svf   image/vnd.svf   Simple Vector Format
* .tif   image/tiff  Tagged Image Format File
* .tiff  image/tiff  Tagged Image Format File
* .txt   text/plain  Plain Text
* .wdb   application/vnd.ms-works    MS Works Database
* .wps   application/vnd.ms-works    Works Text Document
* .xhtml application/xhtml+xml   Extensible HyperText Markup Language
* .xlc   application/vnd.ms-excel    MS Excel Chart
* .xlm   application/vnd.ms-excel    MS Excel Macro
* .xls   application/vnd.ms-excel    MS Excel Spreadsheet
* .xlt   application/vnd.ms-excel    MS Excel Template
* .xlw   application/vnd.ms-excel    MS Excel Workspace
* .xml   text/xml， application/xml   Extensible Markup Language
* .zip   aplication/zip  Compressed Archive

// 除了以上的类型外，2007后各文档如docx需配置的accept属性Extension MIME Type：
* .xlsx   application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
* .xltx   application/vnd.openxmlformats-officedocument.spreadsheetml.template
* .potx   application/vnd.openxmlformats-officedocument.presentationml.template
* .ppsx   application/vnd.openxmlformats-officedocument.presentationml.slideshow
* .pptx   application/vnd.openxmlformats-officedocument.presentationml.presentation
* .sldx   application/vnd.openxmlformats-officedocument.presentationml.slide
* .docx   application/vnd.openxmlformats-officedocument.wordprocessingml.document
* .dotx   application/vnd.openxmlformats-officedocument.wordprocessingml.template
* .xlsm   application/vnd.ms-excel.addin.macroEnabled.12
* .xlsb   application/vnd.ms-excel.sheet.binary.macroEnabled.12
```

常见业务场景：

匹配 excel 文件： accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

### 参考文档
* [MDN docs about accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)
* [MDN docs about MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
* [html mime type](https://mimesniff.spec.whatwg.org/#html-mime-type)
* [media types](http://www.iana.org/assignments/media-types/media-types.xhtml)
* [File input 'accept' attribute - is it useful?](https://stackoverflow.com/questions/181214/file-input-accept-attribute-is-it-useful)
* [上传图片后如何不依赖后端回显？你可能需要indexedDB存储技术](https://zhuanlan.zhihu.com/p/374692565)
* [HTML5 indexedDB前端本地存储数据库实例教程](https://www.zhangxinxu.com/wordpress/2017/07/html5-indexeddb-js-example/)
