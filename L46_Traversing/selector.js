/**
 * Created by LXH on 16/9/5.
 * children  孩子类的属性 可选参数
 * find      任意元素即可 必选参数
 */


$(document).ready(function () {
    /***
     * -------同级之间的关系-----------
     *  siblings  同级元素全部修改,除自身外
     *  next
     *  nextAll
     *  nextUntil
     *  prev
     *  preAll
     *  preUntil
     *  -------向下遍历------------
     *  children  孩子类的属性 可选参数
     *  find      任意元素即可 必选参数
     *  -------向上遍历-------------
     *  parent    遍历一层
     *  parents   遍历多层
     *  parentsUntil  遍历区间
     *
     *  -------过滤-------
     *  first
     *  last
     *  eq
     *  filter  满足filter里面条件的
     *  not     不满足not条件里面的
     * */

    // $("div p").first().css("background-color","red");
    // $("div p").eq().css("background-color","red");//eq  id的数值,从0开始
    $("div h1").filter("h1").css("background-color","red");
    $("div h1").not("h1").css("background-color","red");


    // $("h3").next().css({border:"3px solid #ccffaa" });

    // $("h4").siblings().css({border: "3px solid #ff0000"})
    // $("#div2").parent("#div1").css({border:"3px solid #ccffaa" })
    // $("a").parents().css({border:"3px solid #ccffaa" })

    // $("#div1").children("#div2").css({border:"3px solid #ccffaa" })
    // $("#div1").children().css({border:"3px solid #ccffaa" })
    // $("#div1").find("#div2").css({border:"3px solid #ccffaa" })
});