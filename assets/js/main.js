// Active link highlighting saat scroll
const sections = document.querySelectorAll("section");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu li a");

// 1. Fungsionalitas Toggle Menu
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

// 2. Fungsionalitas Tutup Menu saat Link Diklik (untuk mobile)
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Cek apakah menu sedang terbuka di mobile
        if (navMenu.classList.contains("open")) {
            navMenu.classList.remove("open");
        }
    });
});

// 3. Scroll Highlight
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            current = id;
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});
