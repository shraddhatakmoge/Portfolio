/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')


/*----- ANIMATE -----*/

/* OVERLAY */
gsap.to(".first", {
    duration: 1.5,
    delay: .5,
    top: "-100%",
    ease: "expo.inOut"
});

gsap.to(".second", {
    duration: 1.5,
    delay: .7,
    top: "-100%",
    ease: "expo.inOut"
});

gsap.to(".third", {
    duration: 1.5,
    delay: .9,
    top: "-100%",
    ease: "expo.inOut"
});


/* MASTER TIMELINE (Cleaner sequencing) */
const tl = gsap.timeline({ delay: 2 });


/* IMAGE ENTRANCE */
tl.from('.home__img', {
    opacity: 0,
    x: 60,
    duration: 1.8,
    ease: "power3.out"
});


/* FLOATING IMAGE EFFECT (matches new CSS style) */
gsap.to('.home__img', {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 4
});


/* INFORMATION BLOCK */
tl.from('.home__information', {
    opacity: 0,
    y: 25,
    duration: 1.5,
    ease: "power3.out"
}, "-=1.2");


/* TEXT STAGGER */
tl.from('.anime-text', {
    opacity: 0,
    y: 25,
    duration: 1.2,
    stagger: .3,
    ease: "expo.out"
}, "-=1.2");


/* NAV LOGO */
tl.from('.nav__logo', {
    opacity: 0,
    y: 25,
    duration: 1.2,
    ease: "expo.out"
}, "-=1.5");


/* NAV ITEMS */
tl.from('.nav__item', {
    opacity: 0,
    y: 25,
    duration: 1,
    stagger: .2,
    ease: "expo.out"
}, "-=1.2");


/* SOCIAL ICONS */
tl.from('.home__social-icon', {
    opacity: 0,
    y: 25,
    duration: 1,
    stagger: .2,
    ease: "expo.out"
}, "-=1");

/* SKILLS ANIMATION ON SCROLL */
const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".skills__progress");

const showSkills = () => {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if(sectionTop < triggerPoint){
        skillBars.forEach(bar => {
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
        });
        window.removeEventListener("scroll", showSkills);
    }
}

window.addEventListener("scroll", showSkills);

