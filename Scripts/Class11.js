/**
 * Created by liuguangxuan on 2016/3/15.
 */
function line(){
    var arr = new Array(100);
    console.log(arr.join("*"));
}
line();
console.info("第11章 DOM扩展");

/*
* 11.1 选择符API
*/
var body = document.querySelector("body");
console.log(body);
var myDiv = document.querySelector("#myDiv");
console.log(myDiv);
var div = document.querySelector("div");
console.log(div);
var divAll = document.querySelectorAll("div");
console.log(divAll);

/*
* 11.2 元素遍历
*/
console.log(body.childNodes.length);
console.log(body.childElementCount);
var i,len,child = body.firstElementChild;
while (child != body.lastElementChild){
    console.log(child);
    child = child.nextElementSibling;
}
console.log(child);

/*
* 11.3 HTML5
*/

var mySecond = document.getElementsByClassName("my")[0];
console.log(mySecond);
console.log(mySecond.classList.contains("second"));
mySecond.classList.add("fuck");
//if(mySecond.classList.contains("fuck")){
//    mySecond.classList.remove("fuck");
//}
mySecond.classList.toggle("fuck");
console.log(document.activeElement);
myDiv.focus();
console.log(document.activeElement);

var myButton = document.getElementById("myButton");
myButton.focus();
console.log(document.hasFocus());

//readyState
console.log(document.readyState);

//compatMode
console.log(document.compatMode);

//head
console.log(document.head);

//charset
console.log(document.charset);
console.log(document.defaultCharset);

//自定义数据类型
var div = document.getElementById("myDiv");
var appId = div.dataset.appid;
var myName = div.dataset.myname;
console.log(div);
console.log(appId);
console.log(myName);

div.dataset.appid = 789;
div.dataset.myname = "warenwang";
console.log(div);

// 插入标记
//1.innerHTML 2.outerHTML 3.insertAdjacentHTML()
var content = document.getElementById("content");
console.log(content.innerHTML);
content.innerHTML = "Hello World!";
content.innerHTML = "Hello & welcome,<b>\"reader\"!</b>";
console.log(content.innerHTML);
content.innerHTML = "<script>alert('fuck');</script>";
content.outerHTML = "<p id='content'>这是outerHTML试验的DIV</p>";
var content = document.getElementById("content");
content.insertAdjacentHTML("beforebegin","<span>beforebegin</span>");
content.insertAdjacentHTML("afterbegin","<span>afterbegin</span>");
content.insertAdjacentHTML("beforeend","<span>beforeend</span>");
content.insertAdjacentHTML("afterend","<span>afterend</span>");

//scrollIntoView() chrome不支持该方法
var bottomDiv = document.getElementById("scrollInToView");
console.log(bottomDiv);
// bottomDiv.scrollIntoView(false);

//11.4.5 滚动
document.body.scrollByLines(5);




