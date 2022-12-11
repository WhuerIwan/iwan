// index.js
// 获取应用实例
const app = getApp()
let searchvalue;
let n_comment;
var myDate = new Date();
var time=myDate.toLocaleDateString();
Page({
    data:{
        block_head:'中秋灯谜会',
        time:'1',
        position:'1',
        starnum:0,
        src:'../../image/poster.jpg',
        intro:'1',
        iffilter:0,
        ifchoose:0,
        ifnote:0,
        stdate:'2022-11-1',
        eddate:'2030-12-1',
        date1:time,
        date2:time,
        starnum:'5',
        star1:'../../image/main/whitestar.svg',
        star2:'../../image/main/whitestar.svg',
        star3:'../../image/main/whitestar.svg',
        star4:'../../image/main/whitestar.svg',
        star5:'../../image/main/whitestar.svg',
    },
    gotoxiangqing:function () {
        if(1){wx.navigateTo({
          url: '../xiangqing/xiangqing',
        })}
    }
    ,
    setstars:function (e) {
        if(e==0){this.setData({
                star1:'../../image/main/whitestar.svg',
                star2:'../../image/main/whitestar.svg',
                star3:'../../image/main/whitestar.svg',
                star4:'../../image/main/whitestar.svg',
                star5:'../../image/main/whitestar.svg',
            })}
        
            if(e==1){this.setData({
                star1:'../../image/main/yellowstar.svg',
                star2:'../../image/main/whitestar.svg',
                star3:'../../image/main/whitestar.svg',
                star4:'../../image/main/whitestar.svg',
                star5:'../../image/main/whitestar.svg',
            })}
            if(e==2){this.setData({
                star1:'../../image/main/yellowstar.svg',
                star2:'../../image/main/yellowstar.svg',
                star3:'../../image/main/whitestar.svg',
                star4:'../../image/main/whitestar.svg',
                star5:'../../image/main/whitestar.svg',
            })}
            if(e==3){this.setData({
                star1:'../../image/main/yellowstar.svg',
                star2:'../../image/main/yellowstar.svg',
                star3:'../../image/main/yellowstar.svg',
                star4:'../../image/main/whitestar.svg',
                star5:'../../image/main/whitestar.svg',
            })}
            if(e==4){this.setData({
                star1:'../../image/main/yellowstar.svg',
                star2:'../../image/main/yellowstar.svg',
                star3:'../../image/main/yellowstar.svg',
                star4:'../../image/main/yellowstar.svg',
                star5:'../../image/main/whitestar.svg',
            })}
            if(e==5){this.setData({
                star1:'../../image/main/yellowstar.svg',
                star2:'../../image/main/yellowstar.svg',
                star3:'../../image/main/yellowstar.svg',
                star4:'../../image/main/yellowstar.svg',
                star5:'../../image/main/yellowstar.svg',
            })
        }
    },
to_shaixuan:function () {
 if(this.data.ifchoose==1)
 {this.setData({
     ifchoose:0,
     iffilter:0
 })}
 else if(this.data.ifchoose==0)
 {this.setData({
     ifchoose:1,
     iffilter:1
 })}
},

search_input :function (input) {
    searchvalue = input.detail.value;
    console.log("输入了"+ searchvalue)
},
search_focus(){
    this.setData({
        ifplaceholder:0,
    })
    console.log('focus')
},
search_blur(){
    if(searchvalue==''){
    this.setData({
        ifplaceholder:1,
    })}
},
backtosy(){
    this.setData({
        ifchoose:0,
        iffilter:0,
        ifnote:0,
    })
},
bindDateChange1: function(e) {
    console.log('picker_start发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDateChange2: function(e) {
    console.log('picker_end发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },
  n_input:function (input) {
    n_comment = input.detail.value;
    console.log("输入了"+ n_comment)
},
  scores:function(e) {
    console.log(e);
    this.setData({
        starnum:e.target.dataset.starscore
    });
    this.setstars(this.data.starnum);
},
  onLoad(){
      if(1){
          this.setData({
              ifnote:1,
            iffilter:1
            })
      }
      this.setstars(this.data.starnum)
  }
})