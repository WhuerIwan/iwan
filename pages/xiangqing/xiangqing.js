// pages/xiangqing/xiangqing.js
let comment;
var ifhp=0;
var ifgz=0;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        o_src:"../../image/xq/head.svg",
        o_name:"知名用户",
        o_text:"sss",
        starscore:'',
        starnum:'5',
        star1:'../../image/main/whitestar.svg',
        star2:'../../image/main/whitestar.svg',
        star3:'../../image/main/whitestar.svg',
        star4:'../../image/main/whitestar.svg',
        star5:'../../image/main/whitestar.svg',
        hp:"../../image/xq/goodbottom.svg",
        hpt:"好评",
        gz:"../../image/xq/addconcern.svg",
        gzt:"关注",
    },
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
    scores:function(e) {
        console.log(e);
        this.setData({
            starnum:e.target.dataset.starscore
        });
        this.setstars(this.data.starnum);
    },
    inputcomment:function (input) {
        comment = input.detail.value;
        console.log("输入了"+ comment)
    },
    hp:function () {
        if(ifhp==0){
            this.setData({
                hp:"../../image/xq/bottomgoodgreen.svg",
                hpt:"已好评"
            })
            ifhp=1;
        }
        else if(ifhp==1){
            this.setData({
                hp:"../../image/xq/goodbottom.svg",
                hpt:"好评"
            })
            ifhp=0;
        }
    },
    gz:function () {
        if(ifgz==0){
            this.setData({
                gz:"../../image/main/alreadyconcern.svg",
                gzt:"已关注"
            })
            ifgz=1;
        }
        else if(ifgz==1){
            this.setData({
               gz:"../../image/xq/addconcern.svg",
                gzt:"关注"
            })
            ifgz=0;
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.setstars(this.data.starnum);
    
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})