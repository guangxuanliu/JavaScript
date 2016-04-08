/**
 * Created by 技术2 on 2016/4/8.
 */

//离线检测，经测试此检测方法不可靠，只在IE中可行
// if (navigator.onLine) {
//     console.log('ONLINE!');
// } else {
//     console.log('Connection flaky');
// }
// EventUtil.addHandler(window,"online",function () {
//     alert("Online");
// });
// EventUtil.addHandler(window,"offline",function () {
//     alert("Offline");
// });

//应用缓存
// console.log(applicationCache.status);
// setTimeout(function () {
//     applicationCache.update();
// },3000);
//

/*
* 23.3 数据存储
*/
//23.3.1
// CookieUtil.set("name","Liu guangxuan",new Date("January 1, 2017"));
// CookieUtil.set("book","Professional JavaScript");
// SubCookieUtil.set("data","name","Liu Guangxuan");

//23.3.3 Web存储机制
sessionStorage.setItem("name","liuguangxuan");
sessionStorage.book = "Professional JavaScript";
var name = sessionStorage.name;
var book = sessionStorage.getItem("book");
// console.log(name);
// console.log(book);
// for(var i = 0,len = sessionStorage.length;i < len;i++){
//     var key = sessionStorage.key(i);
//     var value = sessionStorage[key];
//     console.log(key + "=" + value);
// }
// delete sessionStorage.book;
// sessionStorage.removeItem("name");
// for(var key in sessionStorage){
//     console.log(key + "=" + sessionStorage[key]);
// }

//globalStorage已不支持，请勿再使用
// globalStorage[location.host].name = "wangwenli";
// var name = globalStorage[location.host].name;
// console.log(name);

//WebKit尚不支持storage事件
EventUtil.addHandler(document,"storage",function (event) {
    console.log("Storage 事件");
});
localStorage.setItem("usera","Liusanye");

