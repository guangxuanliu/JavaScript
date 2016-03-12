/**
 * Created by liuguangxuan on 2016/3/12.
 */
function line(){
    var arr = new Array(100);
    console.log(arr.join("*"));
}
line();
/*
* 10.1.1 Node类型
*/
for(each in Node){
    console.log(each);
}
var title = document.getElementById("title");
if (title.nodeType == 1){
    console.log(title.nodeName + "是一个元素节点");
}
else{
    console.log(title.nodeName + "不是一个元素节点");
}
var bodyNode = document.body.childNodes;
console.log(document.body);
console.log(bodyNode);
console.log(bodyNode[0]);
console.log(bodyNode.item(1));
console.log(bodyNode.item(0));
console.log(bodyNode.length);
console.log(typeof bodyNode);
console.log(bodyNode instanceof NodeList);
console.log(bodyNode instanceof Array);
var arrayOfNodes = Array.prototype.slice.call(bodyNode,0);
console.log(arrayOfNodes);
console.log(arrayOfNodes instanceof Array);
function convertToArray(nodes){
    var array = new Array();
    try{
        array = Array.prototype.slice.call(nodes,0);
    }
    catch (ex){
        for(var i = 0,len = nodes.length;i < len;i++){
            array.push(nodes[i]);
        }
    }
    return array;
}
console.log(convertToArray(bodyNode));
console.log(bodyNode.item(0).parentNode);
console.log(title.parentNode);
console.log(title.previousSibling);
console.log(title.previousElementSibling);
console.log(title.nextSibling.nextSibling);
console.log(title.lastChild);
console.log(title.firstChild);
console.log(document.body.hasChildNodes());
console.log(document.body.childNodes);
console.log(title.ownerDocument);

/*
* 3.操作节点
* appendChild()、insertBefore()、replaceChild()、removeChild()
*/
console.log(title.childNodes);
var newNode = document.createTextNode("这是新增节点");
var returnedNode = title.appendChild(newNode);
console.log(returnedNode == newNode);
console.log(title.lastChild == returnedNode);
var returnedNode2 = title.appendChild(title.firstChild);
console.log(returnedNode2);
console.log(title.firstChild);
var newNode2 = document.createTextNode(" ××这是第三个节点×× ");
var returnedNode3 = title.insertBefore(newNode2,null);
console.log(returnedNode3 == title.lastChild);
var newNode3 = document.createTextNode(" ××这是第四个节点×× ");
var returnedNode4 = title.insertBefore(newNode3,returnedNode3);
console.log(returnedNode4 == returnedNode3.previousSibling);
var returnedNode5 = title.replaceChild(newNode3,title.firstChild);
var returnedNode6 = title.removeChild(title.lastChild);
console.log(returnedNode6);
console.log(returnedNode6.ownerDocument);

/*
* 4.其他方法
* cloneNode()、normalize()
*/
line();
var deepList = title.cloneNode(true);
console.log(deepList);
var shallowList = title.cloneNode();
console.log(shallowList);

/*
* 10.1.2 Document类型
*/
line();

/*
* 1.文档的子节点
*/
console.log(document.nodeType);
console.log(document.nodeValue);
console.log(document.nodeName);
console.log(document.parentNode);
console.log(document.childNodes);
console.log(document.documentElement);
console.log(document.lastChild);
console.log(document.childNodes[document.childNodes.length - 1]);
console.log(document.body);
console.log(document.doctype);

//2.文档信息
//title、URL、domain、referrer
var originalTitle = document.title;
console.log(originalTitle);
console.log(document.title);
document.title = "fuck you";
console.log(decodeURIComponent(document.URL));
console.log(decodeURIComponent(location.href));
console.log(document.domain);
console.log(document.referrer);

//3.查找元素
//getElementById()、getElementByTagName()
var para = document.getElementsByTagName("p");
console.log(para);
console.log(para.length);
var myPara = para.namedItem("myPara");
console.log(myPara);
console.log(para[1]);
console.log(para["myPara"]);
var allElements = document.getElementsByTagName("*");
console.log(allElements.length);
console.log(allElements);

//6.文档写入
//write()、writeln()、open()、close()
console.log(new Date());