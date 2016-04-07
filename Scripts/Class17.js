/**
 * Created by 技术2 on 2016/4/7.
 */

//测试try、catch、finally的执行顺序
// function testFinally() {
//     try{
//         return 1;
//     }
//     catch (err){
//         return 2;
//     }
//     finally {
//         return 3;
//     }
// }
// console.log(testFinally());

// var item1 = new Array(-20);
// var item2 = new Array(Number.MAX_VALUE);

// var obj = x;

// eval("a ++ b");

// var o = new 10;
// throw new Error("Something bad happened.");
// throw  new SyntaxError("I don't like your syntax");

// window.onerror = function (message,url,line) {
//     console.log(message);
//     console.log(url);
//     console.log(line);
// };
// function CustomError(message) {
//     this.name = "CustomError";
//         this.message = message;
// }
// CustomError.prototype = new Error();
// throw new CustomError("My Custom Error");

function log(message) {
    var console = document.getElementById("debuginfo");
    if(console === null){
        console = document.createElement("div");
        console.id = "debuginfo";
        console.style.backgroundColor = "#171616";
        console.style.color = "#89FF00";
        console.style.border = "1px solid silver";
        console.style.padding = "5px";
        console.style.width = "400px";
        console.style.position = "absolute";
        console.style.top = "0";
        console.style.right = "0";
        console.style.height="200px";
        console.style.overflow = "scroll";
        document.body.appendChild(console);
    }
    console.innerHTML += "<p style='padding: 0 10px;margin: 0;font-size: 14px;overflow: auto'>" + message + "</p>";
    console.lastChild.scrollIntoView();
}
var i = 0;
setInterval(function () {
    log(i);
    i++;
},1000);