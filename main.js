
const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-nav");

btn.addEventListener("click", function() {
    btn.classList.toggle("is-active");
    menu.classList.toggle("is-active");
});

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    
    btn.classList.remove("is-active");
    menu.classList.remove("is-active");
}))