<template>
  <div id="app">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="home">
        <Home />
      </mt-tab-container-item>
      <mt-tab-container-item id="goods">
        <Goods :goodslist="goodslist" @addToCart="addToCart" @removeFromCart="removeFromCart" />
      </mt-tab-container-item>
      <mt-tab-container-item id="shopCart">
        <ShopCart :goodslist="goodslist" @addToCart="addToCart" @removeFromCart="removeFromCart" @deleteGoods="deleteGoods" />
      </mt-tab-container-item>
      <mt-tab-container-item id="mySpace">
        <MySpace />
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部固定按钮栏 -->
    <mt-tabbar v-model="selected" :fixed="true" class="tabbar">
      <mt-tab-item id="home">
        <img slot="icon" :src="homeImgUrl"> 首页
      </mt-tab-item>
      <mt-tab-item id="goods">
        <img slot="icon" :src="menuImgUrl"> 商品
      </mt-tab-item>
      <mt-tab-item id="shopCart">
        <mt-badge size="small" class="shop-cart-badge" v-if="shopCartCount">{{shopCartCount}}</mt-badge>
        <img slot="icon" :src="shopCartUrl"> 购物车
      </mt-tab-item>
      <mt-tab-item id="mySpace">
        <img slot="icon" :src="mySpaceUrl"> 我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Home from './components/home/home.vue'
import Goods from './components/goods/goods.vue'
import ShopCart from './components/shop-cart/shop-cart.vue'
import MySpace from './components/my-space/my-space.vue'
import api from './fetch/api.js'

var homeImg = require('./assets/home.png')
var homeImgActive = require('./assets/home-active.png')
var menuImg = require('./assets/menu.png')
var menuImgActive = require('./assets/menu-active.png')
var shopCartImg = require('./assets/shop_cart.png')
var shopCartImgActive = require('./assets/shop_cart-active.png')
var mySpaceImg = require('./assets/my.png')
var mySpaceImgActive = require('./assets/my-active.png')

export default {
  name: 'App',
  components: {
    Home,
    Goods,
    ShopCart,
    MySpace
  },

  data() {
    return {
      selected: 'home',
      goodslist: []
    }
  },

  methods: {
    addToCart(goodsName) {
      // 添加某一商品数量
      this.goodslist.map(goods => {
        if (goods.goods === goodsName) {
          if (goods.count === undefined) {
            this.$set(goods, 'count', 1)
          } else {
            goods.count++
          }
        }
        return goods
      })
      window.localStorage.setItem('goodslist', JSON.stringify(this.goodslist))
    },

    removeFromCart(goodsName) {
      // 减少某一商品数量
      this.goodslist.map(goods => {
        if (goods.goods === goodsName) {
          if (goods.count === undefined || goods.count === 1) {
            this.$set(goods, 'count', 0)
          } else {
            goods.count--
          }
        }
        return goods
      })
      window.localStorage.setItem('goodslist', JSON.stringify(this.goodslist))
    },

    deleteGoods(goodsName) {
      // 清空某件商品
      this.goodslist = this.goodslist.map(goods => {
        if (goods.goods === goodsName) {
          goods.count = 0
        }
        return goods
      })
      window.localStorage.setItem('goodslist', JSON.stringify(this.goodslist))
    }
  },

  computed: {
    shopCartCount() {
      // 更新商品总数量
      let count = 0
      this.goodslist.map(goods => {
        if (goods.count !== undefined) {
          count += goods.count
        }
      })
      return count
    },
    homeImgUrl() {
      return this.selected === 'home' ? homeImgActive : homeImg
    },
    menuImgUrl() {
      return this.selected === 'goods' ? menuImgActive : menuImg
    },
    shopCartUrl() {
      return this.selected === 'shopCart' ? shopCartImgActive : shopCartImg
    },
    mySpaceUrl() {
      return this.selected === 'mySpace' ? mySpaceImgActive : mySpaceImg
    }
  },

  mounted() {
    api.getGoodsList()
      .then(res => {
        this.goodslist = res
      })
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-bottom: 55px;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #F8F8F8;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

.tabbar {
  height: 8.2vh;
  border-top: 1px solid #ccc;
}

.shop-cart-badge {
  position: fixed;
  right: 30vw;
  bottom: 5vh;
}

</style>
