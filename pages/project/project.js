// pages/project/project.js

// 获取应用实例
const app = getApp()
const domain = app.globalData.domain

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navDataList: [],
    projectList:[],
    currentTab: 0,
    navScrollLeft: 0,

  },
  //项目分类
  getProjectList() {
    wx.request({
      url: domain + '/project/tree/json',
      success: res => {
        // console.log(res.data.data)
        var list= res.data.data
        this.setData({
          navDataList: list
        })
        wx.hideLoading();
        this.getProjectDatas(list[this.data.currentTab].id)
      }
    })
  },

  //项目列表数据
  getProjectDatas(cid, page = 1) {
    wx.request({
      url: domain + `/project/list/${page}/json`,
      data: {
        cid: cid,
      },
      success:res=>{
        console.log(res.data.data.datas)
        this.setData({
          projectList:res.data.data.datas
        })
      }
    })
  },

  //事件处理函数
  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })

    wx.showLoading({
      title: '加载中...',
    })
    this.getProjectList()


  },

  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/4
    var singleNavWidth = this.data.windowWidth / 4;
    console.log("--cur-" + cur + "--" + singleNavWidth)
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur < 2 ? 0 : (cur - 1) * singleNavWidth)
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
    console.log(`#tab-page-${cur}`)
    this.selectComponent(`#tab-page-${cur}`).getProjectDatas(this.data.navDataList[cur].id)


  },

  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 4;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur < 2 ? 0 : (cur - 1) * singleNavWidth)
    });

   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})