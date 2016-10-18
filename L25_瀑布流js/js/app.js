/**
 * Created by LXH on 16/8/3.
 */
window.onload = function () {
    imgLocation("container", "box");
    var imageData = {"data": [{"src": "img/24.jpg"}, {"src": "img/23.jpg"}, {"src": "img/22.jpg"}, {"src": "img/21.jpg"}, {"src": "img/20.jpg"}, {"src": "img/19.jpg"}, {"src": "img/18.jpg"}, {"src": "img/17.jpg"}, {"src": "img/16.jpg"}, {"src": "img/15.jpg"}]};
    window.onscroll = function () {
        if (checkFlag()) {
            // console.log("1111");
            var cparent = document.getElementById("container");
            for (var i = 0; i < imageData.data.length; i++) {
                // console.log("````````" + i);

                var ccontent = document.createElement("div");
                ccontent.className = "box";
                cparent.appendChild(ccontent);

                var boxImag = document.createElement("div")
                boxImag.className = "box_img";
                ccontent.appendChild(boxImag);

                var img = document.createElement("img")
                img.src = imageData.data[i].src;
                boxImag.appendChild(img);

            }
            imgLocation("container", "box");
        }
    }

}

function checkFlag() {
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent, "box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    // console.log("lastContentHeight=--->" + lastContentHeight);
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(lastContentHeight + "," + scrolltop + "," + pageHeight);
    if (lastContentHeight < (scrolltop + pageHeight)) {
        return true;
    }

}

function imgLocation(parent, content) {
    var cParent = document.getElementById(parent);
    var ccontent = getChildElement(cParent, content);
    var imgWidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    cParent.style.cssText = "width:" + imgWidth * cols + "px;margin:0px auto";
    var boxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < cols) {
            boxHeightArr[i] = ccontent[i].offsetHeight
        } else {
            var minheight = Math.min.apply(null, boxHeightArr);
            // console.log(minheight);
            var minIndex = getMinHeightLocation(boxHeightArr, minheight)
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + ccontent[i].offsetHeight;

        }
    }

}

function getMinHeightLocation(boxHeghtAttr, minHeight) {
    for (var i in boxHeghtAttr) {
        if (boxHeghtAttr[i] == minHeight) {
            return i;
        }
    }
}

function getChildElement(parent, content) {
    var contentArr = [];
    var allContent = parent.getElementsByTagName("*");
    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}