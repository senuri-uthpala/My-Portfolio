// Home section, About, Contact wage direct child elements walata .reveal class eka auto add karanna
const revealTargets = document.querySelectorAll(
    "#home .details, #home .img-container, .box, .experience-box, .skill-box, .info-box, .contact-info, form, .carousel, .project-info"
);

revealTargets.forEach((el, i) => {
    el.classList.add("reveal");
    el.classList.add(`reveal-delay-${(i % 6) + 1}`);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealTargets.forEach((el) => observer.observe(el));

// Tab wenas kalama, ara tab eke content ekatath animation eka trigger karanna
const contentObserverTargets = () => {
    document.querySelectorAll(".content.active .reveal:not(.show)").forEach((el) => {
        observer.observe(el);
    });
};

document.querySelectorAll(".navlink, .tab").forEach((link) => {
    link.addEventListener("click", () => {
        setTimeout(contentObserverTargets, 50);
    });
});