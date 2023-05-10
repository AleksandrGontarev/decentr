"use strict";

// let buttonCards = document.querySelectorAll(".cards__btn");
// let letsAchieveBtn = document.querySelectorAll(".lets-achieve__btn");
// window.onresize = function () {
//     if (window.innerWidth <= 768) {
//         buttonCards.forEach((item) => (item.innerText = "Join us"));
//         letsAchieveBtn.forEach((item) => (item.innerText = "Book your spot"));
//     } else if (window.innerWidth > 768) {
//         buttonCards.forEach((item) => (item.innerText = "Book a session"));
//         letsAchieveBtn.forEach((item) => (item.innerText = "Join us at Cannes"));
//     }
// };
var butonModalBook = document.querySelectorAll('.cards__btn');
var modalBook = document.querySelector('.modal-book');
var body = document.querySelector('.body');
butonModalBook.forEach(function (item) {
  return item.addEventListener('click', showModalBook);
});
modalBook.addEventListener('click', showModalBook);
function showModalBook() {
  modalBook.classList.toggle('show');
  body.classList.toggle('fixed');
}