//app.js
console.log('==============================')

// 1.小程序不是运行在浏览器中，所以没有BOM和DOM对象
// console.log(window)    => undefined
// console.log(document)  => undefined

// 2.小程序的JS中有一些额外的成员
// App 方法 用于定义应用程序实例对象
// Page 方法 用于定义页面对象
// getApp 方法 用来获取全局应用程序对象
// getCurrentPages 方法 用来获取当前页面的调用栈 （数组，最后一个就是当前页面）

console.log('==============================')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  foo:function () {
    console.log(123)
  }

})