// pages/shenhe/shenhe.js
    Page({
        data:{
            name:"blabla",
            place:"blabla",
            year:"2022",
            month:"9",
            day:"10",
            content:"微信小程序里面能渲染文件吗微信小程序里面能渲染文件吗微信小程序里面能渲染文件吗微信小程序里面能渲染文件吗",
            filePath:'',
            flag:true,
            blur:"blur(0)",
            url:"",
        },
        //read picture
        read1: function () {
          var that = this
          wx.showLoading({
            title: '加载中...',
          })
          wx.downloadFile({
            url: that.data.url,
            filePath: wx.env.USER_DATA_PATH + "D:/前端/活动分享/发布及审核/addfile.svg",
            success: function (res) {
              var filePath = res.filePath
              wx.openDocument({
                  filePath: filePath,
                  success: function (res) {
                    wx.hideLoading();
                    console.log('sussess')
                  }
              })
            }
          })
        },
        //出现
        show: function () {
          this.setData({ flag: false })
          this.setData({blur:"blur(25rpx)"})
        },
        //消失
      accept: function () {
        this.setData({ flag: true })
        this.setData({blur:"blur(0)"})
        //
      },
      refuse: function () {
        this.setData({ flag: true })
        this.setData({blur:"blur(0)"})
        //
      },
      //
      bindTextAreaBlur:function(e){
        console.log(e.detail.value);
        var that = this;
        that.setData({
          details: e.detail.value
        });
        var that = this;
      that.setData({
                  details: '',
                })
      },
    })
    
