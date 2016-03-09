/**
 * Created by liuguangxuan on 2016/2/25.
 */
/*
* 第六章
* 6.1理解对象
*/
function line(){
    var arrary = new Array(100);
    console.log(arrary.join("*"));
}
line();
console.info("6.1理解对象");
/*
* 创建对象的两种方式
* 1.创建一个Object()的实例，然后再为它添加属性和方法
* 2.对象字面量
*/
var liu = new Object();
liu.name = "Liu Guangxuan";
liu.age = 24;
liu.job = "software engineer";
liu.sayName = function(){
    console.log(this.name);
};
liu.sayName();
console.log(liu);

var wang = {
    name : "Wang Wenli",
    age : 25,
    job : "teacher",
    sayName : function(){
        console.log(this.name);
    }
};
wang.sayName();
console.log(wang);
for(property in liu){
    console.log(property);
}

/*
* 1.数据属性
* 2.访问器属性
*/
Object.defineProperty(liu,"name",{
    writable : false,
    value : "Liu Guangxuan"
});
liu.name = "LiuGuangxuan";
console.log(liu.name);
liu.sayName();
delete liu.name;
liu.sayName();
Object.defineProperty(liu,"name",{
    configurable:false,
    enumerable:true,
    writable:true,
    value:"Liu Guangxuan"

});
delete liu.name;
liu.sayName();
for(property in liu){
    console.log(property);
}
liu.name = "lgx";
liu.sayName();

var book = {
    _year : 2004,
    edition :1
};
Object.defineProperty(book,"year",{
    get : function(){
        return this._year;
    },
    set : function(newYear){
          if(newYear > 2004){
              this._year = newYear;
              this.edition += (newYear - 2004);
          }
    }
});
book.year = 2016;
console.log(book.edition);
console.log(book._year);
for(property in book){
    console.log(property);
}

var newBook = {};
Object.defineProperties(newBook,{
    _year:{
        configurable:true,
        enumerable:true,
        writable : true,
        value : 2004
    },
    edition:{
        configurable:true,
        enumerable:true,
        writable : true,
        value: 1
    },
    year:{
        get:function(){
            return this._year;
        },
        set:function(newYear){
            if(newYear > 2004){
                this._year = newYear;
                this.edition += newYear - 2004;
            }
        }
    }
});
for(var property in book){
    console.log(property);
}
for(var property in newBook){
    console.log(property);
}
console.log(book == newBook);

var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
console.log(descriptor.value);
console.log(descriptor.enumerable);
console.log(descriptor.configurable);
console.log(descriptor.writable);
console.log(typeof descriptor.get);
console.log(typeof descriptor.set);
var descriptor = Object.getOwnPropertyDescriptor(book,"year");
console.log(descriptor.value);
console.log(descriptor.enumerable);
console.log(descriptor.configurable);
console.log(descriptor.writable);
console.log(typeof descriptor.get);
console.log(typeof descriptor.set);

/*
* 6.2 创建对象
* 1.创建一个Object()的实例，然后再为它添加属性和方法
* 2.对象字面量
* 3.工厂模式
* 4.构造函数模式
* 5.原型模式
* */
line();
console.info("创建对象");
var obj1 = new Object();
console.log(typeof obj1);
var obj2 = {};
console.log(typeof obj2);
function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    }
    return o;
}
var person1 = createPerson("liu",24,"software developer");
var person2 = createPerson("wang",25,'English teacher');
console.log(person1);
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}
function sayName(){
    console.log(this.name);
}
var person3 = new Person("li",22,"backend developer");
var person4 = new Person("zheng",32,"programmer");
console.log(person3);
console.log(person1.constructor == Object);
console.log(person3 instanceof Object);
console.log(person3 instanceof Person);
console.log(person3.constructor == Person);


function Person(){}
Person.prototype.name = "Nicholoas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    console.log(this.name);
};
var person1 = new Person();
var person2 = new Person();
person1.sayName();
person2.sayName();
console.log(person1.name);
person1.name = "Liu Guangxuan";
console.log(person1.name);
console.log(person2.name);
delete person1.name;
console.log(person1.name);
console.log(person2.name);
console.log(person1.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));
person1.name = "Liu Guangxuan";
console.log(person1.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));
console.log("name" in person1);
delete person1.name;
console.log(person1.name);
console.log("name" in person1);
console.log(person1.hasOwnProperty("name"));
function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty(name)&&(name in object);
}
person1.name = "liu";
console.log(hasPrototypeProperty(person1,"name"));
for(var property in person1){
    console.log(property);
}
var keys = Object.keys(Person.prototype);
console.log(keys);
var keysAll = Object.getOwnPropertyNames(Person.prototype);
console.log(keysAll);

function Person(){
}
Person.prototype = {
    constructor:Person,
    name : "Liu Guangxuan",
    age : 24,
    job : "Front End Developer",
    sayName : function(){
        console.log(this.name);
    }
};
var person1 = new Person();
person1.sayName();
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
person1.sayName();

/*
* 继承
*/
line();
console.info("6.3 继承");
function SuperType(name){
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
};
function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
    console.log(this.age);
};
var instance1 = new SubType("Liu",24);
instance1.colors.push("purple");
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();
var instance2 = new SubType("Wang",25);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();

