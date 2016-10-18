/**
 * Created by LXH on 16/8/4.
 */

var imgContainer;
var msg;
window.onload = function () {
    imgContainer = document.getElementById("imgContainer");
    msg = document.getElementById("msg");
    imgContainer.ondragover = function (e) {
        e.preventDefault();
    }

    imgContainer.ondrop = function (e) {
        e.preventDefault();
        var f = e.dataTransfer.files[0];
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            // showObject(e.target);
            imgContainer.innerHTML = "<img src=\"" + fileReader.result + "\">";
        }
        fileReader.readAsDataURL(f)
    }

}

function showObject(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br/>";
    }
    msg.innerHTML = s;
}