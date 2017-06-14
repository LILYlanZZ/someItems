var dom=document.getElementById("clock");  /*获取图像容器canvas*/
var ctx=dom.getContext("2d");/*获取对象上下文，可用于canvas上绘制，返回一个对象，该对象提供用于在画布上绘图的方法和属性*/
var width=dom.width;
var height=dom.height;
var r = width / 2;
var rem = width / 200;


function drawBackground(){
    ctx.translate(r,r); /*重新定义原点坐标到圆心，默认是左上角为（0,0）*/
    ctx.beginPath(); /*起始一条路径*/
    ctx.lineWidth= 10 * rem;/*定义线宽*/
    ctx.arc(0,0,r-5*rem,0,2*Math.PI,false);/*创建弧或曲线*/
    ctx.stroke();/*绘制已定义的路径*/   
    var hourNumbers=[3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font=18*rem + "px Arial";
    ctx.textAlign= "center";  /*文本水平对齐方式*/
    ctx.textBaseline="middle";/*文本基线对齐*/
    
    hourNumbers.forEach(function(number,i){
    var rad = 2 * Math.PI / 12 * i; /*12点的弧度*/
    var x= Math.cos(rad) * (r-30*rem);
    var y= Math.sin(rad) * (r-30*rem);
    
    ctx.fillText(number,x,y);/*填充文本*/
    
});
    
   /*绘制时间秒点 */ 
    for(var i=0;i<60;i++){
        var rad = 2 * Math.PI /60 *i;
         var x= Math.cos(rad) * (r-17*rem);
         var y= Math.sin(rad) * (r-17*rem);
        ctx.beginPath();
        if(i % 5 == 0){
            ctx.fillStyle="#000";/*填充的颜色*/
             ctx.arc(x,y,2*rem,0,2*Math.PI,false); 
        }else{
             ctx.fillStyle="#ccc";
             ctx.arc(x,y,2*rem,0,2*Math.PI,false);
        }
        ctx.fill();/*填充当前绘制路径*/
    }
    
}

function drawHour(hour,minute){
    ctx.save();/*保存当前状态，因为下面画时针，会旋转，分针旋转会在这个旋转角度的状态下，提前保存原始状态，画分针、秒针的时候再调用，返回原始状态*/
    ctx.beginPath();
    var rad = 2* Math.PI / 12 * hour;
    var mrad = 2* Math.PI / 12 / 60 * minute;
    ctx.rotate(rad + mrad);/*旋转当前绘图多少弧度*/
    ctx.lineWidth=6*rem;
    ctx.lineCap="round";/*绘线结束端点样式*/
    ctx.moveTo(0,10*rem);/*	把路径移动到画布中的指定点，不会创建线条。*/
    ctx.lineTo(0,-r/2);
    ctx.stroke();
    ctx.restore();/*返回之前保存的路径状态*/
}

function drawMinute(minute,second){
    ctx.save();
    ctx.beginPath();
    var rad = 2*Math.PI / 60 * minute; 
    var srad = 2* Math.PI / 12 / 360 * second;
    ctx.rotate(rad+srad);/*旋转当前绘图多少弧度*/
    ctx.lineWidth=3*rem;
    ctx.lineCap="round";/*绘线结束端点样式*/
    ctx.moveTo(0,10*rem);/*	把路径移动到画布中的指定点，不会创建线条。*/
    ctx.lineTo(0,-3*r/5);
    ctx.stroke();    
    ctx.restore();
}

function drawSecond(second){
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "#f00";
    var rad = 2*Math.PI / 60 * second; 
    ctx.rotate(rad);/*旋转当前绘图多少弧度*/
    ctx.moveTo(-2*rem,20*rem);/*	把路径移动到画布中的指定点，不会创建线条。*/
    ctx.lineTo(2*rem,20*rem);
    ctx.lineTo(1*rem,-r+18*rem);
    ctx.lineTo(-1*rem,-r+18*rem);
    ctx.fill();   
    ctx.restore();
}

function drawDot(){
ctx.beginPath();
  ctx.fillStyle="#fff";  
    ctx.arc(0,0,3*rem,0,2*Math.PI,false);
    ctx.fill();
}


function draw(){
    ctx.save();/*保存当前原点初始状态，因为下面的drawBackground会改变原点坐标到圆心*/
    ctx.clearRect(0,0,width,height);/*在给定的矩形内清除指定像素，每秒清除画布后在绘制上*/
    var date=new Date();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    drawBackground();
    drawHour(hour,minute);
    drawMinute(minute,second);
    drawSecond(second);
    drawDot();
    ctx.restore();/*返回初始原点坐标*/
}
draw();
setInterval(draw,1000);/*每秒调用draw绘制一次*/