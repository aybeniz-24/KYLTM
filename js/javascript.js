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












function changePage(index){
    const pages = document.querySelectorAll(".pageGroup");
    const buttons = document.querySelectorAll(".pageBtn");

    pages.forEach((p,i)=>{
        p.classList.toggle("activePage", i === index);
    });

    buttons.forEach((b,i)=>{
        b.classList.toggle("activeBtn", i === index);
    });
}





function openDetail(card){
    const img = card.querySelector("img").src;
    const text = card.querySelector("p").innerText;

    document.getElementById("detailImg").src = img;
    document.getElementById("detailText").innerText = text;

    document.getElementById("mainContent").classList.add("hideMain");
    document.getElementById("newsDetail").classList.add("showDetail");
}

function goBack(){
    document.getElementById("mainContent").classList.remove("hideMain");
    document.getElementById("newsDetail").classList.remove("showDetail");
}













document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        // Aktiv sinfi dəyişdiririk
        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            // Açılırsa, hündürlüyü məzmuna görə təyin edirik
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            button.querySelector('.icon').innerText = "-"; 
        } else {
            // Bağlanırsa, hündürlüyü sıfırlayırıq
            accordionContent.style.maxHeight = 0;
            button.querySelector('.icon').innerText = "+";
        }

        // İSTƏYƏ BAĞLI: Biri açılanda digərinin bağlanmasını istəyirsinizsə:
        
       
        
    });
});













document.addEventListener("DOMContentLoaded", function () {
    // 1. Unikal Şəkil Məlumatları (Bütün şəkillərini bu massivə yerləşdirə bilərsən)
    // Hər səhifədə 3 şəkil olacağını nəzərə alsaq, nümunə üçün bir neçə şəkil obyekti:
    const customGalData = [
        { src: 'sekil_1.jpg', alt: 'Manzara 1' },
        { src: 'sekil_2.jpg', alt: 'Ofis dizaynı' },
        { src: 'sekil_3.jpg', alt: 'Dağlar' },
        
        { src: 'sekil_4.jpg', alt: 'Növbəti Səhifə Şəkli 1' },
        { src: 'sekil_5.jpg', alt: 'Növbəti Səhifə Şəkli 2' },
        { src: 'sekil_6.jpg', alt: 'Növbəti Səhifə Şəkli 3' },
        
        { src: 'sekil_7.jpg', alt: 'Üçüncü Səhifə Şəkli 1' },
        { src: 'sekil_8.jpg', alt: 'Üçüncü Səhifə Şəkli 2' },
        { src: 'sekil_9.jpg', alt: 'Üçüncü Səhifə Şəkli 3' }
        // İstədiyin qədər şəkil əlavə edə bilərsən...
    ];

    const itemsPerPageGal = 3; // Şəkildə göründüyü kimi hər sətirdə/səhifədə 3 şəkil
    let activeGalPage = 1;
    
    // Ümumi səhifə sayını dinamik hesabla (Məsələn: 24 şəkil varsa, 24 / 3 = 8 səhifə edəcək)
    const totalGalPages = Math.ceil(customGalData.length / itemsPerPageGal) || 1; 

    // DOM Elementləri
    const gridContainer = document.getElementById("mediaGalGrid");
    const pagesContainer = document.getElementById("mediaGalPagesContainer");
    const prevBtn = document.getElementById("mediaGalPrev");
    const nextBtn = document.getElementById("mediaGalNext");

    // 2. Şəkilləri Ekrana Çıxaran Əsas Çevirmə Funksiyası
    function switchGalPage(pageIdx) {
        // İndeksi təhlükəsiz hüdudlarda saxla
        if (pageIdx < 1) pageIdx = 1;
        if (pageIdx > totalGalPages) pageIdx = totalGalPages;
        
        activeGalPage = pageIdx;
        gridContainer.innerHTML = ""; // Mövcud şəkilləri təmizlə

        // Cari səhifəyə uyğun şəkillərin aralığını hesabla
        const startIdx = (activeGalPage - 1) * itemsPerPageGal;
        const endIdx = startIdx + itemsPerPageGal;
        const slicedImages = customGalData.slice(startIdx, endIdx);

        // Şəkilləri Grid daxilinə render et
        slicedImages.forEach(imgInfo => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("media-gal-item");

            const imgEl = document.createElement("img");
            imgEl.src = imgInfo.src;
            imgEl.alt = imgInfo.alt;

            itemDiv.appendChild(imgEl);
            gridContainer.appendChild(itemDiv);
        });

        // Hər çevrilmədə pagination düymələrini yenidən qur
        buildPaginationUI();
    }

    // 3. Düymələrin Dünyasını (UI) Yaradan Funksiya
    function buildPaginationUI() {
        pagesContainer.innerHTML = "";

        // Həmişə ilk səhifəni göstər
        createSinglePageBtn(1);

        if (activeGalPage > 3) {
            createEllipsis();
        }

        // Cari səhifənin ətrafındakı düymələr
        let startRange = Math.max(2, activeGalPage - 1);
        let endRange = Math.min(totalGalPages - 1, activeGalPage + 1);

        for (let i = startRange; i <= endRange; i++) {
            createSinglePageBtn(i);
        }

        if (activeGalPage < totalGalPages - 2) {
            createEllipsis();
        }

        // Həmişə son səhifəni göstər
        if (totalGalPages > 1) {
            createSinglePageBtn(totalGalPages);
        }

        // Ox düymələrinin (Geri/İrəli) aktivlik vəziyyəti
        prevBtn.disabled = activeGalPage === 1;
        nextBtn.disabled = activeGalPage === totalGalPages;
    }

    // Tək bir səhifə düyməsi yaradan köməkçi funksiya
    function createSinglePageBtn(pageNo) {
        const btn = document.createElement("button");
        btn.classList.add("media-gal-btn");
        btn.textContent = pageNo;
        
        if (pageNo === activeGalPage) {
            btn.classList.add("gal-active"); // Aktiv olan düymə yaşıl rəng olacaq
        }

        btn.addEventListener("click", () => {
            switchGalPage(pageNo); // Düyməyə kliklədikdə səhifəni dəyiş
        });

        pagesContainer.appendChild(btn);
    }

    // Üç nöqtə (...) vizualı yaradan köməkçi funksiya
    function createEllipsis() {
        const dots = document.createElement("span");
        dots.classList.add("media-gal-dots");
        dots.textContent = "...";
        pagesContainer.appendChild(dots);
    }

    // 4. Ox Düymələrinin İdarə Edilməsi (Geri və İrəli klikləri)
    prevBtn.addEventListener("click", () => {
        if (activeGalPage > 1) {
            switchGalPage(activeGalPage - 1);
        }
    });

    nextBtn.addEventListener("click", () => {
        if (activeGalPage < totalGalPages) {
            switchGalPage(activeGalPage + 1);
        }
    });

    // İlk açılışda 1-ci səhifəni yüklə
    switchGalPage(1);
});