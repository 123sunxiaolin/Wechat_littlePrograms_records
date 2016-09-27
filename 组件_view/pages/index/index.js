//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    description:"弹性框模型分为弹性容器以及弹性项目。当组件的display为flex或inline-flex时，该组件则为弹性容器，弹性容器的子组件为弹性项目。"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
