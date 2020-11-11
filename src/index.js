/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-console */

import sendForm from "./form-call/form.js";
import addClassBurger from "./burger-menu/burger.js";
import scrollTo from "./scroll-to/scroll.js";
import arrowToTop from "./arrow-to-top/arrowTop.js";
import doToDo from "./todo-list/todo.js";

sendForm();

addClassBurger();

scrollTo();

arrowToTop();

doToDo();

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipe: true,
    draggable: true,
    touchMove: true,
  });
});
