## vue-mall

### 说明

学校移动web课程设计



### 在线演示

https://sluggishpj.github.io/static-pages/vue-mall/dist/



### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```



### 技术栈

Vue + sass + axios + mint-ui 



### 组件结构

![1528535644769](assets/1528535644769.png)



### 项目目录

```bash
src
├─assets （静态资源，如图片，字体）
├─components
│  ├─cart-control （增加删除购物车商品组件）
│  ├─goods （商品列表组件）
│  ├─home （首页组件）
│  ├─my-space （个人中心组件）
│  ├─shop-cart （购物车组件）
│  └─today-discount （今日优惠商品组件）
├─fetch （获取服务端数据）
├─App.vue （程序入口文件）
├─main.js （webpack入口文件）
```



### 问题及解决

#### 将打包后的项目中的文件引用生成为相对路径

* 修改`config/index.js`文件，将build配置中`assetsPublicPath`设置为`./`

```js
build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    // 这样配置后，html中的资源路径如下
    // href=./static/css/app.b2d4913b2cc9e68a20a4b231a1cf3a15.css
    // ...
}
```

* 这样修改后，会导致**以链接形式**导入的**背景图片**build后路径不正确

```vue
// build后路径不正确
background-image: url('../../assets/quite-girl.jpg');

// build后路径正确
<div :style="{backgroundImage: `url(${require('../../assets/quite-girl.jpg')})`}"></div>
```

* 修复。在build/utils.js文件中exports.cssLoaders函数中的generateLoaders函数新增一行`publicPath: '../../'`

```js
exports.cssLoaders = function (options) {
  // ...
  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
	// ...
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        publicPath: '../../', // 注意!!!新增的
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }
// ...
}
```

* 这样修改后，可以直接在本地中打开`dist/index.html`运行

