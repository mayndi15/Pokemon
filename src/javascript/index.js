const buttonAlterTheme = document.getElementById("bt-alter-theme");
const imageAlterTheme = document.querySelector(".img-alter-theme");
const body = document.querySelector("body");

buttonAlterTheme.addEventListener("click", () => {
    const darkThemeOn = body.classList.contains("dark-theme");

    body.classList.toggle("dark-theme");

    if(darkThemeOn){
        imageAlterTheme.setAttribute("src", "./src/images/sun.png");
    } else {
        imageAlterTheme.setAttribute("src", "./src/images/moon.png");
    }
});
