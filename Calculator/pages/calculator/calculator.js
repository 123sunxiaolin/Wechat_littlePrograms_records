var isCalculating = false;
var formerNumer = 0;
var latterNumber = 0;
var action = ''
var isEnd = false

// var pageData = {
//     data:{
//     inputValue:"0"
//   },
// /*
// 算数操作
// */
// onPlus:function(){
//     console.log("+")

//     if(!isCalculating){

//         isCalculating = true;
//         isEnd = false
//         action = '+'

//         formerNumer = Number(this.data.inputValue);
//         this.setData({
//             inputValue:"+"
//         })
//     }
// },
// onMinus:function(){
//     console.log(parseInt(this.data.inputValue)+ 10 + 12)

//     if(!isCalculating){

//         isCalculating = true;
//         isEnd = false
//         action = '-'

//         formerNumer = Number(this.data.inputValue);
//         this.setData({
//             inputValue:"-"
//         })
//     }
// },
// onMultiply:function(){
//     console.log("*")
//     if(!isCalculating){

//         isCalculating = true;
//         isEnd = false
//         action = '*'

//         formerNumer = Number(this.data.inputValue);
//         this.setData({
//             inputValue:"*"
//         })
//     }
// },
// onDivide:function(){
//      console.log("/")
//      if(!isCalculating){

//         isCalculating = true;
//         isEnd = false
//         action = '/'

//         formerNumer = Number(this.data.inputValue);
//         this.setData({
//             inputValue:"/"
//         })
//     }
// },
// /*
// 数字操作
// */
// onSeven:function(){
//     console.log("7")

//     if(this.data.inputValue === '0' || !(action === '') || isEnd )
//         this.data.inputValue = ''
//     var temp = this.data.inputValue
//     this.setData({
//         inputValue:temp + '7'
//     })//这种setter方法可以刷新UI
//     console.log(this.data.inputValue) 
// },
// onEight:function(){
//     if(this.data.inputValue === '0' || !(action === '') || isEnd)
//         this.data.inputValue = ''
//     var temp = this.data.inputValue
//     this.setData({
//         inputValue:temp + '8'
//     })
    
// },
// onNine:function(){
//      if(this.data.inputValue === '0' || !(action === '') || isEnd)
//         this.data.inputValue = ''
//     var temp = this.data.inputValue
//     this.setData({
//         inputValue:temp + '9'
//     })
// },
// onDel:function(){
//     console.log("Del")
//     this.setData({
//         inputValue:'0'
//     })
// },
// onFour:function(){
//     if(this.data.inputValue === '0' || !(action === '') || isEnd)
//         this.data.inputValue = ''
//     var temp = this.data.inputValue
//     this.setData({
//         inputValue:temp + '4'
//     })
// },
// onFive:function(){
//     if(this.data.inputValue === '0' || !(action === '') || isEnd)
//         this.data.inputValue = ''
//     var temp = this.data.inputValue
//     this.setData({
//         inputValue:temp + '5'
//     })
// },
// onSix:function(){
//     if(this.data.inputValue === '0' || !(action === '') || isEnd)
//         this.data.inputValue = ''
//     var temp = this.data.inputValue
//     this.setData({
//         inputValue:temp + '6'
//     })
// },
// onClear:function(){
//     this.setData({
//         inputValue:'0'
//     })
// },
// onOne:function(){
//      if(this.data.inputValue === '0' || !(action === '') || isEnd)
//         this.data.inputValue = ''
//     var temp = this.data.inputValue
//     this.setData({
//         inputValue:temp + '1'
//     })
// },
// onTwo:function(){
//     if(this.data.inputValue === '0' || !(action === '') || isEnd)
//         this.data.inputValue = ''
//     var temp = this.data.inputValue
//     this.setData({
//         inputValue:temp + '2'
//     })
// },
// onThree:function(){
//     if(this.data.inputValue === '0' || !(action === '') || isEnd)
//         this.data.inputValue = ''
//     var temp = this.data.inputValue
//     this.setData({
//         inputValue:temp + '3'
//     })
// },
// onPoint:function(){
//     if(this.data.inputValue != '0'){
//          var temp = this.data.inputValue
//      this.setData({
//          inputValue:temp + '.'
//      })
//     }
// },
// onZero:function(){
//     if(this.data.inputValue === '0' || !(action === '') || isEnd)
//         this.data.inputValue = ''

//     //if(this.data.inputValue != '0'){
//          var temp = this.data.inputValue
//          this.setData({
//            inputValue:temp + '0'
//           })
//     //}
// },
// onEquality:function(){
//     latterNumber = Number(this.data.inputValue);

//     if(isCalculating && formerNumer > 0 && latterNumber > 0){
//         var total
//         switch(action){
//             case '+':{

//                 total = formerNumer + latterNumber

//             }
//             break;
//             case '-':{

//                 total = formerNumer - latterNumber

//             }
//             break;
//             case '*':{

//                 total = formerNumer * latterNumber

//             }
//             break;
//             case '/':{

//                 total = formerNumer / latterNumber

//             }
//             break;

//         }
//         this.setData({
//             inputValue:total.toFixed(0)
//         })

//         isCalculating = false
//         action = ''
//         isEnd = true

//     }
// }

// }


