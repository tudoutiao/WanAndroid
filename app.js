// app.js
// 图片资源地址 https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=33
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    this.initObserve()
  },

  // 监听globalData中属性变化
  initObserve() {
    const obj = this.globalData;

  
  },


  globalData: {
    userInfo: null,
    domain: "https://www.wanandroid.com",
  }
})