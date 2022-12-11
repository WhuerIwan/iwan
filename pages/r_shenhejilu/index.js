// index.js
Page({
  data:{
    block_src:"/pages/image/中秋灯谜会.jpg",
    block_head:"中秋灯谜会",
    time:"2022.11.12",
    position:"武汉大学桂园操场",
    intro:"lalalalalalal....",
    status:"",
    color:"#FA5151",
    status:"未通过",
    blur:"blur(0)",
  },
  blurs:function(e){
      console.log(e.detail.value)
      this.setData({blur:e.detail.value})
  }
})
