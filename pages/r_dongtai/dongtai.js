// pages/动态.js
Component({
    /**
     * 组件的属性列表
     */
    // options:{
    //   addGlobalClass:true,
    // },
    properties: {
        customer:{
            type:String,
            value:'',
        },
        time:{
            type:String,
            value:'',
        },
        content:{
          type:String,
          value:'',
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        flag:true,
        lights:0,
        comments:0,
        isHidden:true,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //点赞
        click:function(){
          if(this.data.flag==true){
            this.setData({flag:false})
            this.setData({lights:this.data.lights+1})
          }
          else{
            this.setData({flag:true})
            this.setData({lights:this.data.lights-1})
          }
        },
        //评论
        comment:function(){
          this.setData({isHidden:false})
        },
        //关闭评论
        close:function(){
          this.setData({isHidden:true})
        }
    }
})
