// components/tabpage/tabpage.js

// 获取应用实例
const app = getApp()
const domain = app.globalData.domain

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navData:{
      type:Object,
      value:{}
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    projectList:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getProjectDatas(cid, page = 1) {
      wx.request({
        url: domain + `/project/list/${page}/json`,
        data: {
          cid: cid,
        },
        success:res=>{
          // console.log(res.data.data.datas)
          this.setData({
            projectList:res.data.data.datas
          })

          // console.log(this.data.projectList)
        }
      })
    },
  },
 

})
