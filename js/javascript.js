// slider
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




// dil secimi
const lang = document.querySelector(".langDropdown");
lang.addEventListener("click", () => {
    lang.classList.toggle("active");
});




// submenu
let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(item => {
  item.addEventListener("click", function(e){
    e.preventDefault();


    let submenu = this.querySelector(".submenu");
    let icon = this.querySelector("i");
    let isOpen = submenu.classList.contains("active");

    // bütün submenuları bağla
    document.querySelectorAll(".submenu").forEach(menu=>{
      menu.classList.remove("active");
    });

    // bütün ikonları reset et
    document.querySelectorAll(".dropdown i").forEach(i=>{
      i.classList.remove("fa-caret-up");
      i.classList.add("fa-caret-down");
    });

    // əgər klik olunan əvvəl açıq deyildisə aç
    if(!isOpen){
      submenu.classList.add("active");
      icon.classList.remove("fa-caret-down");
      icon.classList.add("fa-caret-up");
    }

  });
});


// copyright
let year = new Date().getFullYear();
document.getElementById("year").textContent = year;