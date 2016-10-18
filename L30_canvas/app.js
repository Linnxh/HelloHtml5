/**
 * Created by LXH on 16/8/5.
 */

var canvas;
var context;
var stage;
var text;
var count=0;
window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    stage = new createjs.Stage(canvas);
    text = new createjs.Text("number-->0", "20px Arial", "#ccffee");
    stage.addChild(text);

    createjs.Ticker.setFPS(1000);
    createjs.Ticker.addEventListener("tick", tick);
}

function tick() {
    count++;
    text.text = "number-->" + count + "!";
    stage.update();
}
