;(function($){

    var Tab=function(tab){
        
    var _this_ = this;
    //保存单个tab组件
    this.tab= tab;
    //配置参数
    this.config={
        //用于定于鼠标的触发类型，click还是mouseover 
        "triggerType":"mouseover",
        //用于定义内容切换效果，是直接切换，还是淡入淡出
         "effect":"default",
        //默认显示第几个tab
         "invoke":1,
        //用于定义tab是否自动切换，当指定了时间间隔，就表示自动切换，并以切换时间为指定时间间隔
         "auto":false
        };
    // 如果配置参数存在，就扩展掉默认的配置参数
    if(this.getConfig()){
        $.extend(this.config,this.getConfig());
    }
   // console.log(this.config);
    // 保存标签列表，保存内容列表
    this.tabItems=this.tab.find("ul.tab-nav li");
    this.contentItems=this.tab.find("div.content-wrap div.content-item");
    //保存配置参数
    var config = this.config;
    
    if(config.triggerType === "click"){
        this.tabItems.bind(config.triggerType,function(){
          _this_.invoke($(this));  
        });
    }else if(config.triggerType=== "mouseover" || config.triggerType != "click" ){
        this.tabItems.mouseover(function(){
         _this_.invoke($(this));   
        });
    }
        
     //自动切换功能，当配置了时间，我们就根据时间间隔执行自动切换
     if(config.auto){
        //定义一个全局的定时器
         this.timer=null;
         //计数器
         this.loop=0;
         this.autoPlay();
         this.tab.hover(function(){
            window.clearInterval(_this_.timer); 
         },function(){
            _this_.autoPlay(); 
         });
     }  
     //设置默认显示第几个tab
    if(config.invoke>1){
        this.invoke(this.tabItems.eq(config.invoke-1));
    }
    };
    
   Tab.prototype={
       //自动间隔时间切换
       autoPlay:function(){
        
        var _this_=this,
            tabItems = this.tabItems,//临时保存tab列表
            tabLength = tabItems.length,//tab的个数
            config = this.config;
           
        this.timer = window.setInterval(function(){
            _this_.loop++;
            if(_this_.loop >= tabLength){
              _this_.loop=0;  
            }
            tabItems.eq(_this_.loop).trigger(config.triggerType);
        },config.auto); 
           
       },
       //事件驱动函数
       invoke:function(currentTab){
          var _this_ =this;
        /*
        1要执行Tab的选中状态，当前选中的加上actived标记为白底
        2切换对应的tab内容，要根据配置参数的effect是default还是fade
        */
        var index=currentTab.index();
        //tab选中状态
        currentTab.addClass("actived").siblings().removeClass("actived");
        //切换内容区域
         var effect = this.config.effect;
         var conItems= this.contentItems;
        if(effect === "default" || effect != "fade"){
           conItems.eq(index).addClass("current").siblings().removeClass("current"); 
        }else if(effect === "fade"){
            conItems.eq(index).fadeIn().siblings().fadeOut();  
        }
           //注意：如果配置了自动切换，记得把当前的loop的值设置成当前tab的index
        if(this.config.auto){
            this.loop=index;
        }
       },
      //获取配置参数
      getConfig:function(){
     //拿一下tab elem节点上的data-config
     var config = this.tab.attr("data-config");
    // 确保有配置参数
    if(config && config!=""){
        return $.parseJSON(config);
    }else{
        return null;     
        };
     }
   };
    
    window.Tab=Tab;
    // 方法一
    Tab.init=function(tabs){
        var _this_ = this;
        tabs.each(function(){
            new _this_($(this));
        })
    }
    
    //方法二，注册JQuery方法
    $.fn.extend({
        tab:function(){
            this.each(function(){
                new Tab($(this));
            });
            return this;
        }
    });
    
})(jQuery);