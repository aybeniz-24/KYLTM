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

    document.querySelectorAll(".submenu").forEach(menu=>{
      menu.classList.remove("active");
    });

    document.querySelectorAll(".dropdown i").forEach(i=>{
      i.classList.remove("fa-caret-up");
      i.classList.add("fa-caret-down");
    });

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











// counter
const counters = document.querySelectorAll(".counter");
function startCounter() {
    counters.forEach(counter => {
        counter.innerText = 0;

        const target = +counter.dataset.target;
        const speed = 200;
        const increment = target / speed;

        function updateCounter() {
            const value = +counter.innerText;

            if (value < target) {
                counter.innerText = Math.ceil(value + increment);
                setTimeout(updateCounter, 10);
            } else {
                if (target === 50) {
                    counter.innerText = target + "+";
                } else {
                    counter.innerText = target;
                }
            }
        }

        updateCounter();
    });
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector(".counterSection"));















// accordion
const accordionItems = document.querySelectorAll(".accordionItem");

accordionItems.forEach(item => {
    const btn = item.querySelector(".accordionBox");

    btn.addEventListener("click", () => {
        // Toggle cari item
        item.classList.toggle("active");

        // Əgər istəsən bütün digərləri bağla:
        accordionItems.forEach(otherItem => {
            if(otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });
    });
});












// projects slides
const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

function showSlide(i){

slides.forEach(slide => slide.classList.remove("active"));

slides[i].classList.add("active");

}

next.onclick = () => {

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

}

prev.onclick = () => {

index--;

if(index < 0){
index = slides.length - 1;
}

showSlide(index);

}











// partners slider 
const track = document.querySelector(".track");
const items = [...track.children];

items.forEach(item=>{
    const clone = item.cloneNode(true);
    track.appendChild(clone);
});
