window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

function checkVisibility() {
    const elements = document.querySelectorAll('.content');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}
