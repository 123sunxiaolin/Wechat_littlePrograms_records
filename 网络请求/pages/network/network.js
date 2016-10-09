var util = require('../utils/utils.js')
const APIURL = "http://apicloud.mob.com/appstore/lucky/mobile/query?key=17113fceca309&mobile="

var pageData = {
    data:{
        isGetLoading:false,
        isPostLoading:false
    },
    onClickGet:function(){
        var that = this
        this.setData({
            isGetLoading:true
        }),
        wx.request({
            url:'',
            data:{
                x:'',
                y:''
            },
            header:{
                "Content-Type":"application/json"
            },
            method:'GET',
            success:function(res){

                that.setData({
                    isGetLoading:false
                })
                var data = res.data 
                console.log(data)
            },
            fail:function(){
                that.setData({
                    isGetLoading:false
                })
                console.log('请求失败')
            },
            complete:function(){
                console.log('请求完成')
            }

        })
    },
    onClickPost:function(){

         var that = this
        this.setData({
            isPostLoading:true
        }),
        wx.request({
            url:'',
            data:{
                x:'',
                y:''
            },
            header:{
                "Content-Type":"application/json"
            },
            method:'POST',
            success:function(res){

                that.setData({
                    isPostLoading:false
                })
                var data = res.data 
                console.log(data)
            },
            fail:function(){
                that.setData({
                    isPostLoading:false
                })
                console.log('请求失败')
                
            },
             complete:function(){
                console.log('请求完成')
            }

        })
    },
    onClickPack:function(){
        util.httpClient(APIURL, {}, 'GET', (error,data) =>{
            console.log('error:'+error)
            console.log('data:'+data)

        })

    }

}
Page(pageData)