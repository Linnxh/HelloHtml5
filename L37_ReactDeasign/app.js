/**
 * Created by LXH on 16/8/5.
 */

var num = 0;
var txt;
var btn2;

var ta;
var btn;


window.onload = function () {
    txt = document.getElementById("p");
    btn2 = document.getElementById("btn2");

    if (sessionStorage.getItem("num")) {
        num = sessionStorage.getItem("num");
    } else {
        num = 0;
    }
    btn2.onclick = function () {
        num++;
        sessionStorage.setItem("num", num);
        showP();
    }


    ta = document.getElementById("ta");
    btn = document.getElementById("btn");

    if (localStorage.getItem("key1")) {
        ta.value = localStorage.getItem("key1");
    }

    btn.onclick = function () {
        // localStorage.hello = ta.value;
        localStorage.setItem("key1", ta.value);
    }
};

function showP() {
    txt.innerHTML = num;
}


