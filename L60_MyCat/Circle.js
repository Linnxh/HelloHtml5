/**
 * Created by LXH on 16/10/14.
 */

function Circle() {
    createjs.Shape.call(this);
    this.setCircleType = function (type) {
        this._circleType = type;
        switch (type) {
            case Circle.TYPE_UNSELECTED://正常
                this.setColor("#ccc");
                break;
            case Circle.TYPE_SELECTED://点击
                this.setColor("#ff6600");
                break;
            case Circle.TYPE_CAT://cat
                this.setColor("#0000ff");
                break;
        }
    }

    this.setColor = function (colorString) {
        this.graphics.beginFill(colorString).drawCircle(0, 0, 25).endFill();
    }

    this.getCircleType = function () {
        return this._circleType;
    }
    this.setCircleType(1);
}
Circle.TYPE_UNSELECTED = 1;
Circle.TYPE_SELECTED = 2;
Circle.TYPE_CAT = 3;
Circle.prototype = new createjs.Shape();
