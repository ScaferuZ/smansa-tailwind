// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu")

// add event listener
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});