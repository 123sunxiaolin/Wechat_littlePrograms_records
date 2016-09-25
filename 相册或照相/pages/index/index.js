//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl : "http://upload-images.jianshu.io/upload_images/1713024-c31b3c863f171d18.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w",
      nickName : "Jack_lin" 
    },
    imageUrl:null
  },
  onClick:function(e){

    //点击事件传递的信息
    console.log(e)
    console.log("Target =" + e.target)
    console.log("currentTarget = "+e.currentTarget)
    console.log("value="+e.target.dataset.value)
    console.log(e.touches[0])

    var that = this
    wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    var tempFilePaths = res.tempFilePaths
    that.setData({
      imageUrl:tempFilePaths
    })

  }
})

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
