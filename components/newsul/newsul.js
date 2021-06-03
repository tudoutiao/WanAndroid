// components/newsul/newsul.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articles:{
      type:Array,
      value:[],
    },
    type:{
      type:Number,
      value:0,
    }

    
  },
  observers:{//数据监听器，监听属性或内部数据得变化。替换properties中的observer
    'articles':function(article){
      
    }
  },


  /**
   * 组件的初始数据
   */
  data: {

  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
      console.log(this)
    },
    hide: function () { },
    resize: function () { },
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
