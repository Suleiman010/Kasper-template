let goUp = document.querySelector(".back-to-top");

window.onscroll = function (e) {
    if (this.scrollY > 0) {
        goUp.classList.add("show");
    } else {
        goUp.classList.remove("show");
    }
};

function changeColor(event) {
    const listItems = document.querySelectorAll(".bullets li");
    listItems.forEach((item) => {
        item.classList.remove("active");
    });
    event.target.classList.add("active");
}

document.querySelectorAll(".bullets li").forEach((item) => {
    item.addEventListener("click", changeColor);
});

function rightArrow(event) {
    const rightArr = document.querySelector(".landing i");
    console.log("working");
}
