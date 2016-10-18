/**
 * Created by LXH on 16/8/5.
 */

var CANVAS_WIDHT = 500, CANVAS_HEIGHT = 500;
var mycanvas, context;

window.onload = function () {
    createCanvas();
    // drawRect()
    drawImage();
}

function createCanvas() {
    // <canvas id="mycanvas" width="300px" height="300px" ></canvas>
    var html = "<canvas id=\"mycanvas\"width=\"" + CANVAS_WIDHT + "\"height=\"" + CANVAS_HEIGHT + "\"></canvas>";
    console.log(html);
    document.body.innerHTML = html;
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");

}

function drawRect() {
    context.fillStyle = "#ccffaa";
    context.rotate(45);
    context.fillRect(0, 0, 200, 200);
}
function drawImage() {
    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0);
    }
    img.src = "1.jpg"
}