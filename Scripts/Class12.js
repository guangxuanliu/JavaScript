/**
 * Created by 技术2 on 2016/3/21.
 */
function line() {
    var arr = new Array(100);
    console.log(arr.join("*"));
}
line();
console.info("第12章 DOM2和DOM3");
console.info("12.2 样式");
var supportDOM2CSS = document.implementation.hasFeature("CSS","2.0");
var supportDOM2CSS2 = document.implementation.hasFeature("CSS2","2.0");
console.log(supportDOM2CSS);
console.log(supportDOM2CSS2);
var myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = "purple";
myDiv.style.width = "300px";
myDiv.style.height = "200px";
console.log(myDiv.style);
console.log(myDiv.style.cssText);
myDiv.style.cssText = "background-color:#12b4a4;text-align:center;color:#fff;padding:20px;";
console.log(myDiv.style.length);
console.log(myDiv.style.cssText);
var prop,value,i,len;
for(var i = 0,len = myDiv.style.length;i < len;i++){
    console.log(myDiv.style[i] + " : " + myDiv.style.getPropertyValue(myDiv.style[i]));
}
myDiv.style.removeProperty("padding-left");
console.log(myDiv.style.length);
myDiv.style.setProperty("color","purple","important");
for(var i = 0,len = myDiv.style.length;i < len;i++){
    console.log(myDiv.style[i] + " : " + myDiv.style.getPropertyValue(myDiv.style[i]));
}

var computedStyle = document.defaultView.getComputedStyle(myDiv,"");
console.log(computedStyle);
console.log(computedStyle.backgroundColor);
console.log(computedStyle.margin);
console.log(computedStyle.opacity);

//12.2.2 操作样式表
console.info("操作样式表");
var supportDOM2StyleSheets = document.implementation.hasFeature("StyleSheets","2.0");
console.log(supportDOM2StyleSheets);
var styles = document.styleSheets;
for(var i = 0,len = styles.length;i < len;i++){
    console.log(i + " : ");
    console.log(styles.item(i));
}
console.log(styles.item(0).disabled);
console.log(decodeURIComponent(styles.item(0).href));
console.log(styles.item(0).media);
console.log(styles.item(0).ownerNode);
console.log(styles.item(0).title);
console.log(styles.item(0).type);

//12.2.3 元素大小
//1.偏移量 
var myDiv2 = document.getElementById("myDiv2");
console.log(myDiv2.offsetHeight);
console.log(myDiv2.offsetWidth);
console.log(myDiv2.offsetLeft);
console.log(myDiv2.offsetTop);

var myDiv3 = document.getElementById("myDiv3");
console.log(myDiv3.offsetHeight);
console.log(myDiv3.offsetWidth);
console.log(myDiv3.offsetLeft);
console.log(myDiv3.offsetTop);
console.log(myDiv3.offsetParent);

function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while(current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
console.log(getElementLeft(myDiv3));
console.log(getElementTop(myDiv3));

//2.客户区大小
console.log(myDiv2.clientWidth);
console.log(myDiv2.clientHeight);

//12.3.1 NodeIterator
var div = document.getElementById("div1");
var filter = function (node) {
    return node.tagName.toLowerCase() == "li" ?  NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
}
var iterator = document.createNodeIterator(div,NodeFilter.SHOW_ELEMENT,filter,false);
var node = iterator.nextNode();
while(node != null){
    console.log(node.tagName);
    node = iterator.nextNode();
}

//12.3.2 TreeWalker
var walker = document.createTreeWalker(div,NodeFilter.SHOW_ELEMENT,filter,false);
var node = walker.nextNode();
while(node != null){
    console.log(node.tagName);
    node = walker.nextNode();
}