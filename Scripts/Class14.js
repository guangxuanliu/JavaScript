/**
 * Created by 技术2 on 2016/3/29.
 */
/*
* 14.1 表单的基础知识
*/
//获取form的三种方式
//推荐第二种，用表单的name值获取
// var form = document.getElementById("form1");
// console.log(form);
//
// var form2 = document.forms["myForm"];
// console.log(form2);
//
// var form3 = document.myForm;
// console.log(form3);
//
// console.log(form.acceptCharset);
// console.log(form.action);
// console.log(form.elements);
// console.log(form.enctype);
// console.log(form.length);
// console.log(form.elements.length);
// console.log(form.method);
// console.log(form.name);
// console.log(form.target);

//14.1.1 提交表单
//（1）定义提交按钮的三种方法（见index.html）
//（2）提交表单的方法：
// 1.在相应表单控件拥有焦点的情况下，按回车键提交表单，若表单里面没有提交按钮，按回车键不会提交表单。
//      这种情况可以阻止表单提交
// var form = document.forms["myForm"];
// EventUtil.addHandler(form,"submit",function (event) {
//    event = EventUtil.getEvent(event);
//     EventUtil.preventDefault(event);
// });
// 2.以编程方式调用submit()方法提交表单
//      这种情况不会触发submit事件，因此调用此方法之前首先要验证表单数据
// var form = document.forms["myForm"];
// form.submit();

//14.1.2 重置表单
//（1）定义重置按钮的两种方法（见index.html）
//（2）重置表单的方法：同提交表单。但是用编程方式提交表单会触发reset事件。

//14.1.3 表单字段
//1.共有的表单字段属性
// var form = document.forms["myForm"];
// var field1 = form.elements[0];
// field1.value = "Another value";
// console.log(field1.value);
// console.log(field1.form == form);
// field1.focus();
// field1.disabled = true;
// field1.type = "checkbox";

//2.共有的表单字段方法
// EventUtil.addHandler(window,"load",function (event) {
//     var element = document.forms[0].elements[1];
//     if(element.autofocus !== true){
//         element.focus();
//     }
// });

//3.共有的表单字段事件
// var textbox = document.forms[0].elements["tel"];
// EventUtil.addHandler(textbox,"focus",function (event) {
//     var event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     if(target.style.backgroundColor != "red"){
//         target.style.backgroundColor = "yellow";
//     }
// });
// EventUtil.addHandler(textbox,"blur",function (event) {
//     var event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     if(/[^\d]/.test(target.value)){
//         target.style.backgroundColor = "red";
//     }
//     else {
//         target.style.backgroundColor = "";
//     }
// });
// EventUtil.addHandler(textbox,"change",function (event) {
//     var event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     if(/[^\d]/.test(target.value)){
//         target.style.backgroundColor = "red";
//     }
//     else {
//         target.style.backgroundColor = "";
//     }
// });

/*
* 14.2 文本框脚本
*/
// var input = document.forms["myForm"].elements["input1"];
// console.log(input.value);
// input.value ="这是个input输入框";

//14.2.1 选择文本
//获取焦点时选择文本
// var textbox = document.forms["myForm"].elements["input1"];
// EventUtil.addHandler(textbox,"focus",function (event) {
//     var event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     textbox.select();
// });

//选择事件
// var textbox = document.forms["myForm"].elements["input1"];
// EventUtil.addHandler(textbox,"select",function (event) {
//     console.log(getSelectedText(textbox));
// });
// //取得选择的文本
// function getSelectedText(textbox) {
//     if(typeof textbox.selectionStart == "number"){
//         return textbox.value.substring(textbox.selectionStart,textbox.selectionEnd);
//     }
//     else if(document.selection){
//         return document.selection.createRange().text;
//     }
// }

//选择部分文本
// var textbox = document.forms["myForm"].elements["input1"];
// textbox.setSelectionRange(1,textbox.value.length -1);

//跨浏览器的选择部分文本
// function selectText(textbox,startIndex,stopIndex) {
//     if(textbox.setSelectionRange){
//         textbox.setSelectionRange(startIndex,stopIndex);
//     }
//     else if(textbox.createTextRange){
//         var range = textbox.createTextRange();
//         range.collapse(true);
//         range.moveStart("character",startIndex);
//         range.moveEnd("character",stopIndex);
//         range.select();
//     }
//     textbox.focus();
// }
// var textbox = document.forms["myForm"].elements["input1"];
// selectText(textbox,1,2);

