/**
 * Created by liuguangxuan on 2016/3/2.
 */
function line(){
    var arr = new Array(100);
    console.log(arr.join("*"));
}
line();
console.info("第8章 BOM");
var age = 24;
function sayAge(){
    console.log(this.age);
}
console.log(window.age);
sayAge();
window.sayAge();
var age = 24;
window.color = "red";
console.log(age);
console.log(window.color);
/*
* 8.1.3 窗口位置
* 1.screenLeft、2.screenTop、3.screenX、4.screenY、5.moveTo()、6.moveBy()
*/
line();
console.info("窗口位置");
console.log("Left: " + window.screenLeft);
console.log("Top: " + window.screenTop);
console.log(window.screenX);
console.log(window.screenY);
window.moveBy(1000,100);
console.log("Left: " + window.screenLeft);
console.log("Top: " + window.screenTop);
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
console.log(leftPos);

/*
* 8.1.4 窗口大小
* 1.innerWidth、2.innerHeight、3.outerWidth、4.outerHeight
* 5.resizeTo()、6.resizeBy()
*/
console.log(window.innerWidth + " * " + window.innerHeight);
console.log(window.outerWidth + " * " + window.outerHeight);
window.resizeTo(100,100);

/*
* 8.1.5 导航和打开窗口
* window.open()
*/
//var blocked = false;
//try{
//var warenwang =  window.open("http://www.warenwang.com","_blank","width=400,height=400,toolbar=no,location=yes");
//if(warenwang == null){
//    blocked = true;
//}
//}
//catch (ex){
//    blocked = true;
//}
//if (blocked){
//    console.log("弹框被浏览器阻止了或者被第三方工具屏蔽了");
//}

/*
* 8.1.6 间歇调用和超时调用
*/
line();
console.info("间歇调用和超时调用");
setTimeout("console.log('这是超时调用函数')",1000);
var timeoutId = setTimeout(function(){
    console.log("这是超时调用函数的另一种方式,不能完全信赖设置的时间，因为JavaScript是一个单线程的解释器");
},1000);
clearTimeout(timeoutId);
//var result = confirm("您确定么？");
//if(result){
//    console.log("true");
//}
//else {
//    console.log("false");
//}

//var result = prompt("请输入您的姓名：");
//if(result != null){
//    console.log("欢迎您：" + result);
//}
//else{
//    console.log("您没有输入任何内容");
//}
document.getElementById("print").onclick = function(){
    window.print();
};
document.getElementById("find").onclick = function(){
    window.find();
};

/*
* 8.2 location对象
*/
line();
console.info("location对象");
console.log(decodeURI(window.location.href));
console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.location.port);
console.log(decodeURI(window.location.pathname));
console.log(window.location.protocol);
console.log(window.location.search);
console.log(window.location.hash);

/*
* 8.2.2 位置操作
*/
setTimeout(function(){
    //location.assign("http://www.warenwang.com");
    //location.href = "http://www.warenwang.com";
    //window.location = "http://www.warenwang.com";
    //window.location.pathname = "/JavaScript高级程序设计/Chapter07/index.html";
    //location.replace("http://www.warenwang.com");
    //location.reload(true);
},2000);

/*
* 8.3 navigator对象
*/
console.log(navigator);
function hasPlugin(name){
    name = name.toLowerCase();
    for(var i = 0;i < navigator.plugins.length;i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
            return true;
        }
    }
    return false;
}
console.log(hasPlugin("Flash"));
console.log(hasPlugin("IE"));
console.log(hasPlugin("fuck"));
console.log(hasPlugin("QuickTime"));
console.log(hasPlugin("pdf"));

/*
* 8.4 screen对象
*/
console.log(screen);
console.log(screen.width + " * " + screen.height);
console.log(screen.availWidth + " * " + screen.availHeight);
//var local = window.open("http://localhost:63342/JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/Chapter07/index.html","_blank");
//setTimeout(function(){
//    local.resizeTo(screen.availWidth,screen.availHeight);
//},1000);

/*
* 8.5 history对象
*/