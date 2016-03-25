function line() {
    var array = new Array(100);
    console.log(array.join("*"))
}
line();
console.info("事件流");
line();
console.info("事件处理程序");
//13.2.1 HTML事件处理程序
//13.2.2 DOM0级事件处理程序
var btn = document.getElementById("myBtn");
btn.onclick = function () {
    console.log("Hello World!");
};
btn.onclick= function () {
    console.log(this.id);
};
btn.onclick = null;

//13.2.3 DOM2级事件处理程序
var handler1 = function () {
    console.log("这是Handler1");
};
var handler2 = function () {
    console.log("这是Handler2");
};
btn.addEventListener("click",handler1,false);
btn.addEventListener("click",handler2,true);
btn.removeEventListener("click",handler1,false);
btn.removeEventListener("click",handler2,true);

//13.2.4 IE事件处理程序
console.log("IE暂时先不看");

//13.2.4 跨浏览器的事件处理程序
var EventUtil = {
    addHandler : function (element, type, handler) {
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }
        else if(element.attachEvent){
            element.attachEvent("on" + type,handler);
        }
        else {
            element["on" + type] = handler;
        }
    },
    removeHandler :function (element, type, handler) {
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }
        else if(element.detachEvent){
            element.detachEvent(type,handler);
        }
        else {
            element["on" + type] = null;
        }
    }
};
var handler3 = function () {
    console.log("跨浏览器的事件处理程序")
};
EventUtil.addHandler(btn,"click",handler3);
EventUtil.removeHandler(btn,"click",handler3);
