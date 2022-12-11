// index.js
Page({
    data:{
        head1:"head1",
        head2:"head2",
        flag:true,
        customer:"sgdfhj",
        time:"222",
        content:"gfbnmlshkl",
        isHidden:true,
        blur:"blur(0)",
        flag3:true,
        details:"",
    },
    head1:function(){
        if(this.data.head1=="head_1")
        {}
        else if(this.data.head1=="head1")
        {
            this.setData({
                        head1:"head_1",
                        head2:"head2"
                    })
        }
        
    },
    head2:function(){
        if(this.data.head2=="head_2")
        {}
        else if(this.data.head2=="head2")
        {
            this.setData({
                        head2:"head_2",
                        head1:"head1"
                    })
        }
    },
      //出现
  show: function () {
    this.setData({ flag3: false })
    this.setData({blur:"blur(25rpx)"})
  },
  //消失
  hide: function () {
    this.setData({ flag3: true })
    this.setData({blur:"blur(0)"})
  },
  //动态发布
  send: function () {
    //
    this.setData({ flag3: true })
    this.setData({blur:"blur(0)"})
  },
  //动态描述
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

  //动态上传图片
  addPicture:function(){
    //
  }
})
