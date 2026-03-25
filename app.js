
const openBtn = document.getElementById("openLogin");
const closeBtn = document.getElementById("closeLogin");
const modal = document.getElementById("loginModal");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
