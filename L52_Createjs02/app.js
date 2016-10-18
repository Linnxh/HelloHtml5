/**
 * Created by LXH on 16/10/13.
 */
var tweens;
var circleCount = 20;
var activeCount;
var canvas;
var stage;
var tweens

canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);
tweens = [];
for (var i = 0; i < circleCount; i++) {
    var circle = new createjs.Shape();
    circle.graphics.setStrokeStyle(8);
    circle.graphics.beginStroke("#f0f");
    circle.graphics.drawCircle(0, 0, (i + 1) * 4);
    circle.compositeOperation = "lighter";
    var tween = createjs.Tween.get(circle)
        .to({x: 300, y: 200}, (0.5 + i * 0.04) * 1500, createjs.Ease.bounceOut.call(tweenComplete));
    tweens.push({tween: tween, ref: circle});
    stage.addChild(circle);
}

activeCount = circleCount;
function tweenComplete() {
    activeCount--;
}

stage.addEventListener("stagemouseup", function () {
    for (var i = 0; i < circleCount; i++) {
        var circle = tweens[i].ref;
        createjs.Tween.get(circle, {loop: false}, true)
            .to({
                x: stage.mouseX,
                y: stage.mouseY
            }, (0.5 + i * 0.04) * 1500, createjs.Ease.bounceOut.call(tweenComplete));
    }
    activeCount = circleCount;
});

createjs.Ticker.addEventListener("tick", stage);
// createjs.CSSPlugin.install(createjs.Tween);
// var box = document.createElement("div");
// box.style.width = "400px";
// box.style.height = "400px";
// box.style.position = "absolute";
// box.style.backgroundColor = "#ccffaa";
//
// document.body.appendChild(box);
//
// var canvas=document.getElementById("gameView");
// var stage = new createjs.Stage(canvas);
// var circle = new createjs.Shape();
// circle.graphics.beginFill("#ff0000").drawCircle(50, 50, 50);
// stage.addChild(circle);
//
//
// // createjs.Tween.get(circle, {loop: false}, true)
// //     .to({x: 400, y: 0, alpha: 0.1}, 1000,createjs.Ease.backIn)
// //     .to({x: 0, y: 0, alpha: 0.1}, 1000,createjs.Ease.backIn)
// //     .wait(1000)
// //     .to({alpha:1},100);
// //
// createjs.Ticker.setFPS(30);
//
//
// createjs.MotionGuidePlugin.install(createjs.Tween);
// // Using a Motion Guide
// createjs.Tween.get(circle).to({guide:{ path:[0,0, 0,200,200,200, 200,0,0,0] }},7000);
// // Visualizing the line
// // graphics.moveTo(0,0).curveTo(0,200,200,200).curveTo(200,0,0,0);

