/**
 * Created by LXH on 16/9/18.
 */

//两种实现方式
$.myjq = function () {
    alert("hello");
}

$.fn.myjq=function () {
    $(this).text("helllollo");
}