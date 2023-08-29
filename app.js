//Código referente a rolagem suave para cada link do portfólio


const menulinks = document.querySelectorAll('.navbar a[href^="#"]');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(getDistanceFromTheTop) {
    window.scroll({
        top: getDistanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 105;
    nativeScroll(distanceFromTheTop);
}

menulinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});