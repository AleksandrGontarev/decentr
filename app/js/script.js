let buttonCards = document.querySelectorAll(".cards__btn");
let letsAchieveBtn = document.querySelectorAll(".lets-achieve__btn");
window.onresize = function () {
    if (window.innerWidth <= 768) {
        buttonCards.forEach((item) => (item.innerText = "Join us"));
        letsAchieveBtn.forEach((item) => (item.innerText = "Book your spot"));
    } else if (window.innerWidth > 768) {
        buttonCards.forEach((item) => (item.innerText = "Book a session"));
        letsAchieveBtn.forEach((item) => (item.innerText = "Join us at Cannes"));
    }
};

