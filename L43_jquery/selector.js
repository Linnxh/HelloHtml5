/**
 * Created by LXH on 16/9/5.
 */

var button1;

$(document).ready(function () {
    /** 自定义事件 **/
    button1 = $("#button1");
    button1.click(function () {
        var e = jQuery.Event("MyEvent");
        button1.trigger(e);
    });

    button1.bind("MyEvent", function (event) {
        console.log(event);
    });

    /** 事件冒泡 **/
    // $("body").bind("click",bodyHandler);
    // $("div").bind("click",divHandler);


    // $("#button1").bind("click",clickHandler);
    // $("#button2").bind("click",clickHandler);

    // $("button").mouseenter(function () {
    //     $(this).hide();
    // })

    // $("button").click(function () {
    //     $("p").text("文字被改了");
    // })

});
function bodyHandler(event) {
    console.log(event);
}
function divHandler(event) {
    console.log(event);
    event.stopPropagation();//阻止父类事件
    event.stopImmediatePropagation();//阻止所有父类事件
}


// function clickHandler(e) {
//     console.log("click Handler")
// }