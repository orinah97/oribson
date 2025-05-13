// Toggle Light/Dark Mode functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
});
