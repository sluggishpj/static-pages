<template>
  <div class="goods">
    <div class="header">
      <div class="title">商品</div>
      <div class="tab-list">
        <div class="tab">综合</div>
        <div class="tab">销量</div>
        <div class="tab tab-price">价格<span>></span></div>
        <div class="tab">店铺</div>
      </div>
    </div>
    <div class="goodslist" v-if="goodslist.length">
      <div v-for="(goods,idx) of goodslist" class="goods" :key="idx">
        <div class="avatar">
          <img :src="goods.img" alt="goods.desc" title="goods.desc">
        </div>
        <div class="name">
          {{goods.goods}}
        </div>
        <div class="price-control">
          <div class="price">¥{{goods.price}}</div>
          <div class="control">
            <cartControl :goods="goods" @addToCart="addToCart" @removeFromCart="removeFromCart" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cartControl from '../cart-control/cart-control.vue'

export default {
  props: {
    goodslist: {
      type: Array,
      default() {
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
    removeFromCart(goodsName) {
      this.$emit('removeFromCart', goodsName)
    }
  }
}

</script>
<style scoped lang="scss">
.goods {
  background: #fff;
}
.header {
  .title {
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 3vh;
    border-bottom: 1px solid #ccc;
  }
  .tab-list {
    height: 6vh;
    display: flex;
    box-shadow: 0 1px 1px -1px #ccc;
    align-items: center;
    justify-content: center;
    font-size: 2.2vh;

    .tab {
      flex: 1;
      &.tab-price span {
        display: inline-block;
        transform: rotate(90deg);
      }
    }
  }
}

.goodslist {
  // 商品列表
  display: flex;
  flex-wrap: wrap;
  background: #F8F8F8;
  .goods {
    box-sizing: border-box;
    flex: 0 1 50%;
    // border: 1px solid #ccc;
    white-space: nowrap;
    overflow: hidden;
    background-color: #fff;
    background-clip: content-box;
    &:nth-child(2n+1) {
      padding: 2vh 1vh 0 2vh;
    }

    &:nth-child(2n) {
      padding: 2vh 2vh 0 1vh;
    }

    .avatar {
      // 商品图片
      width: 100%;
      img {
        width: 100%;
        // border: 1px solid #ccc;
      }
    }

    .name {
      // 商品名
      width: 100%;
      line-height: 2;
      font-size: 2.3vh;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .price-control {
      display: flex;
      align-items: flex-end;
      height: 6vh;
      font-size: 2.3vh;
      justify-content: space-between;
      .price {
        // 价格
        color: #DC8385;
      }
    }
  }
}

</style>
