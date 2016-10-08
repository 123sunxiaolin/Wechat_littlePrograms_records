var key = '';
var data = '';

Page({
 /* data:{
    // text:"这是一个页面"
  },*/
 formSubmit:function(e){
   var aKey = e.detail.value.key;
   console.log("key:"+key)
   var aData = e.detail.value.value
   console.log("value:"+data)
   key = aKey ? aKey :''
   data = aData ? aData : ''
 },
 onKeyInput:function(e){
   console.log(e.detail.value)
   key = e.detail.value
 },
 onDataInput:function(e){
   console.log(e.detail.value)
   data = e.detail.value
 },
 getData:function(){
   //同步的方法
   /*var value = wx.getStorageSync(key)
   console.log(value)*/
   //异步的方法
   wx.getStorage({
     key:key,
     success:function(res){
       console.log(res.data)
     }
   })
 },
 storeData:function(){
   //同步的方法
   //wx.setStorageSync(key,data)
   //异步的方法
   wx.setStorage({
     key:key,
     data:data
   })

 },
 clearData:function(){
   //同步方法
   //wx.clearStorageSync()
   //异步方法
   wx.clearStorage()
 }

})