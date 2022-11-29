# 前端项目中的各种配置文件一览

### .editorconfig
和 Prettier 类似，都是用来配置格式化代码的，用于在基本代码库中维持一致的编码风格和设置，例如缩进样式、选项卡宽度、行尾字符以及编码等，而无需考虑使用的编辑器或 IDE

### .eslintignore
设置 ESLint 忽略特定的文件或目录

### .eslinttrc.js
ESLint 规则配置，和 package.json 里的 eslintConfig 配置一样，如果同时存在，则只读取项目下的 .eslintrc.js 文件

### .gitignore
设置 git 忽略特定的文件或目录

### .npmignore
设置 npm 忽略特定的文件或目录，一般发布自己开发的包到 npm 上会用到

### .yarnrc
yarn 的配置文件，一般可以用来设置镜像源及包的路径

### .npmrc
和 .yarnrc 类似

### .babelrc
babel 的配置文件，一般用于配置转码规则和插件，和 babel.config.js 一样(但这个需要 babel 7.x  以上版本，推荐使用这个)

### babel.config.js
同 .babelrc

### .postcssrc.js
PostCSS 解析 CSS 代码的配置，和 .postcssrc.js、postcss.config.js 一样

### postcss.config.js
同 .postcssrc.js

### .prettierrc
右键格式化的时候，编辑器会自动补全，但部分符号在eslint中会报语法错误，于是可以通过 .prettierrc 来配置，同 prettier.config.js 和 .prettierrc.js 一样

### prettier.config.js
同 .prettierrc

### .browserslistrc
配置浏览器兼容，和 package.json 里的 browserslist 一样，默认是兼容所有最新版本

### package.json
前端大管家，npm 项目配置文件，name 和 version 必须，npm init 时会自动生成

### vue.config.js
vue 项目配置文件，代替 vue-cli3 之前的 webpack.config.js 配置

### vite.config.js
使用 vite 做为打包工具项目的配置文件，注意 vue 项目中如果使用的 webpack 配置文件是 vue.config.js，但是如果使用的是 vite 则是 vite.config.js

### webpack.config.js
webpack 的配置文件

### jest.config.js
jest 测试配置文件

### cypress.json
cypress 测试配置文件

### tsconfig.json
TypeScript 项目配置文件，指定编译项目所需的根文件和编译器选项等

### jsconfig.json
源于 tsconfig.json，jsconfig.json 的配置是 tsconfig.json 的子集