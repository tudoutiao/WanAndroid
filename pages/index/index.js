// index.js
// 获取应用实例
const app = getApp()
const domain = app.globalData.domain

Page({
  data: {
    bannerData: [],
    topListData: [],
    fetchArticles:[],
    loading:true,
    isHidden:true,
    loadmore:false,
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //轮播
  getBannerList() {
    wx.request({
      url: domain + '/banner/json',
      success: res => {
        console.log(res)
        this.setData({
          bannerData: res.data.data
        })
      }
    })
  },
  getTopList() {
    wx.request({
      url: domain + '/article/top/json',
      success: res => {
        console.log(res)
        var list=res.data.data
        for(var i=0;i<list.length;i++){
          list[i].isTop=true
        }
        this.setData({
          topListData: list
        })
      }
    })
  },

  getFetchArticles(page=0){
    wx.request({
      url: domain+`/article/list/${page}/json`,
      success:res=>{
        console.log(res.data)
        var datas=res.data.data.datas
        this.setData({
          fetchArticles:datas,
          loading:false
        })
        wx.hideLoading();
      }
    })
  },



  onLoad() {
    wx.showLoading({
      title: '加载中...',
    })
    this.getBannerList()
    this.getTopList()
    this.getFetchArticles()
  },


  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})