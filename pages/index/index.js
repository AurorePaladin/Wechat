//index.js
//获取应用实例
const app = getApp()

Page({
  // 为页面提供数据的
  // data就是界面和逻辑之间的桥梁
  // data: {
  //    message: 'hello world',
  //    person: {
  //      name: '张三',
  //      age: 18
  //    },
  //    viewClassName : 'hello',
  //    todos: [
  //      { name: 'JavaScript', completed: false } ,
  //      { name: 'HTML', completed: true } ,
  //      { name: 'CSS', completed: false } 
  //    ],
  //    item: 'hahaha'
  // }

  // buttonTapHandle: function(e) {
  //   console.log(111)
  //   // console.dir() 讲一个对象以树状的形式打印到控制台
  //   console.dir(e)
  // }
 
 innerHandle: function () {
   console.log('inner')
 },

 outterHandle: function () {
  console.log('outter')
},

tap2Handle: function (e) {
  // e.target 拿到的就是点击的元素
  // dateset 指的是元素上以 date- 开头的属性集合
  console.dir(e.target.dataset)
  // console.log(this) // 事件处理函数中的this指向的还是页面对象！！！！跟HTML开发不一样
},

  // data: {
  //   motto: 'Hello World',
  //   userInfo: {},
  //   hasUserInfo: false,
  //   canIUse: wx.canIUse('button.open-type.getUserInfo')
  // },
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   app.foo()
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }

  data: {
    demo: 11,
    message: 'initial'
  },
  inputhandle: function (e) {
    // console.log(123)
    // console.log(e.detail.value)
    // this.data.message = e.detail.value
    // console.log(this.data.message)
    this.setData({
       message: e.detail.value
    })
    console.log(this.data)
    // this.setData是用来改变data中的数据
    // 与直接赋值在于setData可以通知界面做出变化
    // 直接赋值没有办法实现这一点（早期的JS）
  }
})
