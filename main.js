
const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-nav");

btn.addEventListener("click", function() {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    
    btn.classList.remove("active");
    menu.classList.remove("active");
}))