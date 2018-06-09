import axios from 'axios'

axios.defaults.baseURL = 'http://yunxtec.com'

function doGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

var storage = window.localStorage

function promisify(data) {
  return Promise.resolve(data)
}

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
