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
    getRelatedTarget :function (event) {
        if(event.relatedTarget){
            return event.relatedTarget;
        }  
        else if(event.toElement){
            return event.toElement;
        }
        else if(event.fromElement){
            return event.fromElement;
        }
        else {
            return null;
        }
    },
    getButton : function (event) {
        if(document.implementation.hasFeature("MouseEvents","2.0")){
            return event.button;
        }
        else
        {
            switch (event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta:function (event) {
      if(event.wheelDelta){
          return event.wheelDelta;
      }
        else {
          return -event.detail * 40;
      }
    },
    getCharCode : function (event) {
      if(typeof event.charCode == "number"){
          return event.charCode;
      }
        else {
          return event.keyCode;
      }
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
//存在兼容性问题，可以在IE下测试
// EventUtil.addHandler(window,"unload",function (event) {
//     alert("这是unload事件");
// });

//3.resize事件
// EventUtil.addHandler(window,"resize",function (event) {
//    console.log("resize事件被触发");
// });

//4.scroll事件
// EventUtil.addHandler(window,"scroll",function (event) {
//    if(document.documentMode == "CSS1Compat"){
//        console.log(document.documentElement.scrollTop);
//    }
//     else {
//        console.log(document.body.scrollTop);
//    }
// });

//13.4.2焦点事件
// var isSupported = document.implementation.hasFeature("FocusEvent","3.0");
// console.log(isSupported);
// EventUtil.addHandler(window,"focus",function (event) {
//    console.log("window focus");
// });
// EventUtil.addHandler(window,"blur",function (event) {
//     console.log("window blur");
// });
// EventUtil.addHandler(window,"focusout",function (event) {
//     console.log("window focusout");
// });
// EventUtil.addHandler(window,"focusin",function (event) {
//     console.log("window focusin");
// });
// EventUtil.addHandler(window,"DOMFocusOut",function (event) {
//     console.log("window DOMFocusOut");  //貌似没有浏览器支持
// });
// EventUtil.addHandler(window,"DOMFocusIn",function (event) {
//     console.log("window DOMFocusIn");   //貌似没有浏览器支持
// });

//13.4.3 鼠标与滚轮事件
//mouseenter、mouseleave、mouseover、mouseout事件的区别
// var divOut = document.getElementById("out");
// var divIn = document.getElementById("in");
// EventUtil.addHandler(divOut,"mouseenter",function (event) {
//     console.log("Out mouseEnter");
// });
// EventUtil.addHandler(divOut,"mouseleave",function (event) {
//     console.log("Out mouseleave");
// });
// EventUtil.addHandler(divOut,"mouseover",function (event) {
//     console.log("Out mouseover");
// });
// EventUtil.addHandler(divOut,"mouseout",function (event) {
//     console.log("Out mouseout");
// });

// EventUtil.addHandler(divIn,"mouseenter",function (event) {
//     console.log("In mouseenter");
// });
// EventUtil.addHandler(divIn,"mouseleave",function (event) {
//     console.log("In mouseleave");
// });
// EventUtil.addHandler(divIn,"mouseover",function (event) {
//     console.log("In mouseover");
// });
// EventUtil.addHandler(divIn,"mouseout",function (event) {
//     console.log("In mouseout");
// });

//检测是否支持鼠标事件
//我擦，此处把feature修改为任何值都会返回true，兼容性问题真操蛋
// var isSupportedMouseEvent = document.implementation.hasFeature("MouseEvent","3.0");
// console.log(isSupportedMouseEvent);

//客户区坐标、页面坐标、屏幕坐标
// EventUtil.addHandler(window,"click",function (event) {
//     console.log("客户区坐标：" + event.clientX + ", " + event.clientY);
//     console.log("页面坐标：" + event.pageX + ", " + event.pageY);
//     console.log("屏幕坐标：" + event.screenX + ", " + event.screenY);
// });

//4.修改键
//windows下meta键是什么？
// EventUtil.addHandler(window,"click",function (event) {
//    event = EventUtil.getEvent(event);
//     var keys = new Array();
//     if (event.ctrlKey){
//         keys.push("ctrl");
//     }
//     if (event.shiftKey){
//         keys.push("shift");
//     }
//     if (event.metaKey){
//         keys.push("meta");
//     }
//     if (event.altKey){
//         keys.push("alt");
//     }
//     console.log(keys.join());
// });

//5.相关元素
//只有在mouseover和mouseout事件时，relatedTarget才有值
// var myDiv4 = document.getElementById("myDiv4");
// EventUtil.addHandler(myDiv4,"mouseout",function (event) {
//     var target = EventUtil.getTarget(event);
//    var relatedTarget = EventUtil.getRelatedTarget(event);
//     console.log("Mouse out from " + target.tagName + " to " + relatedTarget.tagName);
// });

//6.鼠标按钮
// var myDiv4 = document.getElementById("myDiv4");
// EventUtil.addHandler(myDiv4,"mousedown",function (event) {
//    event = EventUtil.getEvent(event);
//     console.log(EventUtil.getButton(event));
// });

//7.更多的事件信息
// var myDiv4 = document.getElementById("myDiv4");
// EventUtil.addHandler(myDiv4,"click",function (event) {
//    var event = EventUtil.getEvent(event);
//     console.log(event.detail);
// });

//8.鼠标滚轮事件
// (function () {
//     function handlerMouseWhell(event) {
//         event = EventUtil.getEvent(event);
//         var delta = EventUtil.getWheelDelta(event);
//         console.log(delta);
//     }
//     EventUtil.addHandler(document,"mousewheel",handlerMouseWhell);
//     EventUtil.addHandler(document,"DOMMouseScroll",handlerMouseWhell);
// })();

//9.触摸设备
//10.无障碍性问题

/*
* 13.4.4 键盘与文本事件
*/
// 1.键码
// EventUtil.addHandler(window,"keydown",function (event) {
//    var event = EventUtil.getEvent(event);
//     console.log(event.keyCode);
// });

//2.字符编码
// EventUtil.addHandler(window,"keypress",function (event) {
//     var event = EventUtil.getEvent(event);
//     console.log(event.charCode);
// });

// EventUtil.addHandler(window,"keypress",function (event) {
//    var event = EventUtil.getEvent(event);
//     console.log(String.fromCharCode(EventUtil.getCharCode(event)));
// });

//3.DOM3级变化

//4.textInput事件
// var textbox = document.getElementById("myText");
// EventUtil.addHandler(textbox,"textInput",function (event) {
//    var event = EventUtil.getEvent(event);
//     console.log(event.data);
// });

//5.设备中的键盘事件

/*
* 13.4.5 复合事件
*/
//IE9+是到2011年唯一支持复合事件的浏览器。由于缺少支持，对于需要开发跨浏览器应用的开发人员，它的用处不大。
// var isSupportComposition = document.implementation.hasFeature("CompositionEvent","3.0");
// console.log(isSupportComposition);

/*
* 13.4.6 变动事件
*/
//删除节点和插入节点一样
// EventUtil.addHandler(window,"load",function (event) {
//     var list = document.getElementById("myList");
//     EventUtil.addHandler(document,"DOMSubtreeModified",function (event) {
//         console.log(event.type);
//         console.log(event.target);
//     });
//     EventUtil.addHandler(document,"DOMNodeRemoved",function (event) {
//         console.log(event.type);
//         console.log(event.target);
//     });
//     EventUtil.addHandler(list.firstChild,"DOMNodeRemovedFromDocument",function (event) {
//         console.log(event.type);
//         console.log(event.target);
//     });
//     list.parentNode.removeChild(list);
// });

/*
* 13.4.7 HTML5事件
*/
//1.contextmenu事件
// var myMenu = document.getElementById("myMenu");
// EventUtil.addHandler(window,"load",function (event) {
//     EventUtil.addHandler(window,"contextmenu",function (event) {
//        var event = EventUtil.getEvent(event);
//         event.preventDefault();
//
//         myMenu.style.left = event.clientX + "px";
//         myMenu.style.top = event.clientY + "px";
//         myMenu.style.visibility = "visible";
//     });
//     EventUtil.addHandler(window,"click",function (event) {
//         myMenu.style.visibility = "hidden";
//     });
// });

//2.beforeunload事件
// EventUtil.addHandler(window,"beforeunload",function (event) {
//    var event = EventUtil.getEvent(event);
//     var message = "不要离开此页呀！亲";
//     event.returnValue = message;
//     return message;
// });

//3.DOMContentLoaded事件
// EventUtil.addHandler(window,"load",function (event) {
//     console.log("load事件");
// });
// EventUtil.addHandler(window,"DOMContentLoaded",function (event) {
//    console.log("DOMContentLoaded事件");
// });

//4.readystatechange事件
//

//5.pageshow和pagehide事件
//仅限于Firefox和Opera

//6.hashchange事件
// EventUtil.addHandler(window,"hashchange",function (event) {
//    console.log("oldUrl:" + event.oldURL);
//     console.log("newUrl:" + event.newURL);
//     console.log("current hash:" + location.hash);
// });

//13.4.8 设备事件

//13.4.9 触摸与手势事件

/*
* 13.5 内存和性能
*/
//13.5.1 事件委托
// var list = document.getElementById("myLinks");
// EventUtil.addHandler(list,"click",function (event) {
//    var event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     switch (target.id){
//         case "goSomewhere":
//             console.log("go to Beijing!");
//             break;
//         case "doSomething":
//             console.log("homework!");
//             break;
//         case "sayHi":
//             console.log("hi");
//             break;
//     }
// });

//13.5.2 移除事件处理程序
//1.模拟鼠标事件
var btn = document.getElementById("myBtn1");
var event = document.createEvent("MouseEvents");
event.initMouseEvent("click",true,true,document.defaultView,0,0,0,0,0,false,false,false,false,0,null);
btn.dispatchEvent(event);

//2.模拟键盘事件

