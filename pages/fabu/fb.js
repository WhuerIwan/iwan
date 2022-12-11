// pages/fabu/fb.js
Page({
    data:{
       flag:true,
       blur:"blur(0)",
       array:[' ','桂园操场','梅园操场','912操场','工学部操场','信部操场','医学部操场','工主教草坪','其他'],
       index:0,
    },
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
//上传文件
upLoadAction(e){
    wx.chooseMessageFile({
      count: 1,
      type:'file',
      success(res){
          const tempFilePaths=res.temFilePaths
          console.log('选择',res)
      }
    })
},
// upLoadPicture(e){
//    wx.chooseImage({
//     success:function(res){
//         console.log(res)
//         count:9;
//         console.log(res.temFilePaths)
//         that.setData({
//             [image]:res.temFilePaths,
//         })
//     },
//    })
// },

  //出现
  show: function () {
    this.setData({ flag: false })
    this.setData({blur:"blur(25rpx)"})
  },
  //消失
  hide: function () {
    this.setData({ flag: true })
    this.setData({blur:"blur(0)"})
  },
//picker
bindPickerChange:function(e){
    console.log(e.detail.value)
    this.setData({index:e.detail.value})
},
})
