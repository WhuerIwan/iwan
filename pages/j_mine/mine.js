// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  login(){
    wx.login({
    timeout: 0,
    success: (result) => {},
    fail: (res) => {},
    complete: (res) => {},
  })
    
  },
  myFollow() {
      wx.navigateTo({
        url: '/pages/myguanzhu/myguanzhu',
      })
  },
  historyComments(){
      wx.navigateTo({
        url: '/pages/j_historyComments/historyComments',
      })
  },
  myApplication(){
      wx.navigateTo({
        url: '/pages/r_shenhejilu/index',
      })
  }
})