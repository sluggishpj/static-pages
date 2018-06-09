<template>
  <div class="my-space">
    <div class="header">
      <div class="cover"></div>
      <div class="person-info">
        <div class="avatar">
          <img src="../../assets/avatar.jpg" alt="阳光女孩">
        </div>
        <div class="detail">
          <div class="name-rank">
            <span class="name">sluggishpj</span>
            <span class="rank">v8</span>
          </div>
          <div class="credits">积分：666666</div>
        </div>
      </div>
      <div class="tab-list">
        <div class="tab-item">
          <div class="item-icon">
            <img src="../../assets/star.png" alt="收藏">
          </div>
          <span class="title">收藏</span>
        </div>
        <div class="tab-item">
          <div class="item-icon">
            <img src="../../assets/setting.png" alt="设置">
          </div>
          <span class="title">设置</span>
        </div>
        <div class="tab-item">
          <div class="item-icon">
            <img src="../../assets/history-record.png" alt="浏览记录">
          </div>
          <span class="title">浏览记录</span>
        </div>
      </div>
    </div>
    <mt-cell title="全部订单" class="mt-cell all-order">
      <span>></span>
      <img slot="icon" src="../../assets/order.png" width="24" height="24">
    </mt-cell>
    <div class="four-icon">
      <a href="http://yunxtec.com/test/ad.html" target="_blank"><div>
        <img src="../../assets/wait-pay.png" alt="待付款">
        <span class="title">待付款</span>
      </div></a>
      <a href="http://yunxtec.com/test/ad.html" target="_blank"><div>
        <img src="../../assets/wait-send.png" alt="待发货">
        <span class="title">待发货</span>
      </div></a>
      <a href="http://yunxtec.com/test/ad.html" target="_blank"><div>
        <img src="../../assets/wait-receive.png" alt="待收货">
        <span class="title">待收货</span>
      </div></a>
      <a href="http://yunxtec.com/test/ad.html" target="_blank"><div>
        <img src="../../assets/wait-comment.png" alt="待评价">
        <span class="title">待评价</span>
      </div></a>
    </div>
    <mt-cell title="优惠券" class="mt-cell coupon">
      <span>></span>
      <img slot="icon" src="../../assets/coupon.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="我的积分" class="mt-cell integral">
      <span>></span>
      <img slot="icon" src="../../assets/integral.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="收货地址管理" class="mt-cell receive-address">
      <span>></span>
      <img slot="icon" src="../../assets/receive-address.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="帮助反馈" class="mt-cell feedback">
      <span>></span>
      <img slot="icon" src="../../assets/feedback.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="推荐给好友" class="mt-cell share">
      <span>></span>
      <img slot="icon" src="../../assets/share.png" width="24" height="24">
    </mt-cell>
  </div>
</template>
<script>
export default {}

</script>
<style scoped lang="scss">
.my-space {
  background: #fff;
}

.header {
  height: 32vh;
  border-bottom: 1px solid;
  position: relative;
  .cover {
    // 毛玻璃效果
    position: absolute;
    left: 0;
    right: 0;
    background-image: url('../../assets/quite-girl.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: blur(3px);
  }
  .person-info {
    height: 10vh;
    display: flex;
    align-items: center;
    position: absolute;
    left: 3vh;
    top: 8vh;
    z-index: 5;
    .avatar {
      // 头像
      height: 100%;
      img {
        height: 100%;
        border-radius: 50%;
      }
    }
    .detail {
      display: flex;
      padding-left: 2vh;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      color: #fff;
      .name-rank {
        // 名字等级
        font-size: 2.8vh;
        .name {}
        .rank {
          margin-left: 1vh;
          padding: .2vh .5vh;
          font-size: 2.2vh;
          line-height: 4vh;
          border-radius: 50%;
          background: #ff7b7b;
        }
      }
      .credits {
        font-size: 2.2vh; // 积分
        margin-left: -3.2vh;
      }
    }
  }

  .tab-list {
    background: rgba(0, 0, 0, .3);
    color: #fff;
    font-size: 2vh;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .tab-item {
      height: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .item-icon {
        flex: 0 0 4vh;
        img {
          height: 3.6vh;
        }
      }
      .title {
        padding-left: 1vh;
      }
    }
  }
}

.mt-cell {
  text-align: left;
  img {
    margin-right: 1vh;
    border-radius: 50%;
  }
}

.all-order {
  img {
    background: #F59220;
  }
}

.coupon {
  img {
    background: #F15092;
  }
}

.integral {
  img {
    background: #FD6801;
  }
}

.receive-address {
  img {
    background: #FF9D59;
  }
}

.feedback {
  img {
    background: #53C41B;
  }
}

.share {
  img {
    background: #6FA6F8;
  }
}

// 四个图标
.four-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12vh;
  border-bottom: 5px solid #E9E9E9;
  a {
    width: 100%;
    display: flex;
    text-decoration: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 4vh;
      height: 4vh;
    }

    .title {
      color: #5D5D5D;
      font-size: 2vh;
    }
  }
}

</style>
