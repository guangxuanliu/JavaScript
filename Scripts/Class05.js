/**
 * Created by liuguangxuan on 2016/2/18.
 */
/*
* 分割函数
*/
function line(){
    var star = new Array(100);
    console.log(star.join("*"));
}
/*
 * 创建Object实例的两种方式
 * 1.new Object()
 * 2.对象字面量表示法
*/
var boy = new Object();
boy.name = "Liu Guangxuan";
boy.age = 24;

var girl = {
    name : "Wang Wenli",
    age : 25
};
console.log(boy);
console.log(girl);
line();

//对象字面量也可以用于向函数传递大量参数的情况
function displayInfo(args){
    var output = "";
    if(typeof args.name == "string"){
        output += "Name: " + args.name + "\n";
    }
    if(typeof args.age == "number"){
        output += "Age: " + args.age + "\n";
    }
    console.log(output);
}
displayInfo({
    name:"Feng Kai",
    age:24
});
line();

/*
 * 访问对象的属性有两种方法
 * 1.点表示法(推荐使用)
 * 2.方括号语法
 * 方括号语法的优点在于如果属性名中包含导致语法错误的字符，或者属性名使用的是关键字或者保留字
 */
console.log(boy.name);
console.log(boy["name"]);
var propertyName = "name";
console.log(boy[propertyName]);
boy["first name"] = "Liu";
console.log(boy["first name"]);
line();

/*
* 5.2 Array类型
*/
console.info("5.2 Array类型");
/*创建数组的两种方式
* 1.使用Array的构造函数
* 2.使用数组字面量表示法
*/
var array1 = new Array();
var array2 = new Array(20);
var array3 = new Array("Liu Guangxuan","Wang Wenli","Feng Kai");
var array4 = Array();
var array5 = Array(1,2,3,4);
console.log("array1: " + array1.length + " "+ array1);
console.log("array2: " + array2.length + " "+ array2);
console.log("array3: " + array3.length + " "+ array3);
console.log("array4: " + array4.length + " "+ array4);
console.log("array5: " + array5.length + " "+ array5);

var colors = ["red","green","blue"];
var name = [];
var values = [1,2,];
var options = [,,,];
console.log(colors);
console.log(name);
console.log(values.length);
console.log(options.length);

//数组的lenght既可以读又可以写
console.log(colors.length);
console.log(colors);
colors.length = 2;
console.log(colors.length + " " + colors);
colors[colors.length] = "blue";
console.log(colors);
colors[colors.length] = "purple";
console.log(colors);
colors[99] = "#12b4a4";
console.log("length: " + colors.length + ", values: " + colors);

/*
* 检测是否是数组有两种方法
* 1.instanceof检测数组
* 2.Array.isArray(value)(推荐使用此方法)
*/
console.log(colors instanceof Array);
console.log(Array.isArray(colors));

/*输出数组
* toLocalString()、toString()、valueOf()
* todo：具体区别有待于细细研究
*/
console.info("输出数组");
console.log(colors);
console.log(colors.toString());
console.log(colors.toLocaleString());
console.log(colors.valueOf());
console.log(colors);

/*数组的栈方法
* 1.push、2.pop
*/
console.info("数组的栈方法");
colors.length = 3;
console.log(colors);
var len = colors.push("purple");
console.log(len);
console.log(colors);
var item = colors.pop();
console.log(item);
console.log(colors);

