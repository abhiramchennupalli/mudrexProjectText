
const openBtn = document.getElementById("openLogin");
const closeBtn = document.getElementById("closeLogin");
const modal = document.getElementById("loginModal");
const loginAnchor = document.getElementById("loginAnchor");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.classList.add("blur-background");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("blur-background");
});

loginAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
    document.body.classList.add("blur-background");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        document.body.classList.remove("blur-background");
    }
});
