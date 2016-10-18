/**
 * Created by LXH on 16/8/4.
 */

var box1Div;
var box2Div;
var msgDiv;
var img1;
window.onload = function () {

    box1Div = document.getElementById("box1");
    box2Div = document.getElementById("box2");
    msgDiv = document.getElementById("msg");
    img1 = document.getElementById("img1");

    // box1Div.ondragenter = function (event) {
    //     showObject(event);
    // }
    box1Div.ondragover = function (e) {
        e.preventDefault();
    }

    box2Div.ondragover = function (e) {
        e.preventDefault();
    }

    img1.ondragstart = function (e) {
        e.dataTransfer.setData("imgId", "img1");
    }

    box1Div.ondrop = dropImageHandle;
    box2Div.ondrop = dropImageHandle;
}

function dropImageHandle(e) {
    showObject(e);
    e.preventDefault();
    var img = document.getElementById(e.dataTransfer.getData("imgId"));
    e.target.appendChild(img);
}

function showObject(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br/>";
    }
    msgDiv.innerHTML = s;
}