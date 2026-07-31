/* ==========================================
   PORTFOLIO MAIN JS
========================================== */

/* ==========================================
   GSAP LOADER
========================================== */

gsap.to(".first", {
    duration: 1.5,
    delay: 0.5,
    top: "-100%",
    ease: "expo.inOut"
});

gsap.to(".second", {
    duration: 1.5,
    delay: 0.7,
    top: "-100%",
    ease: "expo.inOut"
});

gsap.to(".third", {
    duration: 1.5,
    delay: 0.9,
    top: "-100%",
    ease: "expo.inOut"
});


/* ==========================================
   HERO ANIMATION
========================================== */

const tl = gsap.timeline({
    delay: 2
});

tl.from(".logo", {
    opacity: 0,
    y: -30,
    duration: 1
})

.from(".nav-links li", {
    opacity: 0,
    y: -25,
    stagger: 0.15,
    duration: 0.8
}, "-=0.6")

.from(".hero-left > *", {
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.9
}, "-=0.3")

.from(".hero-image", {
    opacity: 0,
    x: 60,
    duration: 1.2
}, "-=1");


/* ==========================================
   FLOATING IMAGE
========================================== */
const heroImage = document.querySelector(".hero-image");

heroImage.addEventListener("mouseenter", () => {

    gsap.to(heroImage,{
        rotation:0,
        scale:1.03,
        duration:0.5,
        ease:"power3.out"
    });

});

heroImage.addEventListener("mouseleave", () => {

    gsap.to(heroImage,{
        rotation:-6,
        scale:1,
        duration:0.5,
        ease:"power3.out"
    });

});

gsap.to(".hero-image-wrapper", {

    y:-12,

    duration:2.5,

    repeat:-1,

    yoyo:true,

    ease:"power1.inOut"

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("show");

    });

}


/* Close menu after clicking */

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("show");

    });

});


/* ==========================================
   HEADER SHADOW
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   CURSOR VARIABLES
========================================== */

document.addEventListener("mousemove",(e)=>{

    document.body.style.setProperty("--mouse-x",`${e.clientX}px`);

    document.body.style.setProperty("--mouse-y",`${e.clientY}px`);

});

/*==========================================
MILESTONE MODAL
==========================================*/

const milestoneCards = document.querySelectorAll(".timeline-content");

milestoneCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const modalId = card.dataset.modal;

        if(!modalId) return;

        document
            .getElementById(modalId)
            .classList.add("show");

    });

});

document.querySelectorAll(".close-modal").forEach(btn=>{

    btn.onclick=()=>{

        btn.closest(".milestone-modal")
        .classList.remove("show");

    }

});

document.querySelectorAll(".milestone-modal").forEach(modal=>{

    modal.onclick=(e)=>{

        if(e.target===modal){

            modal.classList.remove("show");

        }

    }

});