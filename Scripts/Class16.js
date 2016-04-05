/**
 * Created by 技术2 on 2016/4/5.
 */
// var myBtn = document.getElementById("myBtn");
// EventUtil.addHandler(myBtn,"click",function (event) {
//     var iframeWindow = document.getElementById("myFrame").contentWindow;
//     var liu = {
//         name:"liuguangxuan",
//         age:24,
//         gender:"male"
//     };
//     iframeWindow.postMessage(JSON.stringify(liu),"*");
// });
// EventUtil.addHandler(window,"message",function (event) {
//     console.log(event.data);
// });
//

var title = document.getElementById("title");
var image = document.getElementById("myPic");
var textbox = document.getElementById("textbox");
// EventUtil.addHandler(window,"dragstart",function (event) {
//     console.log("dragstart");
// });
// EventUtil.addHandler(window,"drag",function (event) {
//     console.log("drag");
// });
// EventUtil.addHandler(window,"dragend",function (event) {
//     console.log("dragend");
// });

// EventUtil.addHandler(textbox,"dragenter",function (event) {
//     console.log("dragenter");
// });
// EventUtil.addHandler(textbox,"dragover",function (event) {
//     console.log("dragover");
// });
// EventUtil.addHandler(textbox,"dragleave",function (event) {
//     console.log("dragleave");
// });
// EventUtil.addHandler(textbox,"drop",function (event) {
//     console.log("drop");
// });

// var myDiv = document.getElementById("myDiv");
// EventUtil.addHandler(myDiv,"dragover",function (event) {
//     event.preventDefault();
// });
// EventUtil.addHandler(myDiv,"dragenter",function (event) {
//     event.preventDefault();
// });
// EventUtil.addHandler(myDiv,"drop",function (event) {
//     EventUtil.preventDefault(event);
//     var url = event.dataTransfer.getData("url");
//     var text = event.dataTransfer.getData("text");
//     console.log(url || text);
//     if(url){
//         var pic = document.createElement("img");
//         pic.src = url;
//         myDiv.appendChild(pic);
//     }
//     else if (text){
//         myDiv.innerHTML += text;
//     }
// });

// var player = document.getElementById("player");
// var btn = document.getElementById("video-btn");
// var curtime = document.getElementById("curtime");
// var duration = document.getElementById("duration");
// duration.innerHTML = player.duration;
// EventUtil.addHandler(btn,"click",function (event) {
//     if(player.paused){
//         player.play();
//         btn.value = "Pause";
//     }
//     else {
//         player.pause();
//         btn.value = "Play";
//     }
// });
// setInterval(function () {
//    curtime.innerHTML = player.currentTime;
// },250);

// var video = document.getElementById("player");
// console.log(video.canPlayType("video/mp4;codecs=\"avc1.42E01E,mp4a.40.2\""));
// console.log(video.canPlayType("video/ogg"));
// console.log(video.canPlayType("video/webm"));

// var audio = new Audio("../Videos/刘珂矣 - 半壶纱.mp3");
// EventUtil.addHandler(audio,"canplay",function (event) {
//     audio.play();
// });