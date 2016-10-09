function httpClient(url, data, method, callBack){
    wx.request({
        url:url,
        data:data,
        method:method,
        success:function(res){
            callBack(null,res.data)
        },
        fail:function(error){
            callBack( error )
        }

    })
}
module.exports = {
    httpClient:httpClient
}