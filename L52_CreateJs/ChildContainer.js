/**
 * Created by LXH on 16/10/12.
 */

function ChildContainer() {
    var Rect=new createjs.Shape();
    Rect.graphics.beginFill("#ccaadd");
    // Rect.graphics.drawRect(0,0,50,50);
    Rect.graphics.drawEllipse(0,0,50,40);
    Rect.graphics.endFill();
    var text=new createjs.Text("😋","30px Arial","#fff");

    this.addChild(Rect);
    this.addChild(text);

}

ChildContainer.prototype=new createjs.Container();