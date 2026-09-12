/*==========================================
PORTFOLIO SCRIPT
Author : Abhay Portfolio
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
    LOADER
    ==========================================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        gsap.to(loader,{

            opacity:0,

            duration:1,

            delay:1

        });

        setTimeout(()=>{

            loader.style.display="none";

        },2000);

    });

    /*==========================================
    CUSTOM CURSOR
    ==========================================*/

    const cursor=document.querySelector(".cursor");

    const blur=document.querySelector(".cursor-blur");

    document.addEventListener("mousemove",(e)=>{

        cursor.style.left=e.clientX+"px";

        cursor.style.top=e.clientY+"px";

        blur.style.left=e.clientX+"px";

        blur.style.top=e.clientY+"px";

    });

    document.querySelectorAll("a,button,.project-card,.skill-card").forEach(el=>{

        el.addEventListener("mouseenter",()=>{

            gsap.to(cursor,{
                scale:2,
                duration:.25
            });

        });

        el.addEventListener("mouseleave",()=>{

            gsap.to(cursor,{
                scale:1,
                duration:.25
            });

        });

    });

    /*==========================================
    LENIS SMOOTH SCROLL
    ==========================================*/

    const lenis = new Lenis({

        duration:1.2,

        smoothWheel:true,

        wheelMultiplier:1

    });

    function raf(time){

        lenis.raf(time);

        requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

    /*==========================================
    TYPING EFFECT
    ==========================================*/

    new Typed("#typing",{

        strings:[

            "Full Stack Developer",

            "Python Developer",

            "AI Enthusiast",

            "Frontend Developer",

            "Backend Developer"

        ],

        typeSpeed:70,

        backSpeed:45,

        backDelay:1500,

        loop:true

    });

    /*==========================================
    HEADER SCROLL
    ==========================================*/

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>50){

            header.style.background="rgba(5,8,22,.75)";

            header.style.backdropFilter="blur(20px)";

        }

        else{

            header.style.background="transparent";

        }

    });

    /*==========================================
    GSAP HERO
    ==========================================*/

    gsap.from(".hero-content .subtitle",{

        y:40,

        opacity:0,

        duration:1

    });

    gsap.from(".hero-content h1",{

        y:70,

        opacity:0,

        duration:1,

        delay:.2

    });

    gsap.from(".hero-content h2",{

        y:60,

        opacity:0,

        duration:1,

        delay:.4

    });

    gsap.from(".hero-content p",{

        y:50,

        opacity:0,

        duration:1,

        delay:.6

    });

    gsap.from(".hero-buttons",{

        y:40,

        opacity:0,

        duration:1,

        delay:.8

    });

    gsap.from(".hero-image",{

        x:120,

        opacity:0,

        duration:1.4,

        delay:.5

    });

});
/*==========================================
SCROLL REVEAL ANIMATIONS
==========================================*/

gsap.registerPlugin(ScrollTrigger);

/* Section Titles */

gsap.utils.toArray(".section-title").forEach((title) => {

    gsap.from(title, {

        scrollTrigger: {
            trigger: title,
            start: "top 80%"
        },

        y: 60,
        opacity: 0,
        duration: 1

    });

});

/* About */

gsap.from(".about-image", {

    scrollTrigger: {

        trigger: ".about",

        start: "top 75%"

    },

    x: -120,

    opacity: 0,

    duration: 1.2

});

gsap.from(".about-content", {

    scrollTrigger: {

        trigger: ".about",

        start: "top 75%"

    },

    x: 120,

    opacity: 0,

    duration: 1.2

});

/* Stats */

gsap.from(".stat-card",{

    scrollTrigger:{

        trigger:".stats",

        start:"top 80%"

    },

    y:80,

    opacity:0,

    stagger:.15,

    duration:.8

});

/* Skills */

gsap.from(".skill-card",{

    scrollTrigger:{

        trigger:".skills",

        start:"top 80%"

    },

    y:70,

    opacity:0,

    stagger:.1,

    duration:.8

});

/* Projects */

gsap.from(".project-card",{

    scrollTrigger:{

        trigger:".projects",

        start:"top 80%"

    },

    y:100,

    opacity:0,

    stagger:.2,

    duration:1

});

/* Timeline */

gsap.from(".timeline-item",{

    scrollTrigger:{

        trigger:".timeline",

        start:"top 80%"

    },

    x:-120,

    opacity:0,

    stagger:.3,

    duration:1

});

/* Education */