//新思维
var pageData = {
     onReady:function(){
         this.animation = wx.createAnimation()
     },
    data:{
    inputValue:"0"
    },
        /*
        算数操作
        */
    onPlus:function(){
        console.log("+")

        var str = "hello world"
        console.log(str.length)
        console.log(str.charAt(1))
        console.log(str.substring(1,4))
        console.log(str.slice(-3))
        console.log(str.indexOf('l'))
        console.log(str.split(' '))
        console.log(str.replace('h','H'))
        console.log(str.toUpperCase())
        
        if(!isCalculating){

            isCalculating = true;
            isEnd = false
            action = '+'

            this.setData({
                inputValue:this.data.inputValue + action
                })
        }
        //this.onRotate()
    },
    onMinus:function(){
        console.log(parseInt(this.data.inputValue)+ 10 + 12)
         if(!isCalculating){
            isCalculating = true;
            isEnd = false
            action = '-'
             this.setData({
                inputValue:this.data.inputValue + action
            })
        }
    },
    onMultiply:function(){
        console.log("*")
        if(!isCalculating){
            isCalculating = true;
            isEnd = false
            action = '*'
            this.setData({
                inputValue:this.data.inputValue + action
            })
        }
    },
    onDivide:function(){
        console.log("/")
        if(!isCalculating){
            isCalculating = true;
            isEnd = false
            action = '/'
            this.setData({
                inputValue:this.data.inputValue + action
            })
        }
    },
/*
数字操作
*/
    onSeven:function(){
        console.log("7")
        if(this.data.inputValue === '0' || isEnd)
            this.data.inputValue = ''
            isEnd = false
        var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '7'
        })//这种setter方法可以刷新UI
        console.log(this.data.inputValue) 
    },
    onEight:function(){
        if(this.data.inputValue === '0' || isEnd)
            this.data.inputValue = ''
            isEnd = false
        var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '8'
        }) 
    },
    onNine:function(){
        if(this.data.inputValue === '0' || isEnd)
            this.data.inputValue = ''
            isEnd = false
        var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '9'
        })
    },
    onDel:function(){
        console.log("Del")
        this.setData({
            inputValue:'0'
        })
    },
    onFour:function(){
        if(this.data.inputValue === '0')
            this.data.inputValue = ''
            isEnd = false
        var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '4'
        })
    },
    onFive:function(){
        if(this.data.inputValue === '0' || isEnd)
            this.data.inputValue = ''
            isEnd = false
        var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '5'
        })
    },
    onSix:function(){
        if(this.data.inputValue === '0' || isEnd)
            this.data.inputValue = ''
            isEnd = false
        var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '6'
        })
    },
    onClear:function(){
        this.setData({
            inputValue:'0'
        })
    },
    onOne:function(){
        if(this.data.inputValue === '0' || isEnd)
            this.data.inputValue = ''
            isEnd = false
        var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '1'
        })
    },
    onTwo:function(){
        if(this.data.inputValue === '0' || isEnd)
            this.data.inputValue = ''
            isEnd = false
        var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '2'
        })
    },
    onThree:function(){
        if(this.data.inputValue === '0' || isEnd)
            this.data.inputValue = ''
            isEnd = false
        var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '3'
        })
},
    onPoint:function(){
        if(this.data.inputValue != '0'){
            var temp = this.data.inputValue
        this.setData({
            inputValue:temp + '.'
        })
        }
    },
    onZero:function(){
        if(this.data.inputValue === '0' || isEnd)
            this.data.inputValue = ''
            isEnd = false

    //if(this.data.inputValue != '0'){
            var temp = this.data.inputValue
            this.setData({
                inputValue:temp + '0'
            })
    //}
},
    onEquality:function(){
        var temp = this.data.inputValue.split(action)
        formerNumer = Number(temp[0])
        latterNumber = Number(temp[1])

        if(isCalculating && formerNumer > 0 && latterNumber > 0){
            var total
            switch(action){
                case '+':{

                    total = formerNumer + latterNumber

            }
                break;
                case '-':{

                    total = formerNumer - latterNumber

                }
                break;
                case '*':{

                    total = formerNumer * latterNumber

                }
                break;
                case '/':{

                    total = formerNumer / latterNumber

                }
                break;

            }
            this.setData({
                inputValue:total.toFixed(0)
            })

            isCalculating = false
            action = ''
            isEnd = true

            this.animation.rotate(Math.random() * 720 - 360).step()
                .scale(Math.random() * 2).step()
                .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
                .skew(Math.random() * 90, Math.random() * 90).step()
                this.setData({ animation: this.animation.export() })

        }
    },
    /*
    处理动画相关操作
    */
    onRotate:function(){
        this.animation.rotate(Math.random() * 720 - 360).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    onScale:function(){
        this.animation.scale(Math.random() * 2).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    onTranslate:function(){
        this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    onSkim:function(){
        this.animation.skew(Math.random() * 90, Math.random() * 90).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    onRotateAndScale:function(){
         this.animation.rotate(Math.random() * 720 - 360)
                       .scale(Math.random() * 2).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    onTranslateAndSkim:function(){
        this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
                       .skew(Math.random() * 90, Math.random() * 90).step()
        this.setData({
            animation:this.animation.export()
        })
    }

}
Page(pageData)