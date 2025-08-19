// ---------------------mouse effect---------------------
function mouseFollowers() {
    const circle = document.querySelector('#smallCircle');

    window.addEventListener("mousemove", function (dets) {
        circle.style.left = dets.clientX + "px";
        circle.style.top = dets.clientY + "px";
    });
}
mouseFollowers();
window.addEventListener("mousemove", function (dets) {
    const circle = document.querySelector('#smallCircle');
    circle.style.left = dets.clientX + "px";
    circle.style.top = dets.clientY + "px";
});

// -------------blogs images hover effect--------------
document.querySelectorAll(".line").forEach(function (line) {
    const img = line.querySelector("img");

    line.addEventListener("mousemove", function (dets) {
        let diffY = dets.clientY - line.getBoundingClientRect().top;
        let diffX = dets.clientX - line.getBoundingClientRect().left;

        let rotation = gsap.utils.clamp(-20, 20, (diffX / line.offsetWidth - 0.5) * 40);

        gsap.to(img, {
            opacity: 1,
            ease: "power1.out",
            top: diffY,
            left: diffX,
            rotate: rotation,
            duration: 0.2
        });
    });

    line.addEventListener("mouseleave", function () {
        gsap.to(img, {
            opacity: 0,
            rotate: 0,
            duration: 0.3
        });
    });
});

//    -------------animation on home page content-------------------
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('#nav h3, #element, .side-content h4, .hero-footer a').forEach(el => {
        observer.observe(el);
    });
});