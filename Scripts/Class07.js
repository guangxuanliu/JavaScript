/**
 * Created by liuguangxuan on 2016/3/1.
 */

function line(){
    var array = new Array(100);
    console.log(array.join("*"));
}

/*
* 函数表达式
*/
line();
console.info("第7章 函数表达式");
/*
* 声明函数的两种方式
* 1.函数声明、2.函数表达式
*/
function functionName1(arg0,arg1,arg2){
    //函数体
}
sayHi();
function sayHi(){
    console.log("Hi!");
}
var functionName2 = function(arg0,arg1,arg2){
    //函数体
};
console.log(functionName1.name);
console.log(functionName2.name);
var sayHello = function(){
    console.log("Hello!")
};
sayHello();
var condition = true;
if(condition){
    function sayYes(){
        console.log("yes first");
    }
}
else{
    function sayYes(){
        console.log("yes second");
    }
}
sayYes();

var sayNo;
if(condition){
    sayNo = function(){
        console.log("No First!");
    }
}
else
{
    sayNo = function(){
        console.log("No Second!");
    }
}
sayNo();

function createComparisonFunction(propertyName){
    return function(object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value1 > value2){
            return 1;
        }
        else if(value1 < value2){
            return -1;
        }
        else
        {
            return 0;
        }
    }
}
var result = createComparisonFunction("name");
console.log(result);
console.log(result({"name":"Liu Guangxuan",age:24},{"name":"Wang Wenli",age:25}));
var start = Date.now();
var factorial = (function F(num){
    if(num <= 1){
        return 1;
    }
    else
    {
        return num * F(num - 1);
    }
});
console.log(factorial(170));
var end = Date.now();
console.log(end-start);
var anotherFactorial = factorial;
console.log(factorial(170));

function compare(value1,value2){
    if(value1 > value){
        return 1;
    }
    else if(value1 < value2){
        return -1;
    }
    else{
        return 0;
    }
}
console.log("stop here!");

/*
* 闭包与变量
*/
line();
console.info("闭包与变量");
var name = "Liu Guangxuan";
var object = {
        name : "Wang Wenli",
        getName : function(){
        return function (){
            return name;
        }
    }
};
console.log(name);
console.log(object.getName()());