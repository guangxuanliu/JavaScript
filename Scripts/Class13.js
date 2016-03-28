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
    getEvent : function (event) {
        return event ? event : window.event;
    },
    getTarget : function (event) {
        return event.target || event.srcElement;
    },
    preventDefault : function (event) {
        if(event.preventDefault){
            event.preventDefault();
        }
        else {
            event.returnValue = false;
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
    },
    stopPropagation : function (event) {
        if (event.stopPropagation){
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    }
};
var handler3 = function () {
    console.log("跨浏览器的事件处理程序")
};
EventUtil.addHandler(btn,"click",handler3);
EventUtil.removeHandler(btn,"click",handler3);

/*
* 13.3 事件对象
*/
line();
console.info("事件对象");
btn.addEventListener("click",function (event) {
    console.log(event.type);
    console.log(event.currentTarget === this);
    console.log(event.currentTarget === event.target);
});
// document.body.addEventListener("click",function (event) {
//     console.log(event.type);
//     console.log(event.currentTarget === document.body);
//     console.log(event.target);
// });
var handler4 = function (event) {
    switch (event.type){
        case "click":
            console.log("you clicked me!");
            break;
        case "mouseover":
            event.target.style.backgroundColor = "#12b4a4";
            break;
        case "mouseout":
            event.target.style.backgroundColor = "";
            break;
    }
};
btn.addEventListener("click",handler4);
btn.addEventListener("mouseover",handler4);
btn.addEventListener("mouseout",handler4);
var link = document.getElementById("myLink");
link.addEventListener("click",function (event) {
    console.log("跳转到蛙人网的主页");
    event.preventDefault();
    event.stopPropagation();
},false);
var myBtn2 = document.getElementById("myBtn2");
myBtn2.addEventListener("click",function (event) {
   console.log(event.eventPhase);
},false);
// document.body.addEventListener("click",function (event) {
//     console.log(event.eventPhase);
// },true);
// document.body.addEventListener("click",function (event) {
//     console.log(event.eventPhase);
// });
var myBtn3 = document.getElementById("myBtn3");
// myBtn3.onclick = function (event) {
//     console.log(event.srcElement); //myBtn3
//     console.log(this); // myBtn3
// };
// myBtn3.attachEvent("onclick",function (event) {
//    console.log(event.srcElement); // myBtn3
//     console.log(this); //window
// });

//IE中阻止默认行为
var myLink2 = document.getElementById("myLink2");
// myLink2.onclick = function (event) {
//     console.log("IE中的链接被点击了");
//     window.event.returnValue = false;
// };

// myLink2.attachEvent("onclick",function (event) {
//     console.log("IE中的链接被点击了");
//     window.event.returnValue = false;
// });

//IE中阻止事件冒泡
// myLink2.attachEvent("onclick",function (event) {
//     console.log("IE中的链接被点击了");
//     event.returnValue = false;
//     event.cancelBubble = true; //IE中阻止事件冒泡
// });
// document.body.attachEvent("onclick",function (event) {
//     console.log("body被点击了");
// });

//13.3.3 跨浏览器的事件
//已添加到EventUtil对象中

/*
* 13.4 事件类型
*/
line();
console.info("事件类型");

//13.4.1 UI事件

//确定是否支持“DOM3级事件”
// var isSupported = document.implementation.hasFeature("UIEvent","3.0");
// console.log(isSupported);

//1.load事件
//页面的load事件
// EventUtil.addHandler(window,"load",function (event) {
//    console.log("页面已加载完毕！");
// });

//图片的load事件
// var image = document.getElementById("myImage");
// EventUtil.addHandler(image,"load",function (event) {
//     var event = EventUtil.getEvent(event);
//     console.log(decodeURIComponent(EventUtil.getTarget(event).src));
// });

//在创建img元素时指定事件处理程序要先于指定src地址
// EventUtil.addHandler(window,"load",function (event) {
//     var image = document.createElement("img");
//     EventUtil.addHandler(image,"load",function (event) {
//         event = EventUtil.getEvent(event);
//         console.log(decodeURIComponent(EventUtil.getTarget(event).src));
//     });
//     document.body.appendChild(image);
//     image.src = "../Pic/小青蛙.png";
// });

//用DOM0级的Image对象实现上述的功能
// EventUtil.addHandler(window,"load",function (event) {
//    var image = new Image();
//     EventUtil.addHandler(image,"load",function (event) {
//         event = EventUtil.getEvent(event);
//         console.log(decodeURIComponent(EventUtil.getTarget(event).src));
//     });
//     document.body.appendChild(image);
//     image.src = "../Pic/小青蛙.png";
// });

//<script>、<style>元素的load事件
// EventUtil.addHandler(window,"load",function (event) {
//    var style = document.createElement("link");
//     EventUtil.addHandler(style,"load",function (event) {
//         console.log("样式表已加载");
//     });
//     style.rel = "stylesheet";
//     style.href = "../Styles/Class13.css";
//     document.body.appendChild(style);
// });

//2.unload事件
EventUtil.addHandler(window,"unload",function (event) {
   alert("unloaded!");
});