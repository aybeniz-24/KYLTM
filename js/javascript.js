var swiper = new Swiper(".headerSwiper", {
    loop: true,

    autoplay: {
        delay: 10000,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const lang = document.querySelector(".langDropdown");

lang.addEventListener("click", () => {
    lang.classList.toggle("active");
});