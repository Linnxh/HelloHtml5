/**
 * Created by LXH on 16/9/19.
 */

$(document).ready(function () {

    $("#abtn").button();

    $("#divid").draggable();
    // $("#div2").droppable({
    //     accept:".sepcical"

    // $("#div2").droppable();
    //
    // //两种写法,绑定drop事件
    // $("#div2").on("drop", function (event, ui) {
    //     alert(event);
    // });

    $("#div2").droppable({
        // drop:function (event,ui) {  //放入其中
        // over:function (event,ui) {//将要放入其中
        // out:function (event,ui) {
        // deactivate: function (event, ui) {//Triggered when an accepted draggable stops dragging.
        // create: function (event, ui) {//Triggered when the droppable is created.
        // activate: function (event, ui) {//Triggered when an accepted draggable starts dragging
        //     alert(ui);
        // }
    });

    $("#selectable").selectable({
        // appendTo: "#divid"
        autoRefresh: true,
        // selecting: #dddddaa,
    })
    ;


});

