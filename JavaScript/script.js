const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "instant" : "smooth"
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();
