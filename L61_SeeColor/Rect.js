function Rect(n, color, clickColor) {
    createjs.Shape.call(this);
    this.setRectType = function (type) {
        this._RectType = type;
        switch (type) {
            case 1:
                this.setColor(color);
                break;
            case 2:
                this.setColor(clickColor);
                break;
        }
    }
    this.setColor = function (colorString) {
        this.graphics.beginFill(colorString).drawRect(0, 0, 400 / n - 5, 400 / n - 5).endFill();
    }
    this.getRectType = function () {
        return this._RectType;
    }
    this.setRectType(1);

}
Rect.prototype = new createjs.Shape();