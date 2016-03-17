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


