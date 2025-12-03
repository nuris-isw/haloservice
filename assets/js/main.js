// Active link highlighting saat scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu li a");

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
