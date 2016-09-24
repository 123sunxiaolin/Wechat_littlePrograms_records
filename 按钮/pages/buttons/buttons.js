var app = getApp();
var isSize;

var pageObject = {
    data:{
        //defaultdefault Button
        defaultSize:"default",
        primarySize:"default",
        warnSize:"default",
        loading:false,
        //设置按钮是否镂空，背景色透明
        plain:false,
        disabled:false,
        status:"默认状态"

    },

    //添加default按钮的点击事件
    onClickDefault:function(){
         console.log('onClickDefault')
         this.setData({
             
             loading:!this.data.loading,
             status:!this.data.loading ? "正在加载" : "停止加载",
         })

    },
    onClickPrimary:function(){
        console.log('onClickPrimary')
        this.setData({
            primarySize : isSize ? "default" : "mini",
            status:isSize ? "大" : "小",

        })
        isSize = !isSize
    },
    onClickWarn:function(){
        console.log('onClickWarn')
        this.setData({
             plain:!this.data.plain,
             status:!this.data.plain ? "透明" : "不透明",
        })
    },

    setDisabled:function(){
        console.log('onsetDisabled')
        this.setData({
            disabled:!this.data.disabled
        })
    },

    onLoad:function(){

        console.log('onLoad')
        isSize = false;

    }
}

Page(pageObject)