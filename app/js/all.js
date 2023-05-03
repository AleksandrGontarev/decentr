"use strict";

var buttonCards = document.querySelectorAll(".cards__btn");
var letsAchieveBtn = document.querySelectorAll(".lets-achieve__btn");
window.onresize = function () {
  if (window.innerWidth <= 768) {
    buttonCards.forEach(function (item) {
      return item.innerText = "Join us";
    });
    letsAchieveBtn.forEach(function (item) {
      return item.innerText = "Book your spot";
    });
  } else if (window.innerWidth > 768) {
    buttonCards.forEach(function (item) {
      return item.innerText = "Book a session";
    });
    letsAchieveBtn.forEach(function (item) {
      return item.innerText = "Join us at Cannes";
    });
  }
};