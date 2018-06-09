<!-- 今日优惠 -->
<template>
  <div class="today-discount">
    <div class="head">
      <div class="head-icon">
        <img src="../../assets/present.png">
      </div>
      <p class="head-title">今日优惠</p>
    </div>
    <div class="discount-list">
      <div v-for="(item, i) in discountList" :key="i" class="discount-item">
        <div class="avatar">
          <img :src="item.img" alt="item.goods">
        </div>
        <div class="detail">
          <div class="desc">
            <span class="hot">今日</span>
            <span class="title">{{item.goods}}</span>
          </div>
          <div class="dprice">¥{{item.dprice}}</div>
          <div class="price">
            <span>原价{{item.price}}</span>
            <span>299人已购买</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '../../fetch/api.js'
export default {
  data() {
    return {
      discountList: []
    }
  },
  mounted() {
    api.getDiscount()
      .then(res => {
        this.discountList = res
      })
  }
}
</script>
<style scoped lang="scss">
.today-discount {
  .head {
    // 今日优惠标题
    height: 4vh;
    background: #E9E9E9;
    display: flex;
    align-items: center;
    .head-icon {
      height: 100%;
      padding: 0 2vw;
      display: flex;
      align-items: center;
      img {
        height: 80%;
      }
    }
  }
}

// 优惠项
.discount-item {
  height: 20vh;
  display: flex;
  align-items: center;
  border: 1px solid #E9E9E9;
  padding-left: 2vh;
  .avatar {
    // 左边图片
    flex: 0 0 17vh;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      border: 1px solid #E9E9E9;
    }
  }

  .detail {
    // 右边说明
    flex: 1;
    height: 90%;
    padding: 0 3vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .desc {
      width: 100%;
      height: 4vh;
      display: flex;
      align-items: center;
      .hot {
        // 今日两字
        flex: 0 0 2vh;
        color: #FDC788;
        font-size: 2vh;
        line-height: 3vh;
        height: 3vh;
        border: 1px solid #FDC788;
      }
      .title {
        // 商品名
        flex: 1;
        padding-left: 1vh;
        font-size: 2.6vh;
        line-height: 3vh;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .dprice {
      // 现价
      color: #F9453C;
      font-size: 2.6vh;
      padding-left: 2vh;
    }

    .price {
      // 原价和购买人数
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: #D3D2D2;
      font-size: 1.6vh;
      padding-left: 2vh;
      span:first-child {
        // 原价
        text-decoration: line-through;
      }
      span:last-child {
        padding-right: 2vh;
      }
    }
  }
}

</style>
