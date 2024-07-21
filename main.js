let goUp = document.querySelector(".back-to-top");

window.onscroll = function (e) {
    if (this.scrollY > 0) {
        goUp.classList.add("show");
    } else {
        goUp.classList.remove("show");
    }
};