gsap.from(".education-card",{

    scrollTrigger:{

        trigger:".education",

        start:"top 80%"

    },

    scale:.8,

    opacity:0,

    duration:1

});

/* Certificates */

gsap.from(".certificate-card",{

    scrollTrigger:{

        trigger:".certificates",

        start:"top 80%"

    },

    y:80,

    opacity:0,

    stagger:.2,

    duration:1

});

/* Contact */

gsap.from(".contact-box",{

    scrollTrigger:{

        trigger:".contact",

        start:"top 80%"

    },

    x:-80,

    opacity:0,

    stagger:.2,

    duration:1

});

gsap.from(".contact-form",{

    scrollTrigger:{

        trigger:".contact",

        start:"top 80%"

    },

    x:80,

    opacity:0,

    duration:1

});

/*==========================================
3D PROJECT CARD EFFECT
==========================================*/

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*18;

        const rotateX=((y/rect.height)-0.5)*-18;

        card.style.transform=`
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/*==========================================
NUMBER COUNTER
==========================================*/

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

    const target=parseInt(counter.innerText);

    let count=0;

    const speed=25;

    const update=()=>{

        if(count<target){

            count++;

            counter.innerText=count+"+";

            setTimeout(update,speed);

        }
        else{

            counter.innerText=target+"+";

        }

    };

    ScrollTrigger.create({

        trigger:counter,

        start:"top 90%",

        once:true,

        onEnter:update

    });

});
/*==========================================
MOBILE MENU
==========================================*/

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

/*==========================================
ACTIVE NAVIGATION
==========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-180;

        const height=section.offsetHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*==========================================
SCROLL PROGRESS BAR
==========================================*/

const progress=document.createElement("div");

progress.id="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=document.documentElement.scrollHeight-window.innerHeight;

    const percent=(window.scrollY/total)*100;

    progress.style.width=percent+"%";

});

/*==========================================
MAGNETIC BUTTON EFFECT
==========================================*/

document.querySelectorAll(".btn,.btn-outline,.btn-small").forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

        const rect=btn.getBoundingClientRect();

        const x=e.clientX-rect.left-(rect.width/2);

        const y=e.clientY-rect.top-(rect.height/2);

        gsap.to(btn,{

            x:x*0.18,

            y:y*0.18,

            duration:.3

        });

    });

    btn.addEventListener("mouseleave",()=>{

        gsap.to(btn,{

            x:0,

            y:0,

            duration:.3

        });

    });

});

/*==========================================
PARALLAX HERO IMAGE
==========================================*/

const heroImage=document.querySelector(".hero-image");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/35;

    const y=(window.innerHeight/2-e.clientY)/35;

    gsap.to(heroImage,{

        x:-x,

        y:-y,

        duration:1

    });

});

/*==========================================
PROJECT IMAGE PARALLAX
==========================================*/

document.querySelectorAll(".project-image img").forEach(img=>{

    img.addEventListener("mousemove",(e)=>{

        gsap.to(img,{

            scale:1.15,

            duration:.4

        });

    });

    img.addEventListener("mouseleave",()=>{

        gsap.to(img,{

            scale:1,

            duration:.4

        });

    });

});

/*==========================================
SMOOTH FADE OF SECTIONS
==========================================*/

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{

        scrollTrigger:{

            trigger:section,

            start:"top 90%"

        },

        opacity:0,

        duration:.8

    });

});

/*==========================================
TEXT SPLIT ANIMATION
==========================================*/

document.querySelectorAll("h2").forEach(title=>{

    title.addEventListener("mouseenter",()=>{

        gsap.to(title,{

            scale:1.03,

            color:"#7c3aed",

            duration:.25

        });

    });

    title.addEventListener("mouseleave",()=>{

        gsap.to(title,{

            scale:1,

            color:"#ffffff",

            duration:.25

        });

    });

});

/*==========================================
CURSOR GROW
==========================================*/

document.querySelectorAll("a,button").forEach(el=>{

    el.addEventListener("mouseenter",()=>{

        gsap.to(".cursor",{

            width:28,

            height:28,

            duration:.2

        });

    });

    el.addEventListener("mouseleave",()=>{

        gsap.to(".cursor",{

            width:16,

            height:16,

            duration:.2

        });

    });

});

/*==========================================
CONSOLE MESSAGE
==========================================*/

console.log("%cPortfolio Developed by Abhay Khorasiya","font-size:18px;color:#7c3aed;font-weight:bold;");