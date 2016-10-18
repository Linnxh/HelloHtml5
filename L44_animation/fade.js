/**
 * Created by LXH on 16/9/18.
 */


$(document).ready(function () {


    $("button").click(function () {
        $("p").hide(
            function () {
                alert("方法回调成功");
            }
        );
    });

    $("#in").on("click",function () {
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
        $("#div4").fadeIn(1000);
    })

    $("#out").on("click",function () {
        $("#div1").fadeOut(4000,"linear");
        $("#div2").fadeOut(4000);
        $("#div3").fadeOut(1000);
        $("#div4").fadeOut(1000);
    })

    $("#tonggle").on("click",function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
        $("#div4").fadeToggle(1000);
    })

});