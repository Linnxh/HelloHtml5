/**
 * Created by LXH on 16/10/12.
 */
// var canvas = document.getElementById("gameView");
// var stage = new createjs.Stage(canvas);
// var gameView = new createjs.Container();
// stage.addChild(gameView);

// var circle = new createjs.Shape();
// circle.graphics.beginFill("red").drawCircle(40, 40, 40);
// //Set position of Shape instance.
// circle.x = circle.y = 50;
// gameView.x = 100;
// gameView.y = 100;

// var c = new Circle();
// c.setCircleType(Circle.TYPE_GREEN);
// gameView.addChild(c);
//
// c.addEventListener("click", function (event) {
//     // alert("点击了图形");
//     alert(event.localX + "--" + event.localY);
// });
//
// var count=0;
// var text = new createjs.Text("text onth canvas..0", "36px Arial", "#fff");
// text.x = 100;
// text.y = 100;
// text.rotation=20;
// stage.addChild(text);
//
// var Rect = new createjs.Shape();
// Rect.graphics.beginFill("#ff0000");
// Rect.graphics.drawRect(-10, -10, text.getMeasuredWidth() + 30, 50);
// Rect.x=text.x;
// Rect.y=text.y;
// Rect.rotation=text.rotation;
// Rect.graphics.endFill();
// stage.addChildAt(Rect,0);
//
//
// createjs.Ticker.setFPS(100);
// createjs.Ticker.addEventListener("tick", handlerTick);
// function handlerTick(e) {
//     // count++;
//     // text.text = "text onth canvas.." + count;
//     // Rect.graphics.clear().beginFill("#ff0000").drawRect(-10, -10, text.getMeasuredWidth() + 30, 50);
//     stage.update(e);
// }
//
// var bitmap=new createjs.Bitmap("1.jpg");
// gameView.addChild(bitmap);

var stage = new createjs.Stage("gameView");
createjs.Ticker.addEventListener("tick", stage);

var mc = new createjs.MovieClip(null, 0, true, {start:20});
stage.addChild(mc);

var child1 = new createjs.Shape(
    new createjs.Graphics().beginFill("#999999")
        .drawCircle(30,30,30));
var child2 = new createjs.Shape(
    new createjs.Graphics().beginFill("#5a9cfb")
        .drawCircle(30,30,30));

mc.timeline.addTween(
    createjs.Tween.get(child1)
        .to({x:0}).to({x:60}, 50).to({x:0}, 50));
mc.timeline.addTween(
    createjs.Tween.get(child2)
        .to({x:60}).to({x:0}, 50).to({x:60}, 50));

mc.gotoAndPlay("start");


// stage.update();