/*数组的队列方法
* 1.push、2.shift、3.unshift
* todo:到底是从那边进或者取数据还没搞明白
*/
console.info("数组的队列方法");
console.log(colors);
var item = colors.shift("purple");
console.log(item + " " + colors);
colors.unshift(item);
console.log(colors);
colors.unshift("purple");
console.log(colors);
var colors2 = new Array();
var count = colors2.unshift("red","green");
console.log(count + ": " + colors2);
count = colors2.unshift("black");
console.log(count + ": " + colors2);
/*
* 重排序方法
*/
line();
console.info("重排序方法");
console.log(colors);
console.log(colors.sort());
var num = [0,1,5,10,15];
console.log(num);
console.log(num.reverse());
console.log(num.sort());
function compare(value1,value2){
    if(value1 > value2){
        return 1;
    }
    else if(value1 < value2){
        return -1;
    }
    else{
        return 0
    }
}
function compare2(value1,value2){
    return value1 - value2;
}
console.log(num.sort(compare2))
/*
* 操作方法
* 1.concat()、2.slice()、3.splice()
*/
line();
console.info("操作方法");
console.log(colors);
var colors3 = colors.concat("红色",["绿色","白色"]);
console.log(colors3);
var colors4 = colors3.slice(-3,-1);
console.log(colors4);
colors = null;
var colors = ["red","green","blue"];
var removed = colors.splice(0,1);
console.log(colors);
console.log(removed);
removed = colors.splice(1,0,"yellow","orange");
console.log(colors);
console.log(removed);
removed = colors.splice(1,1,"red","purple");
console.log(colors);
console.log(removed);

/*
* 位置方法
* 1.indexOf()、2.lastIndexOf()
*/
line();
console.info("位置方法");
var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers);
console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));
console.log(numbers.indexOf(4,4));

/*
* 迭代方法
* 1.every()、2.filter()、3.forEach()、4.map()、5.some()
* 注意：forEach不能直接修改数组中的值
*/
line();
console.info("迭代方法");
console.log(numbers);
var everyNumber = numbers.every(function(item,index,array){
    return (item > 2);
});
console.log(everyNumber);
var someNumber = numbers.some(function(item,index,array){
    return (item > 2);
});
console.log(someNumber);
var filterNumber = numbers.filter(function(item,index,array){
    return (item > 2);
});
console.log(filterNumber);
var mapNumber = numbers.map(function(item,index,array){
    return (item * 2);
});
console.log(mapNumber);
console.log(numbers);
numbers.forEach(function(item,index,array){
   item *= 10;
});
console.log("forEach: " + numbers);

/*归并方法
* 1.reduce()、2.reduceRight()
*/
line();
console.info("归并方法");
var values = [1,2,3,4,5,6,7,9,0,919];
var sum = values.reduce(function(prev,curr,index,array){
    return prev + curr;
});
var sum2 = values.reduceRight(function(prev,curr,index,array){
    return prev + curr;
});
var sum3 = 0;
values.forEach(function(item,index,array){
    sum3 += item;
})
console.log(sum);
console.log(sum2);
console.log(sum3);

/*
* Date类型
*/
line();
console.info("Date类型");
var now = new Date();
console.log(now);
var time1 = new Date("6/13/2004");
var time2 = new Date("January 12,2004");
var time3 = new Date("2004-1-12");
var time4 = new Date(2004,0,12);
console.log(time1);
console.log(time2);
console.log(time3);
console.log(time4);
var start = Date.now();
var end = Date.now();
console.log(end-start);
var now2 = +new Date();
console.log(start);
console.log(now2);
console.log(now);
console.log(now.toLocaleDateString());
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toString());
console.log(now.valueOf());
console.log(now.toTimeString());
console.log(now.getDay());

/*Function类型
 */
line();
console.info("Function类型");
/*定义函数的三种方式
* 函数声明
* 1.function name()
* 函数表达式
* 2.var name = function(){}
* 构造函数
* 3.var name = new Function("","","");
*/
function sum1(num1,num2){
    return (num1 + num2);
}
var sum2 = function(num1,num2){
    return (num1 + num2);
};
var sum3 = new Function("value1","value2","return value1 + value2");
var a = 13,b = 24;
console.log(sum1(a,b));
console.log(sum2(a,b));
console.log(sum3(a,b));

/*函数名只是指向了函数的指针*/
var anotherSum = sum1;
console.log(sum1(a,b));
console.log(anotherSum(a,b));
sum1 = null;
console.log(anotherSum(a,b));

