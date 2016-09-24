//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    message:"简单的数据绑定",
    message1:"控制属性的数据绑定",
    flag:true,
    hidden:true,
    a:5,
    b:6,
    c:1,
    foo:"foo",
    bar:"bar",
    message2:"控制属性的数据绑定的另一个界面",
    length:1


  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  click:function(){
    this.setData({
      flag:!this.data.flag,
      length:++this.data.length
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
