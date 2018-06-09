<template>
  <div class="home">
    <!-- 搜索栏 -->
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索" class="search"></mt-search>
    <!-- swipe栏 -->
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="(ad, i) of adlist" :key="i">
        <a :href="ad.url" target="_blank" class="adlink">
          <img :src="ad.img" :title="ad.name">
        </a>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 功能快捷链接图标 -->
    <div class="icon-list">
      <!-- 四个图标 -->
      <div class="four-icon">
        <div>
          <img src="../../assets/tmall.png" alt="天猫">
          <span class="title">天猫</span>
        </div>
        <div>
          <img src="../../assets/jd.png" alt="京东">
          <span class="title">京东</span>
        </div>
        <div>
          <img src="../../assets/facebook.png" alt="Facebook">
          <span class="title">Facebook</span>
        </div>
        <div>
          <img src="../../assets/alibaba.png" alt="阿里巴巴">
          <span class="title">阿里巴巴</span>
        </div>
      </div>
      <div class="two-icon">
        <div>
          <img src="../../assets/qq.png" alt="QQ">
          <span class="title">QQ</span>
        </div>
        <div>
          <img src="../../assets/quanqiugou.png" alt="全球购">
          <span class="title">全球购</span>
        </div>
      </div>
    </div>

    <!-- 今日优惠组件 -->
    <TodayDiscount />
  </div>
</template>
<script>
import api from '../../fetch/api.js'
import TodayDiscount from '../today-discount/today-discount.vue'

export default {
  components: {
    TodayDiscount // 今日优惠列表组件
  },

  data() {
    return {
      value: '',
      adlist: []
    }
  },

  mounted() {
    api.getADList()
      .then(res => {
        this.adlist = res
      })
  }
}
</script>
<style lang="scss">
.home {
  background: #fff;
}
.search {
  position: fixed;
  left: 0;
  top: 0;
  height: 8vh !important;
  z-index: 2;
  width: 100vw;
  .mint-searchbar {
    background-color: rgba(0, 0, 0, .3);
    .mint-searchbar-inner {
      border-radius: 10vw;
    }
    .mint-searchbar-cancel {
      // 取消
      color: #fff;
    }
  }
}

// 滚动栏图片
.swipe {
  // position: fixed;
  background: orange;
  height: 34vh !important;
  .adlink {
    display: block;
    img {
      width: 100%;
    }
  }
}

// 四个图标
.four-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  border: 1px solid #E9E9E9;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 8vh;
      height: 8vh;
    }

    .title {
      color: #5D5D5D;
      font-size: 2vh;
    }
  }
}

// 两个图标
.two-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 8vh;
      height: 8vh;
      border-radius: 50%;
    }
    .title {
      color: #5D5D5D;
      padding-left: 1.5vh;
    }
  }
}

</style>