/*
* 5.5.2 函数声明与函数表达式
*/
line();
console.info("函数声明与函数表达式");
var sum4 = function sum4(num1,num2){
    return num1 + num2;
};
console.log(sum4(10,20));

/*
* 作为值的函数
*/
line();
console.info("作为值的函数");
function callSomeFunction(someFunction,someArgument){
    return someFunction(someArgument);
}
function add10(value1){
    return value1 + 10;
}
console.log(callSomeFunction(add10,11));

function createComparisonFunction(propertyName){
    return function(object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        return value1 - value2;
    }
}
var data = [{name:"liuguangxuan",age:24},{name:"wangwenli",age:23}];
data.sort(createComparisonFunction("name"));
console.log(data[0]);
data.sort(createComparisonFunction("age"));
console.log(data[0]);

/*
* 函数内部属性
* 1.callee
* 2.caller
* 3.this
* */
function factorial(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num * arguments.callee(num - 1);
    }
}
console.log(factorial(4));
var anotherFactorial = factorial;

factorial = function(){
    return 0;
};
console.log(factorial(4));
console.log(anotherFactorial(4));

function outer(){
    inner();
}
function inner(){
    //console.log(arguments.callee.caller);
}
outer();

window.color = "red";
function sayColor(){
    console.log(this.color);
}
sayColor();
var o = {
    color:"purple"
}
o.sayColor = sayColor;
o.sayColor();

/*
* 函数属性和方法
* 属性：1.length、2.prototype
* 方法：1.apply、2.call
* todo:prototype还不明白什么意思
*/
line();
console.info("函数属性和方法");
function sayName(name){
    console.log(name);
}
function sayHi(){
    console.log("Hi!");
}
console.log(sayHi.length + " " + sayName.length);
console.log(sayHi.prototype);
function sum5(num1,num2){
    return num1 + num2;
}
function callSum1(num1,num2){
    return sum5.apply(this,[num1,num2]);
    //return sum5(num1,num2);
}
function callSum2(num1,num2){
    return sum5.apply(this,arguments);
}
function callSum3(num1,num2){
    return sum5.call(this,num1,num2);
}
console.log(callSum1(10,11));
console.log(callSum2(12,34));
console.log(callSum3(12,34));
window.color = "red";
var o = {
    color : "purple"
}
function  sayColor(){
    console.log(this.color);
}
sayColor();
sayColor.call(this);
sayColor.call(window);
sayColor.apply(window);
sayColor.call(this);
sayColor.call(o);
sayColor.apply(o);
var objectSayColor = sayColor.bind(o);
objectSayColor();

/*
* Boolean类型
* 理解基本类型的布尔值与Boolean对象之间的区别
* Boolean对象在布尔表达式中被转换为true，所以建议永远不要使用Boolean对象
*/
line();
console.info("Boolean类型");
var booleanObject = new Boolean(true);
console.log(booleanObject);
console.log(booleanObject.toString());
console.log(booleanObject.valueOf());
var falseBoolean = new Boolean(false);
var result = falseBoolean && true;
console.log(result);
var falseValue = false;
result = falseValue && true;
console.log(result);
console.log(typeof booleanObject);
console.log(typeof falseValue);
console.log(booleanObject instanceof Boolean);
console.log(falseValue instanceof Boolean);

/*
* Number类型
* 1.toString()、2.foFixed()、3.toExponential()、4.toprecision()
* toString()方法传递一个表示基数的参数，告诉它返回几进制
* toFixed()方法会按照指定的小数位返回数值的字符串表示
* toExponential()方法返回指数表示法表示的数值的字符串形式
* toPrecision()方法最适合的表示方法
*/
line();
console.info("Number类型");
var numberObject = new Number(10);
console.log(numberObject);
var num = new Number(10);
console.log(num);
console.log(num.toString());
console.log(num.valueOf());
console.log(num.toLocaleString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));
console.log(num.toFixed(20));
var num2 = 10.005;
console.log(num2.toFixed(2));
console.log(num.toExponential());
console.log(num.toExponential(2));
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));
console.log(typeof numberObject);
console.log(typeof num2);
console.log(numberObject instanceof Number);
console.log(num2 instanceof Number);

