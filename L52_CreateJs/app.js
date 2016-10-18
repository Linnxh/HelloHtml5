/**
 * Created by LXH on 16/10/11.
 */

var stage=new createjs.Stage("gameView");
stage.alpha=0.5;
stage.x=100;
stage.y=100;
stage.skewX =50;

var text=new createjs.Text("hello ","38px Arial","#777");

var circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(40, 40, 40);
//Set position of Shape instance.
circle.x = circle.y = 50;

stage.addChild(text);
stage.addChild(circle);

stage.update();