//14.2.2 过滤输入
// 屏蔽字符
// var textbox = document.forms["myForm"].elements["input1"];
// EventUtil.addHandler(textbox,"keypress",function (event) {
//     var event = EventUtil.getEvent(event);
//     var charCode = EventUtil.getCharCode(event);
//     if(!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey ){
//         event.preventDefault();
//     }
// });
// EventUtil.addHandler(textbox,"paste",function (event) {
//     var event = EventUtil.getEvent(event);
//     var text = EventUtil.getClipboardText(event);
//     if (!/^\d*$/.test(text)){
//         event.preventDefault();
//     }
// });

/*
* 14.2.3 自动切换焦点
*/
// (function () {
//     function tabForward(event) {
//         event = EventUtil.getEvent(event);
//         var target = EventUtil.getTarget(event);
//         if(target.value.length == target.maxLength ){
//             var form = target.form;
//             for(var i = 0,len = form.elements.length;i < len;i++){
//                 if(form.elements[i] == target){
//                     if(form.elements[i+1]){
//                         form.elements[i+1].focus();
//                     }
//                 }
//             }
//         }
//     }
//     var textbox1 = document.getElementById("txtTel1");
//     var textbox2 = document.getElementById("txtTel2");
//     var textbox3 = document.getElementById("txtTel3");
//     EventUtil.addHandler(textbox1,"keyup",tabForward);
//     EventUtil.addHandler(textbox2,"keyup",tabForward);
//     EventUtil.addHandler(textbox3,"keyup",tabForward);
// })();

/*
* 14.2.4 HTML5约束验证API
*/
//验证是否支持required属性
// var isRequiredSupported = "required" in document.createElement("input");
// console.log(isRequiredSupported);

//输入模式
// var textbox = document.forms["myForm"].elements["tel"];
// EventUtil.addHandler(textbox,"keyup",function (event) {
//     console.log(textbox.validity)
// });

/*
* 14.3 选择框脚本
*/
// var select = document.forms["myForm"].elements["staff"];
// console.log(select.options[0].text);
// console.log(select.options[0].value);

//14.3.1 选择选项
// var select = document.forms["myForm"].elements["staff"];
// EventUtil.addHandler(select,"change",function (event) {
//     var event = EventUtil.getEvent(event);
//     var selectIndex = select.selectedIndex;
//     var selectValue = select.options[selectIndex].value;
//     var selectText = select.options[selectIndex].text;
//     console.log("您选择了" + selectText);
// });

// function getSelectedOptions(select){
//     var result = new Array();
//     var len = select.length;
//     for(var i = 0;i < len;i++){
//         if(select.options[i].selected){
//             result.push(select.options[i]);
//         }
//     }
//     return result;
// }
// var select = document.forms["myForm"].elements["staff"];
// EventUtil.addHandler(select,"change",function (event) {
//     var selectedOptions = getSelectedOptions(select);
//     console.log("您选择了" + selectedOptions.length + "个成员：");
//     for(var i = 0;i < selectedOptions.length;i++){
//         console.log(selectedOptions[i].text);
//     }
// });

//14.3.2 添加选项
//有三种方式
// var select = document.forms["myForm"].elements["staff"];
// var newOption = document.createElement("option");
// newOption.appendChild(document.createTextNode("Option text"));
// newOption.setAttribute("value","Option value");
// select.appendChild(newOption);

// var newOption = new Option("Option text","Option value");
// select.appendChild(newOption);

// var newOption = new Option("Option text","Option value");
// select.add(newOption,undefined);

//14.3.3 移除选项
// select.removeChild(select.options[0]);

// select.remove(0);

// select.options[0] = null;

//移除所有的选项
// function clearSelectbox(selectbox) {
//     for(var i = 0,len = selectbox.options.length;i < len;len--){
//         selectbox.remove(i);
//     }
// }
// clearSelectbox(select);

//14.3.4 移动和重排序选项
// var select1 = document.forms["myForm"].elements["staff"];
// var select2 = document.forms["myForm"].elements["num"];
// select2.insertBefore(select1.options[0],select2.options[0]);

/*
* 14.4 表单序列化
*/

/*
* 14.5 富文本编辑
*/
EventUtil.addHandler(window,"load",function (event) {
    frames["richedit"].document.designMode = "on";
});

var operation = document.getElementById("operation");
var test = document.getElementById("test");
EventUtil.addHandler(operation,"click",function (event) {
    document.execCommand("forecolor",false,"#12b4a4");
});
EventUtil.addHandler(test,"click",function (event) {
    console.log(document.queryCommandValue("forecolor"));
});