// components/projectsli/projectsli.js

const util = require('../../utils/util');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    article: {
      type: Object,
      value: {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSourceImgError: function (event) {
      var self = this;
      var data = self.data.article;
      data.submitted_user.img_url = "/images/icon/tou_25@3x.png";
      self.setData({
        link: data
      });
    },

    getAvatorUrl: function () {
      var article = this.data.article
      var avatorUrl = article.avatorUrl
      if (null == avatorUrl || avatorUrl == "") {
        avatorUrl = util.getRandomUrl(20, 20, this.data.article.author)
        article.avatorUrl = avatorUrl
        this.setData({
          article: article
        })
      }
      return avatorUrl
    },

  }
})