// nav bar

const openMenu = document.getElementById("openMenu")
const closeMenu = document.getElementById("closeMenu")
const mobileMenu = document.getElementById("mobileMenu")
openMenu.onclick = () => {
    mobileMenu.classList.add("active")
    document.body.classList.add("no-scroll")
}
closeMenu.onclick = () => {
    mobileMenu.classList.remove("active")
    document.body.classList.remove("no-scroll")
}
const dropdownItems = document.querySelectorAll(".menu > li"); dropdownItems.forEach(item => { const subMenu = item.querySelector("ul"); if (subMenu) { item.addEventListener("click", function (e) { e.stopPropagation(); this.classList.toggle("active"); }); } });








// langDropdown
const langDropdown = document.querySelector(".langDropdown")
const currentLang = document.querySelector(".currentLang")
const langItems = document.querySelectorAll(".langList div")

currentLang.addEventListener("click", () => {
    langDropdown.classList.toggle("active")
})

langItems.forEach(item => {
    item.addEventListener("click", () => {
        currentLang.textContent = item.textContent
        langDropdown.classList.remove("active")
    })
})






const languageDropdown = document.querySelector(".languageDropdown");

languageDropdown.addEventListener("click", () => {
    languageDropdown.classList.toggle("active");
});

document.addEventListener("click", (e) => {

    if (!languageDropdown.contains(e.target)) {
        languageDropdown.classList.remove("active");
    }

});




const searchIcon = document.querySelector(".search");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Header elements
const logoClose = document.querySelector(".logoClose");
const menuHR = document.querySelector(".menuHR");
const menuDiv = document.querySelector(".menu");

// Aç
searchIcon.addEventListener("click", () => {
    searchOverlay.style.display = "flex";
    logoClose.style.display = "none";
    menuHR.style.display = "none";
    menuDiv.style.display = "none";
    searchInput.focus();
});

// Bağla
closeSearch.addEventListener("click", () => {
    searchOverlay.style.display = "none";
    logoClose.style.display = "block";
    menuHR.style.display = "block";
    menuDiv.style.display = "block";
    searchInput.value = "";
    searchResults.innerHTML = "";
});

// Saytdakı bütün searchable elementlər
const searchableElements = Array.from(document.querySelectorAll("h1, h2, h3, p, li, div"))
    .filter(el => el.textContent.trim() !== "");

// Input event
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (value) {
        const filtered = searchableElements.filter(el =>
            el.textContent.toLowerCase().includes(value)
        );

        filtered.forEach(el => {
            const div = document.createElement("div");
            div.classList.add("resultItem");
            div.textContent = el.textContent;

            // klik → scroll
            div.addEventListener("click", () => {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                closeSearch.click();
            });

            searchResults.appendChild(div);
        });

        if (filtered.length === 0) {
            searchResults.innerHTML = "<div>Heç bir nəticə tapılmadı</div>";
        }
    }
});






const searchIcons = document.querySelectorAll(".searchButton");

searchIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        searchOverlay.style.display = "flex";
        logoClose.style.display = "none";
        menuHR.style.display = "none";
        menuDiv.style.display = "none";
        searchInput.focus();
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
            if (otherItem !== item) {
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

function showSlide(i) {

    slides.forEach(slide => slide.classList.remove("active"));

    slides[i].classList.add("active");

}

next.onclick = () => {

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    showSlide(index);

}

prev.onclick = () => {

    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    showSlide(index);

}











// partners slider 
const track = document.querySelector('.track');
const items = track.children;
let speed = 1;

function animateSlider() {
    track.style.transform = `translateX(${-speed}px)`;
    speed += 1;


    if (speed >= items[0].offsetWidth + 30) {
        track.appendChild(items[0]);
        speed = 0;
    }

    requestAnimationFrame(animateSlider);
}

animateSlider();