/**
 * Created by LXH on 16/9/5.
 * children  孩子类的属性 可选参数
 * find      任意元素即可 必选参数
 */



var myjq = $.noConflict();//防止美元符号被代替
myjq(document).ready(function () {

    myjq("button").on("click", function () {
        myjq("div").text("new hello");
    });
    // $.myjq();//自定义jquery
    // $("div").myjq();


});