/*
* String类型
* 1.length属性，注意：即使字符串中包含双字节字符（不是占一个字节的ASCII字符），每个字符也仍然算一个字符
* 2.charAt()、charCodeAt()
* 3.concat()、slice()、substr()、subString()
* 4.indexOf()、lastIndexOf()
* 5.trim()
* 6.localCompare()
* 7.fromCharCode()
* */
line();
console.info("String类型");
var stringObject = new String("Hello World!");
console.log(stringObject);
var stringValue = "Hello World!";
console.log(stringValue.length);
console.log(stringValue.charAt(1));
for(var i = 0,len = stringValue.length;i < len;i++){
    //console.log(stringValue.charAt(i));
    console.log(stringValue.charCodeAt(i));
}
console.log(stringValue[1]);
stringValue = "hello";
console.log(stringValue);
var result = stringValue.concat(" ","world");
console.log(result);
console.log(result.slice(3));
console.log(result.substr(3));
console.log(result.substring(3));
console.log(result.slice(3,7));
console.log(result.substr(3,7));
console.log(result.substring(3,7));

console.log(result);
console.log(result.slice(-3));
console.log(result.substr(-3));
console.log(result.substring(-3));
console.log(result.slice(3,-4));
console.log(result.substr(3,-4));
console.log(result.substring(3,-4));
console.log(result.indexOf("o"));
console.log(result.lastIndexOf("o"));
console.log(result.indexOf("o",5));
console.log(result.lastIndexOf("o",5));
var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var position = new Array();
var pos = stringValue.indexOf("e");
while(pos > -1){
    position.push(pos);
    pos = stringValue.indexOf("e",pos + 1);
}
console.log(position);
var positions = new Array();
for(var i = 0,len = stringValue.length;i < len;i++){
    if(stringValue.charAt(i) == "e"){
        positions.push(i);
    }
}
console.log(positions);

var str1 = "  hello world  ";
console.log(str1.length + " " + str1);
console.log(str1.trim().length + " " + str1.trim());
console.log(str1.toUpperCase());
console.log(str1.toLocaleUpperCase());
console.log(str1.toLocaleUpperCase().toLocaleLowerCase());

var stringValue = "yellow";
console.log(stringValue.localeCompare("brick"));
console.log(stringValue.localeCompare("yellow"));
console.log(stringValue.localeCompare("zoo"));

console.log(String.fromCharCode(104,101,108,108,111));

/*
* 5.7单体内置对象
* 例如Object、Array、String
* 例如Global、Math
*/
var uri = "http://www.warenwang.com/Liu Guangxuan";
console.log(decodeURI(encodeURI(uri)));
console.log(decodeURIComponent(encodeURIComponent(uri)));
console.log(uri);
eval("console.log('hello world!');");
eval("var msg = 'hello world'");
console.log(msg);

var max = Math.max(1,2,3,5,2,3,5,7,5676,3453);
console.log(max);
console.log(Math.PI);
console.log(Math.ceil(25.9));
console.log(Math.ceil(25.1));
console.log(Math.ceil(25.5));
console.log(Math.floor(25.9));
console.log(Math.floor(25.5));
console.log(Math.floor(25.5));
console.log(Math.round(25.9));
console.log(Math.round(25.5));
console.log(Math.round(25.1));
function selectFrom(minValue,maxValue){
    var num = maxValue - minValue;
    return Math.floor(Math.random() * num + minValue);
}
var randomArray = [];
for(var i = 1;i < 100;i++){
    randomArray.push(selectFrom(1,100));
}
console.log(randomArray);
