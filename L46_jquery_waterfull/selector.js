/**
 * Created by LXH on 16/9/5.
 * children  孩子类的属性 可选参数
 * find      任意元素即可 必选参数
 */


$(document).ready(function () {
    $(window).on("load", function () {
        imgLocation();
        var imageData = {"data": [{"src": "24.jpg"}, {"src": "23.jpg"}, {"src": "22.jpg"}, {"src": "21.jpg"}, {"src": "20.jpg"}, {"src": "19.jpg"}, {"src": "18.jpg"}, {"src": "17.jpg"}, {"src": "16.jpg"}, {"src": "15.jpg"}]};
        window.onscroll = function () {
            console.log(".scrollside-->" + 2);
            if (scrollside()) {
                console.log(".scrollside-->" + 1);
                $.each(imageData.data, function (index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    // console.log("./img/-->" + $(value).attr("src"));
                    // var img = $("<img>").attr().appendTo(box);
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        }
    });
});

function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    // console.log("lastboxHeight-->" + lastboxHeight);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    // console.log("scrollHeight + documentHeight-->" + scrollHeight + documentHeight);
    // console.log("lastboxHeight -->" + lastboxHeight);
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    // console.log("boxWidth-->" + boxWidth);
    var num = Math.floor($(window).width() / boxWidth);//每行显示的个数
    // console.log("num-->" + num);
    var boxArr = [];//用来存放高度的集合
    box.each(function (index, value) {
        // console.log("index-->" + index + "--value-->" + value);
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height();
        }
    })
}