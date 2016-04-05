/**
 * Created by 技术2 on 2016/4/5.
 */

var drawing =document.getElementById('drawing');
if(drawing.getContext){
    var context = drawing.getContext("2d");

    //绘制红色矩形
    // context.fillStyle = "#ff0000";
    // context.fillRect(10,10,50,50);

    //绘制半透明蓝色矩形
    // context.fillStyle = "rgba(0,0,255,0.5)";
    // context.fillRect(30,30,50,50);

    //设置线条的样式
    // context.lineWidth = "3";
    // context.lineCap = "square";
    // context.lineJoin = "miter";

    //绘制红色描边矩形
    // context.strokeStyle = "#ff0000";
    // context.strokeRect(10,10,50,50);

    //绘制半透明蓝色描边矩形
    // context.strokeStyle = "rgba(0,0,255,0.5)";
    // context.strokeRect(30,30,50,50);

    //在两个矩形重叠的地方清除一个小矩形
    // context.clearRect(40,40,10,10);

    // context.beginPath();
    // context.arc(100,100,99,0,2 * Math.PI,false);
    // context.moveTo(194,100);
    // context.arc(100,100,94,0,2 * Math.PI,false);
    // context.translate(100,100);
    // context.rotate(2);
    // context.moveTo(0,0);
    // context.lineTo(0,-85);
    // context.moveTo(0,0);
    // context.lineTo(-65,0);
    // context.stroke();

    // context.font = "bold 14px Arial";
    // context.textAlign = "center";
    // context.textBaseline = "middle";
    // context.fillText("12",100,15);
    //
    // context.textAlign = "start";
    // context.fillText("12",100,40);
    //
    // context.textAlign = "end";
    // context.fillText("12",100,60);

    // var image = document.images[0];
    // context.drawImage(image,0,0,50,50,0,0,50,50);
}