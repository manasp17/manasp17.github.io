// theme-toggle.js

// Apply saved theme immediately
(function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
})();

// Initialize the toggle logic AFTER header is loaded
function initThemeToggle() {
    const toggleButton = document.getElementById("themeToggle");
    if (!toggleButton) return;

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
    });
}
