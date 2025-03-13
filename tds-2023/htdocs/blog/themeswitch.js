const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
    themeToggle.innerHTML = "<span class='large-icon'>light_mode</span>";
} else {
    themeToggle.innerHTML = "<span class='large-icon'>dark_mode</span>";
}

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "<span class='large-icon'>dark_mode</span>";
    } else {
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "<span class='large-icon'>light_mode</span>";
    }
});
