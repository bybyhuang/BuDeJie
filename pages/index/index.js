//index.js
//获取应用实例
var app = getApp()



Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    list:[],
    hidden:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  requestList:function(){
    var that = this;
    wx.request({
        url: 'https://route.showapi.com/255-1?page=1&showapi_appid=2048&showapi_timestamp=20161115141654&title=&type=41&showapi_sign=dff66d965163b6b09a13ceacacbc9b30',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          console.log(res)
          that.setData({
            
            list : res.data.showapi_res_body.pagebean.contentlist,
            
          })
          setTimeout(function() {
          that.setData({
            hidden: true
          })
        }, 300)
          
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
          
        }
      })
  },
  onLoad: function () {
    var that = this
    this.requestList()
    console.log('onLoad')
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
