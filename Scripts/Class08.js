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
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

