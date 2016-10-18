/**
 * Created by LXH on 16/9/5.
 */


$(document).ready(function () {

    $("p").addClass(function () {
        $("#text").css("background-color","#ddaadd");
    })

    $("#btn1").click(function () {
        alert("text-->"+$("#text").text());
    });

    $("p").css({
        width:"100px",height:"100px",backgroundColor:"#ccffaa"
    });
});