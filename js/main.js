document.addEventListener("DOMContentLoaded", function () {  
    const btnDarkMode = document.querySelector(".dark-mode-btn"); 
    const img = document.getElementById("themeImage"); 

    const setDarkMode = () => {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        if (img) img.src = "../img/gitHub.svg";  
        localStorage.setItem('darkMode', 'dark');
    };

    const setLightMode = () => {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        if (img) img.src = "../img/gitHub-black.svg"; 
        localStorage.setItem('darkMode', 'light');
    };

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode();
    }

    if (localStorage.getItem('darkMode') === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        if (newColorScheme === 'dark') {
            setDarkMode();
        } else {
            setLightMode();
        }
    });

    btnDarkMode.onclick = function () {
        const isDark = document.body.classList.toggle("dark");
        if (isDark) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };
});