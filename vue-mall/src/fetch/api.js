import axios from 'axios'

axios.defaults.baseURL = 'http://yunxtec.com'

const inHTTPS = window.location.href.indexOf('https') !== -1

// 本地模拟数据，如果在HTTPS环境下就返回这些数据
const localData = {
  adlist: [{ index: '1', name: '创意广告1', img: 'http://yunxtec.com/test/img/ad1.jpg', url: 'http://yunxtec.com/test/ad.html' }, { index: '2', name: '创意广告2', img: 'http://yunxtec.com/test/img/ad2.jpg', url: 'http://yunxtec.com/test/ad.html' }, { index: '3', name: '创意广告3', img: 'http://yunxtec.com/test/img/ad3.jpg', url: 'http://yunxtec.com/test/ad.html' }, { index: '4', name: '创意广告4', img: 'http://yunxtec.com/test/img/ad4.jpg', url: 'http://yunxtec.com/test/ad.html' }],
  discount: [{ goods: '罗技（Logitech）G502 炫光自适应游戏鼠标', descr: '罗技（Logitech）G502 炫光自适应游戏鼠标 RGB鼠标 FPS鼠标 吃鸡鼠标', img: 'http://yunxtec.com/test/img/1.jpg', url: 'http://yunxtec.com/test/ad.html', price: '379.00', dprice: '379.00' }, { goods: 'Apple 妙控鼠标2/无线鼠标2代 - 银色', descr: '新年添心意，便捷新生活Apple产品的配件', img: 'http://yunxtec.com/test/img/2.jpg', url: 'http://yunxtec.com/test/ad.html', price: '522.00', dprice: '499.00' }, { goods: '西部数据120G固态硬盘(WDS120G1G0A)', descr: '【热销单品，限时特惠！】匠心之作，只为游戏存储而生！29年来只专注存储领域的安全与体验！', img: 'http://yunxtec.com/test/img/6.jpg', url: 'http://yunxtec.com/test/item.html', price: '1549.00', dprice: '1433.00' }, { goods: '华硕8倍速USB2.0外置移动DVD光驱', descr: '买光驱，选自营，正品机芯，1年换新售后！ 酷薄外形，3.4+万好评，即插即用，兼容MAC！', img: 'http://yunxtec.com/test/img/7.jpg', url: 'http://yunxtec.com/test/item.html', price: '249.00', dprice: '212.00' }],
  goodslist: [{ goods: '罗技（Logitech）G502 炫光自适应游戏鼠标', descr: '罗技（Logitech）G502 炫光自适应游戏鼠标 RGB鼠标 FPS鼠标 吃鸡鼠标', img: 'http://yunxtec.com/test/img/1.jpg', url: 'http://yunxtec.com/test/item.html', price: '379.00' }, { goods: 'Apple 妙控鼠标2/无线鼠标2代 - 银色', descr: '新年添心意，便捷新生活Apple产品的配件', img: 'http://yunxtec.com/test/img/2.jpg', url: 'http://yunxtec.com/test/item.html', price: '522.00' }, { goods: '微软（Microsoft ）Xbox蓝牙手柄+PC连接线', descr: '', img: 'http://yunxtec.com/test/img/3.jpg', url: 'http://yunxtec.com/test/item.html', price: '429.00' }, { goods: '戴尔U2417H显示器', descr: '戴尔（DELL） U2417H 23.8英寸四边微边框旋转升降IPS屏 出厂色彩校准 99%sRGB 电脑吃鸡显示器', img: 'http://yunxtec.com/test/img/4.jpg', url: 'http://yunxtec.com/test/item.html', price: '1549.00' }, { goods: '西部数据网络储存硬盘(WD40EFRX)', descr: '品质铸造品牌！红盘、专为网络存储而设计，不仅仅是NAS硬盘，更是网络存储时代的开拓者！', img: 'http://yunxtec.com/test/img/5.jpg', url: 'http://yunxtec.com/test/item.html', price: '999.00' }, { goods: '西部数据120G固态硬盘(WDS120G1G0A)', descr: '【热销单品，限时特惠！】匠心之作，只为游戏存储而生！29年来只专注存储领域的安全与体验！', img: 'http://yunxtec.com/test/img/6.jpg', url: 'http://yunxtec.com/test/item.html', price: '1549.00' }, { goods: '华硕8倍速USB2.0外置移动DVD光驱', descr: '买光驱，选自营，正品机芯，1年换新售后！ 酷薄外形，3.4+万好评，即插即用，兼容MAC！', img: 'http://yunxtec.com/test/img/7.jpg', url: 'http://yunxtec.com/test/item.html', price: '249.00' }, { goods: '金士顿(Kingston)DDR4 2400 8G 笔记本内存', descr: '精选高品质颗粒,严格出厂检测,笔记本升级优质之选！', img: 'http://yunxtec.com/test/img/8.jpg', url: 'http://yunxtec.com/test/item.html', price: '699.00' }, { goods: '罗技MK520无线键鼠套装 ', descr: '坚持到底，为信仰打Call买罗技M238球迷鼠标即送RIO微醺10罐装一组，下单即抽Craft（赠品以订单信息为准）', img: 'http://yunxtec.com/test/img/9.jpg', url: 'http://yunxtec.com/test/item.html', price: '259.00' }, { goods: '赛德斯烽影机械键盘鼠标套装', descr: '【京东自营】真机械键鼠套装，7种背光模式切换，铝合金面板，双色注塑不掉色键帽，为游戏而生！', img: 'http://yunxtec.com/test/img/10.jpg', url: 'http://yunxtec.com/test/item.html', price: '169.00' }]
}

function promisify(data) {
  return Promise.resolve(data)
}

function doGet(url, params) {
  let keyName = url.match(/\/([^/]+)\.php/)[1]
  if (inHTTPS) {
    return promisify({data: {[keyName]: localData[keyName]}})
  } else {
    return axios.get(url, { params: params })
  }
}

var storage = window.localStorage

function getLocalOrRemote(keyName) {
  if (storage.getItem(keyName) === null) { // 本地localStorage找不到
    return doGet(`/test/${keyName}.php`)
      .then(res => {
        console.log('获取数据', res.data)
        // 保存到本地localStorage
        storage.setItem(keyName, JSON.stringify(res.data[keyName]))
        return promisify(res.data[keyName])
      }).catch(err => {
        console.log('获取数据失败', err)
      })
  } else { // 本地localStorage找到了
    return promisify(JSON.parse(storage.getItem(keyName)))
  }
}

export default {
  // 获取广告数据
  getADList() {
    return getLocalOrRemote('adlist')
  },

  // 今日优惠数据
  getDiscount() {
    return getLocalOrRemote('discount')
  },

  // 商品数据
  getGoodsList() {
    return getLocalOrRemote('goodslist')
  }
}
