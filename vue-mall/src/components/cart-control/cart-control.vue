<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="goods.count>0" @click="decreaseCart">
        -
      </div>
    </transition>
    <div class="cart-count" v-if="goods.count>0">
      {{goods.count}}
    </div>
    <div class="cart-add" @click="addCart">
      +
    </div>
  </div>
</template>
<script>

export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addCart() {
      // 添加到购物车
      this.$emit('addToCart', this.goods.goods)
    },
    decreaseCart() {
      this.$emit('removeFromCart', this.goods.goods, this.goods.count)
    }
  }
}
</script>
<style lang="scss">
.cartcontrol {
  font-size: 2.3vh;
  height: 4vh;
  line-height: 4vh;
  .cart-decrease, .cart-add {
    display: inline-block;
    width: 4vh;
    height: 4vh;
    border-radius: 50%;
    color: #fff;
    background: #FE4140;
  }

  .cart-count {
    display: inline-block;
  }

  // 动画
  .move-enter,
  .move-leave-to {
    opacity: 0; // 同时运行多个动画
    transform: translateX(24px) rotate(180deg);
  }
  .move-enter-active,
  .move-leave-active {
    transition: all 0.4s linear;
  }
}

</style>
