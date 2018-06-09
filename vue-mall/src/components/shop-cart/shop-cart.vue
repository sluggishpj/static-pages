<template>
  <div class="shop-cart">
    <div class="header">
      购物车
    </div>
    <div class="goodslist" v-if="goodslist.length">
      <div v-for="(goods,idx) of goodslist" class="goods" :key="idx" v-if="goods.count">
        <div class="avatar">
          <img :src="goods.img" alt="goods.desc" title="goods.desc">
        </div>
        <div class="detail">
          <div class="name">
            {{goods.goods}}
          </div>
          <div class="descr">
            {{goods.descr}}
          </div>
          <div class="price">
            <div>价格：<span class="unit-price">¥{{goods.price}}×{{goods.count}}</span></div>
            <div>合计：<span class="all-price">¥{{goods.price*goods.count}}</span></div>
          </div>
          <div class="control">
            <cartControl :goods="goods" @addToCart="addToCart" @removeFromCart="removeFromCart" />
            <mt-button type="danger" class="delete" @click="deleteGoods(goods.goods)">删除</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cartControl from '../cart-control/cart-control.vue'
import {MessageBox} from 'mint-ui'

export default {
  props: {
    goodslist: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    cartControl
  },
  methods: {
    addToCart(goodsName) {
      this.$emit('addToCart', goodsName)
    },
    removeFromCart(goodsName, count) {
      if (count > 1) {
        // 大于1才减少
        this.$emit('removeFromCart', goodsName)
      }
    },
    deleteGoods(goodsName) {
      console.log('deleteGoods', goodsName)
      MessageBox.confirm('确定要删除该商品吗？')
        .then(() => {
          this.$emit('deleteGoods', goodsName)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}

</script>
<style scoped lang="scss">
.shop-cart {
  .header {
    // 购物车三字
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 3vh;
    border-bottom: 1px solid #ccc;
  }

  .goods {
    display: flex;
    border-bottom: 1px solid #DEDEDE;
    height: 20vh;
    align-items: center;
    padding: 1.6vh;
    .avatar {
      // 左边商品图片
      flex: 0 0 16vh;
      img {
        width: 100%;
      }
    }
    .detail {
      // 右边详情
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      white-space: nowrap;
      overflow: hidden;
      padding-left: 1.3vh;
      .name, .descr {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name {
        // 商品名
        font-size: 2.6vh;
      }
      .descr {
        // 商品描述
        color: #969696;
        font-size: 2vh;
        padding: 0.4vh;
      }
      .price, .control {
        // 价格，操作按钮
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.6vh 0;
      }
      .price {
        color: #969696;
        font-size: 2.4vh;
        .all-price {
          // 总价
          color: #FF0114;
        }
      }
      .control {
        .delete {
          // 删除按钮
          height: 4.4vh;
        }
      }
    }
  }
}

</style>
