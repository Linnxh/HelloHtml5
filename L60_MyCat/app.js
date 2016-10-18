/**
 * Created by LXH on 16/10/14.
 */

var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);
var gameView = new createjs.Container();
stage.addChild(gameView);
gameView.x = 60;
gameView.y = 60;

var circleArr = [[], [], [], [], [], [], [], [], []];
var currentCat;
var MOVE_NONE = -1, MOVE_LEFT = 0, MOVE_UP_LEFT = 1, MOVE_UP_RIGHT = 2, MOVE_RIGHT = 3, MOVE_DOWN_RIGHT = 4, MOVE_DOWN_LEFT = 5;

addCircle();


function addCircle() {
    for (var indexY = 0; indexY < 9; indexY++) {
        for (var indexX = 0; indexX < 9; indexX++) {
            var c = new Circle();

            gameView.addChild(c);
            circleArr[indexX][indexY] = c;
            c.indexX = indexX;
            c.indexY = indexY;
            c.x = indexY % 2 ? indexX * 55 + 25 : indexX * 55;
            c.y = indexY * 55;

            if (indexX == 4 && indexY == 4) {
                c.setCircleType(3);
                currentCat = c;
            } else if (Math.random() < 0.1) {
                c.setCircleType(Circle.TYPE_SELECTED);
            }
            c.addEventListener("click", circleClick);
        }

    }
}
//1:正常  2：点击   3：猫
function circleClick(event) {
    if (event.target.getCircleType() != Circle.TYPE_CAT) {
        event.target.setCircleType(Circle.TYPE_SELECTED)
    } else {
        return;
    }
    if (currentCat.indexX == 0 || currentCat.indexX == 8 || currentCat.indexY == 0 || currentCat.indexY == 8) {
        alert("游戏结束~~~");
        return;
    }
    var dir = getMoveDir(currentCat);

    switch (dir) {
        case MOVE_LEFT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexX - 1][currentCat.indexY];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_UP_LEFT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexY % 2 == 0 ? currentCat.indexX - 1 : currentCat.indexX][currentCat.indexY - 1];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_UP_RIGHT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexY % 2 == 0 ? currentCat.indexX : currentCat.indexX + 1][currentCat.indexY - 1];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_RIGHT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexX + 1][currentCat.indexY];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_DOWN_RIGHT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexY % 2 == 0 ? currentCat.indexX : currentCat.indexX + 1][currentCat.indexY + 1];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_DOWN_LEFT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexY % 2 == 0 ? currentCat.indexX - 1 : currentCat.indexX][currentCat.indexY + 1];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        default:
            alert("游戏结束");
    }
}
function getMoveDir(cat) {

    var distanaceMap = [];
    //left
    var can = true; //可以移动
    for (var x = cat.indexX; x >= 0; x--) {
        if (circleArr[x][cat.indexY].getCircleType() == Circle.TYPE_SELECTED) {
            can = false;
            distanaceMap[MOVE_LEFT] = cat.indexX - x;
            break;
        }
    }
    if (can) {
        return MOVE_LEFT;
    }
    //left up
    can = true;
    var x = cat.indexX, y = cat.indexY;
    while (true) {
        if (circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED) {
            can = false;
            distanaceMap[MOVE_UP_LEFT] = cat.indexY - y;
            break;

        }
        if (y % 2 == 0) {
            x--;
        }
        y--;
        if (y < 0 || x < 0) {
            break;
        }
    }
    if (can) {
        return MOVE_UP_LEFT;
    }

    //right up
    can = true;
    x = cat.indexX, y = cat.indexY;
    while (true) {
        if (circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED) {
            can = false;
            distanaceMap[MOVE_UP_RIGHT] = cat.indexY - y;
            break;

        }
        if (y % 2 == 1) {
            x++;
        }
        y--;
        if (y < 0 || x > 8) {
            break;
        }
    }
    if (can) {
        return MOVE_UP_RIGHT;
    }

    //right
    var can = true; //可以移动
    for (var x = cat.indexX; x < 9; x++) {
        if (circleArr[x][cat.indexY].getCircleType() == Circle.TYPE_SELECTED) {
            can = false;
            distanaceMap[MOVE_RIGHT] = x - cat.indexX;
            break;
        }
    }
    if (can) {
        return MOVE_RIGHT;
    }
    //right down
    can = true;
    x = cat.indexX, y = cat.indexY;
    while (true) {
        if (circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED) {
            can = false;
            distanaceMap[MOVE_DOWN_RIGHT] = y - cat.indexY;
            break;

        }
        if (y % 2 == 1) {
            x++;
        }
        y++;
        if (x > 8 || y > 8) {
            break;
        }
    }
    if (can) {
        return MOVE_DOWN_RIGHT;
    }
    //left down
    can = true;
    x = cat.indexX, y = cat.indexY;
    while (true) {
        if (circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED) {
            can = false;
            distanaceMap[MOVE_DOWN_LEFT] = y - cat.indexY;
            break;

        }
        if (y % 2 == 0) {
            x--;
        }
        y++;
        if (x < 0 || y > 8) {
            break;
        }
    }
    if (can) {
        return MOVE_DOWN_LEFT;
    }

    var maxDir = -1, maxValue = -1;
    for (var dir = 0; dir < distanaceMap.length; dir++) {
        if (distanaceMap[dir] > maxValue) {
            maxValue = distanaceMap[dir];
            maxDir = dir;
        }
    }
    if (maxValue>1){
        return maxDir;
    }else{
        return MOVE_NONE;
    }

    function refreshCircleColor(circle) {
        if (circle.getCircleType() == 1) {
            circle.setCircleType(3);
            currentCat.setCircleType(1);
            currentCat = circle;
        }
    }
}
