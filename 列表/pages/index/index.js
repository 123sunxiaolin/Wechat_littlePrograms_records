//index.js
//获取应用实例
var app = getApp()

Page( {
  data: {
    flag1:false,
    flag2:false,
    flag3:false,

   items: [{
    message: 'foo',
  },{
    message: 'bar'
  }],
  array:[{
    message:"自定义列表的下标和元素"
  },{
    message:"自定义列表的下标和元素"
  }]
  },

 buttonClick1:function(){
   this.setData({
     flag1:!this.data.flag1
   })
 },

 buttonClick2:function(){
   this.setData({
     flag2:!this.data.flag2
   })
 },
 buttonClick3:function(){
    this.setData({
     flag3:!this.data.flag3
   })
 },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据

  }

})
