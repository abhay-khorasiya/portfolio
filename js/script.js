document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const premiumStyle = document.createElement("style");

    premiumStyle.textContent = `
        #premium-particle-canvas {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .premium-grid {
            position: fixed;
            inset: -100px;
            z-index: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    rgba(240, 208, 141, .025) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(240, 208, 141, .025) 1px,
                    transparent 1px
                );

            background-size: 75px 75px;

            transform:
                perspective(800px)
                rotateX(62deg)
                scale(1.5);

            transform-origin: center bottom;

            opacity: .2;

            animation:
                premiumGridMove 14s linear infinite;

            mask-image:
                linear-gradient(
                    to bottom,
                    transparent 0%,
                    rgba(0,0,0,.25) 20%,
                    #000 70%,
                    transparent 100%
                );
        }

        .premium-aurora {
            position: fixed;
            pointer-events: none;
            border-radius: 50%;
            filter: blur(85px);
            z-index: 0;
            opacity: .25;
        }

        .premium-aurora.one {
            width: 620px;
            height: 620px;
            left: -200px;
            top: -120px;

            background:
                radial-gradient(
                    circle,
                    rgba(216,181,111,.55),
                    rgba(160,116,54,.08) 48%,
                    transparent 72%
                );

            animation:
                auroraOne 15s ease-in-out infinite alternate;
        }

        .premium-aurora.two {
            width: 650px;
            height: 650px;
            right: -250px;
            top: 25%;

            background:
                radial-gradient(
                    circle,
                    rgba(240,208,141,.36),
                    rgba(145,101,42,.07) 48%,
                    transparent 72%
                );

            animation:
                auroraTwo 17s ease-in-out infinite alternate;
        }

        .premium-aurora.three {
            width: 580px;
            height: 580px;
            left: 28%;
            bottom: -300px;

            background:
                radial-gradient(
                    circle,
                    rgba(180,133,67,.34),
                    rgba(112,78,32,.05) 50%,
                    transparent 72%
                );

            animation:
                auroraThree 19s ease-in-out infinite alternate;
        }

        .premium-spotlight {
            position: fixed;

            width: 520px;
            height: 520px;

            left: 0;
            top: 0;

            transform:
                translate(-50%, -50%);

            border-radius: 50%;

            pointer-events: none;

            background:
                radial-gradient(
                    circle,
                    rgba(240,208,141,.09) 0%,
                    rgba(170,125,60,.04) 35%,
                    transparent 70%
                );

            filter: blur(12px);

            z-index: 1;

            opacity: 0;

            transition:
                opacity .35s ease;
        }

        header,
        section,
        footer {
            position: relative;
            z-index: 3;
        }

        .hero-image::after {
            content: "";

            position: absolute;
            inset: -28px;

            border-radius: 50%;

            background:
                conic-gradient(
                    from 0deg,
                    transparent,
                    rgba(240,208,141,.42),
                    transparent,
                    rgba(169,122,57,.32),
                    transparent
                );

            filter: blur(30px);

            opacity: .38;

            z-index: -1;

            animation:
                premiumRingRotate 10s linear infinite;
        }

        .skill-card,
        .project-card,
        .stat-card,
        .certificate-card,
        .education-card,
        .timeline-content,
        .contact-box,
        .info-box {
            --mouse-x: 50%;
            --mouse-y: 50%;
        }

        .skill-card::after,
        .project-card::after,
        .stat-card::after,
        .certificate-card::after,
        .education-card::after,
        .timeline-content::after,
        .contact-box::after,
        .info-box::after {

            content: "";

            position: absolute;
            inset: 0;

            pointer-events: none;

            border-radius: inherit;

            background:
                radial-gradient(
                    320px circle
                    at var(--mouse-x)
                    var(--mouse-y),

                    rgba(240,208,141,.12),
                    rgba(171,124,57,.04) 38%,
                    transparent 70%
                );

            opacity: 0;

            transition:
                opacity .35s ease;

            z-index: 0;
        }

        .skill-card:hover::after,
        .project-card:hover::after,
        .stat-card:hover::after,
        .certificate-card:hover::after,
        .education-card:hover::after,
        .timeline-content:hover::after,
        .contact-box:hover::after,
        .info-box:hover::after {
            opacity: 1;
        }

        .skill-card > *,
        .project-card > *,
        .stat-card > *,
        .certificate-card > *,
        .education-card > *,
        .timeline-content > *,
        .contact-box > *,
        .info-box > * {
            position: relative;
            z-index: 2;
        }

        @keyframes premiumGridMove {
            from {
                background-position:
                    0 0,
                    0 0;
            }

            to {
                background-position:
                    0 75px,
                    75px 0;
            }
        }

        @keyframes auroraOne {
            0% {
                transform:
                    translate3d(0,0,0)
                    scale(1);
            }

            50% {
                transform:
                    translate3d(220px,110px,0)
                    scale(1.18);
            }

            100% {
                transform:
                    translate3d(100px,260px,0)
                    scale(.92);
            }
        }

        @keyframes auroraTwo {
            0% {
                transform:
                    translate3d(0,0,0)
                    scale(1);
            }

            50% {
                transform:
                    translate3d(-180px,-90px,0)
                    scale(1.15);
            }

            100% {
                transform:
                    translate3d(-250px,120px,0)
                    scale(.95);
            }
        }

        @keyframes auroraThree {
            0% {
                transform:
                    translate3d(0,0,0)
                    scale(1);
            }

            50% {
                transform:
                    translate3d(160px,-180px,0)
                    scale(1.13);
            }

            100% {
                transform:
                    translate3d(-140px,-90px,0)
                    scale(.94);
            }
        }

        @keyframes premiumRingRotate {
            to {
                transform:
                    rotate(360deg);
            }
        }

        @media (max-width: 800px) {
            .premium-grid {
                opacity: .11;
            }

            .premium-aurora {
                opacity: .18;
            }

            .premium-spotlight {
                display: none;
            }
        }
    `;

    document.head.appendChild(premiumStyle);

    const grid = document.createElement("div");
    grid.className = "premium-grid";
    document.body.prepend(grid);

    ["one", "two", "three"].forEach((name) => {
        const aurora = document.createElement("div");
        aurora.className = `premium-aurora ${name}`;
        document.body.prepend(aurora);
    });

    const spotlight = document.createElement("div");
    spotlight.className = "premium-spotlight";
    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", (event) => {
        spotlight.style.left = `${event.clientX}px`;
        spotlight.style.top = `${event.clientY}px`;
        spotlight.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
        spotlight.style.opacity = "0";
    });

    const canvas = document.createElement("canvas");
    canvas.id = "premium-particle-canvas";
    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let particles = [];
    let shootingStars = [];

    const mouse = {
        x: null,
        y: null,
        radius: 165
    };

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;

            this.size =
                Math.random() * 1.7 + 0.6;

            this.speedX =
                (Math.random() - 0.5) * 0.3;

            this.speedY =
                (Math.random() - 0.5) * 0.3;

            this.alpha =
                Math.random() * 0.48 + 0.2;

            this.pulse =
                Math.random() *
                Math.PI *
                2;

            this.type =
                Math.random();
        }

        update() {
            this.pulse += 0.018;

            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < -20) {
                this.x = width + 20;
            }

            if (this.x > width + 20) {
                this.x = -20;
            }

            if (this.y < -20) {
                this.y = height + 20;
            }

            if (this.y > height + 20) {
                this.y = -20;
            }

            if (
                mouse.x !== null &&
                mouse.y !== null
            ) {
                const dx =
                    this.x - mouse.x;

                const dy =
                    this.y - mouse.y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );

                if (
                    distance <
                    mouse.radius
                ) {
                    const force =
                        (
                            mouse.radius -
                            distance
                        ) /
                        mouse.radius;

                    const angle =
                        Math.atan2(
                            dy,
                            dx
                        );

                    this.x +=
                        Math.cos(angle) *
                        force *
                        1.15;

                    this.y +=
                        Math.sin(angle) *
                        force *
                        1.15;
                }
            }
        }

        draw() {
            const pulseAlpha =
                this.alpha +
                Math.sin(this.pulse) *
                0.1;

            let color;

            if (this.type < 0.38) {
                color =
                    `rgba(255,248,230,${pulseAlpha})`;
            } else if (this.type < 0.75) {
                color =
                    `rgba(240,208,141,${pulseAlpha})`;
            } else {
                color =
                    `rgba(184,137,67,${pulseAlpha})`;
            }

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = color;

            ctx.shadowBlur = 10;
            ctx.shadowColor = color;

            ctx.fill();

            ctx.shadowBlur = 0;
        }
    }

    class ShootingStar {
        constructor() {
            this.x =
                Math.random() *
                width *
                0.65;

            this.y =
                Math.random() *
                height *
                0.42;

            this.length =
                Math.random() *
                120 +
                90;

            this.speed =
                Math.random() *
                6 +
                6;

            this.alpha = 1;
        }

        update() {
            this.x += this.speed;

            this.y +=
                this.speed *
                0.42;

            this.alpha -= 0.016;
        }

        draw() {
            const gradient =
                ctx.createLinearGradient(
                    this.x,
                    this.y,
                    this.x - this.length,
                    this.y -
                        this.length *
                        0.42
                );

            gradient.addColorStop(
                0,
                `rgba(255,248,225,${this.alpha})`
            );

            gradient.addColorStop(
                0.35,
                `rgba(240,208,141,${this.alpha * 0.7})`
            );

            gradient.addColorStop(
                1,
                "rgba(150,105,45,0)"
            );

            ctx.beginPath();

            ctx.moveTo(
                this.x,
                this.y
            );

            ctx.lineTo(
                this.x - this.length,
                this.y -
                    this.length *
                    0.42
            );

            ctx.strokeStyle = gradient;

            ctx.lineWidth = 1.7;

            ctx.shadowBlur = 14;

            ctx.shadowColor =
                "rgba(240,208,141,.55)";

            ctx.stroke();

            ctx.shadowBlur = 0;
        }
    }

    const resizeCanvas = () => {
        width = window.innerWidth;
        height = window.innerHeight;

        const dpr =
            Math.min(
                window.devicePixelRatio || 1,
                1.7
            );

        canvas.width =
            width * dpr;

        canvas.height =
            height * dpr;

        canvas.style.width =
            `${width}px`;

        canvas.style.height =
            `${height}px`;

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        particles = [];

        let count = 90;

        if (width < 1000) {
            count = 65;
        }

        if (width < 600) {
            count = 40;
        }

        for (
            let i = 0;
            i < count;
            i++
        ) {
            particles.push(
                new Particle()
            );
        }
    };

    const drawConnections = () => {
        for (
            let i = 0;
            i < particles.length;
            i++
        ) {
            for (
                let j = i + 1;
                j < particles.length;
                j++
            ) {
                const dx =
                    particles[i].x -
                    particles[j].x;

                const dy =
                    particles[i].y -
                    particles[j].y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );

                if (distance < 112) {
                    const opacity =
                        (
                            1 -
                            distance /
                            112
                        ) *
                        0.095;

                    ctx.beginPath();

                    ctx.moveTo(
                        particles[i].x,
                        particles[i].y
                    );

                    ctx.lineTo(
                        particles[j].x,
                        particles[j].y
                    );

                    ctx.strokeStyle =
                        `rgba(240,208,141,${opacity})`;

                    ctx.lineWidth = 0.65;

                    ctx.stroke();
                }
            }
        }
    };

    const drawMouseConnection = () => {
        if (
            mouse.x === null ||
            mouse.y === null
        ) {
            return;
        }

        particles.forEach((particle) => {
            const dx =
                particle.x -
                mouse.x;

            const dy =
                particle.y -
                mouse.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );

            if (distance < 145) {
                const opacity =
                    (
                        1 -
                        distance /
                        145
                    ) *
                    0.24;

                ctx.beginPath();

                ctx.moveTo(
                    mouse.x,
                    mouse.y
                );

                ctx.lineTo(
                    particle.x,
                    particle.y
                );

                ctx.strokeStyle =
                    `rgba(240,208,141,${opacity})`;

                ctx.lineWidth = 0.8;

                ctx.stroke();
            }
        });
    };

    let lastStar = Date.now();

    const animateBackground = () => {
        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        drawMouseConnection();

        const now = Date.now();

        if (
            now - lastStar >
            4500 +
                Math.random() *
                2800
        ) {
            shootingStars.push(
                new ShootingStar()
            );

            lastStar = now;
        }

        shootingStars.forEach((star) => {
            star.update();
            star.draw();
        });

        shootingStars =
            shootingStars.filter(
                (star) =>
                    star.alpha > 0
            );

        requestAnimationFrame(
            animateBackground
        );
    };

    resizeCanvas();
    animateBackground();

    window.addEventListener(
        "resize",
        resizeCanvas
    );

    window.addEventListener(
        "mousemove",
        (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        }
    );

    document.addEventListener(
        "mouseleave",
        () => {
            mouse.x = null;
            mouse.y = null;
        }
    );

    const glowCards =
        document.querySelectorAll(
            `
            .skill-card,
            .project-card,
            .stat-card,
            .certificate-card,
            .education-card,
            .timeline-content,
            .contact-box,
            .info-box
            `
        );

    glowCards.forEach((card) => {
        card.addEventListener(
            "mousemove",
            (event) => {
                const rect =
                    card.getBoundingClientRect();

                card.style.setProperty(
                    "--mouse-x",
                    `${event.clientX - rect.left}px`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${event.clientY - rect.top}px`
                );
            }
        );
    });

    const loader =
        document.getElementById(
            "loader"
        );

    const cursor =
        document.querySelector(
            ".cursor"
        );

    const cursorBlur =
        document.querySelector(
            ".cursor-blur"
        );

    const headerContainer =
        document.querySelector(
            "header .container"
        );

    const menuBtn =
        document.querySelector(
            ".menu-btn"
        );

    const nav =
        document.querySelector(
            "nav"
        );

    const heroImage =
        document.querySelector(
            ".hero-image"
        );

    const hideLoader = () => {
        if (!loader) {
            return;
        }

        gsap.to(
            loader,
            {
                opacity: 0,
                duration: 1,
                delay: 0.8,

                onComplete: () => {
                    loader.style.display =
                        "none";

                    if (
                        typeof ScrollTrigger !==
                        "undefined"
                    ) {
                        ScrollTrigger.refresh();
                    }
                }
            }
        );
    };

    if (
        document.readyState ===
        "complete"
    ) {
        hideLoader();
    } else {
        window.addEventListener(
            "load",
            hideLoader
        );
    }

    if (
        cursor &&
        cursorBlur
    ) {
        document.addEventListener(
            "mousemove",
            (event) => {
                cursor.style.left =
                    `${event.clientX}px`;

                cursor.style.top =
                    `${event.clientY}px`;

                cursorBlur.style.left =
                    `${event.clientX}px`;

                cursorBlur.style.top =
                    `${event.clientY}px`;
            }
        );

        document
            .querySelectorAll(
                `
                a,
                button,
                .project-card,
                .skill-card,
                .contact-box
                `
            )
            .forEach((element) => {
                element.addEventListener(
                    "mouseenter",
                    () => {
                        gsap.to(
                            cursor,
                            {
                                scale: 1.8,
                                duration: 0.2
                            }
                        );
                    }
                );

                element.addEventListener(
                    "mouseleave",
                    () => {
                        gsap.to(
                            cursor,
                            {
                                scale: 1,
                                duration: 0.2
                            }
                        );
                    }
                );
            });
    }

    let lenis = null;

    if (
        typeof Lenis !==
        "undefined"
    ) {
        lenis =
            new Lenis({
                duration: 1.1,
                smoothWheel: true,
                wheelMultiplier: 1
            });

        if (
            typeof ScrollTrigger !==
            "undefined"
        ) {
            lenis.on(
                "scroll",
                ScrollTrigger.update
            );
        }

        const lenisRaf = (time) => {
            lenis.raf(time);

            requestAnimationFrame(
                lenisRaf
            );
        };

        requestAnimationFrame(
            lenisRaf
        );
    }

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((link) => {
            link.addEventListener(
                "click",
                (event) => {
                    const href =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !href ||
                        href === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            href
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    if (lenis) {
                        lenis.scrollTo(
                            target,
                            {
                                offset: -100,
                                duration: 1.2
                            }
                        );
                    } else {
                        target.scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                }
            );
        });

    if (
        typeof Typed !==
        "undefined" &&
        document.querySelector(
            "#typing"
        )
    ) {
        new Typed(
            "#typing",
            {
                strings: [
                    "Full Stack Developer",
                    "Python Developer",
                    "AI Enthusiast",
                    "Frontend Developer",
                    "Backend Developer"
                ],

                typeSpeed: 65,
                backSpeed: 42,
                backDelay: 1500,
                loop: true
            }
        );
    }

    const updateHeader = () => {
        if (!headerContainer) {
            return;
        }

        if (window.scrollY > 50) {
            headerContainer.style.background =
                "rgba(10,8,5,.84)";

            headerContainer.style.backdropFilter =
                "blur(24px)";

            headerContainer.style.boxShadow =
                "0 16px 48px rgba(0,0,0,.36)";
        } else {
            headerContainer.style.background =
                "rgba(18,15,10,.76)";

            headerContainer.style.backdropFilter =
                "blur(20px)";
        }
    };

    window.addEventListener(
        "scroll",
        updateHeader
    );

    updateHeader();

    const heroTimeline =
        gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

    if (
        document.querySelector(
            ".hero-content .subtitle"
        )
    ) {
        heroTimeline.from(
            ".hero-content .subtitle",
            {
                y: 35,
                opacity: 0,
                duration: 0.65
            }
        );
    }

    if (
        document.querySelector(
            ".hero-content h1"
        )
    ) {
        heroTimeline.from(
            ".hero-content h1",
            {
                y: 60,
                opacity: 0,
                scale: 0.96,
                duration: 0.9
            },
            "-=.35"
        );
    }

    if (
        document.querySelector(
            ".hero-content h2"
        )
    ) {
        heroTimeline.from(
            ".hero-content h2",
            {
                y: 30,
                opacity: 0,
                duration: 0.7
            },
            "-=.4"
        );
    }

    if (
        document.querySelector(
            ".hero-content p"
        )
    ) {
        heroTimeline.from(
            ".hero-content p",
            {
                y: 30,
                opacity: 0,
                duration: 0.7
            },
            "-=.35"
        );
    }

    if (
        document.querySelector(
            ".hero-buttons"
        )
    ) {
        heroTimeline.from(
            ".hero-buttons",
            {
                y: 25,
                opacity: 0,
                duration: 0.6
            },
            "-=.3"
        );
    }

    if (
        document.querySelector(
            ".social-links"
        )
    ) {
        heroTimeline.from(
            ".social-links",
            {
                y: 20,
                opacity: 0,
                duration: 0.6
            },
            "-=.3"
        );
    }

    if (heroImage) {
        gsap.from(
            heroImage,
            {
                x: 100,
                opacity: 0,
                scale: 0.9,
                rotate: 3,
                duration: 1.25,
                delay: 0.3,
                ease: "power3.out",
                clearProps:
                    "transform"
            }
        );
    }

    if (
        typeof ScrollTrigger !==
        "undefined"
    ) {
        gsap.utils
            .toArray(
                ".section-title"
            )
            .forEach((title) => {
                gsap.from(
                    title,
                    {
                        scrollTrigger: {
                            trigger:
                                title,
                            start:
                                "top 88%",
                            once: true
                        },

                        y: 45,
                        opacity: 0,
                        scale: 0.97,
                        duration: 0.8,
                        ease:
                            "power2.out",

                        clearProps:
                            "transform,opacity"
                    }
                );
            });

        const animations = [
            [
                ".stat-card",
                ".stats",
                55,
                0.09
            ],
            [
                ".skill-card",
                ".skills-grid",
                55,
                0.055
            ],
            [
                ".project-card",
                ".projects-grid",
                75,
                0.12
            ],
            [
                ".certificate-card",
                ".certificates",
                55,
                0.1
            ]
        ];

        animations.forEach(
            ([
                selector,
                trigger,
                y,
                stagger
            ]) => {
                if (
                    document.querySelector(
                        selector
                    )
                ) {
                    gsap.from(
                        selector,
                        {
                            scrollTrigger: {
                                trigger:
                                    trigger,
                                start:
                                    "top 88%",
                                once: true
                            },

                            y: y,
                            scale: 0.95,
                            stagger:
                                stagger,

                            duration: 0.7,

                            ease:
                                "power3.out",

                            clearProps:
                                "transform"
                        }
                    );
                }
            }
        );

        if (
            document.querySelector(
                ".timeline-item"
            )
        ) {
            gsap.from(
                ".timeline-item",
                {
                    scrollTrigger: {
                        trigger:
                            ".timeline",
                        start:
                            "top 88%",
                        once: true
                    },

                    x: -65,
                    opacity: 0,
                    duration: 0.8,

                    clearProps:
                        "transform,opacity"
                }
            );
        }

        if (
            document.querySelector(
                ".education-card"
            )
        ) {
            gsap.from(
                ".education-card",
                {
                    scrollTrigger: {
                        trigger:
                            ".education",
                        start:
                            "top 85%",
                        once: true
                    },

                    y: 50,
                    opacity: 0,
                    scale: 0.96,
                    duration: 0.75,

                    clearProps:
                        "transform,opacity"
                }
            );
        }

        if (
            document.querySelector(
                ".contact-box"
            )
        ) {
            gsap.from(
                ".contact-box",
                {
                    scrollTrigger: {
                        trigger:
                            ".contact",
                        start:
                            "top 85%",
                        once: true
                    },

                    y: 55,
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.8,

                    clearProps:
                        "transform,opacity"
                }
            );
        }
    }

    document
        .querySelectorAll(
            ".project-card"
        )
        .forEach((card) => {
            card.addEventListener(
                "mousemove",
                (event) => {
                    if (
                        window.innerWidth <=
                        768
                    ) {
                        return;
                    }

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const rotateY =
                        (
                            x /
                            rect.width -
                            0.5
                        ) *
                        8;

                    const rotateX =
                        (
                            y /
                            rect.height -
                            0.5
                        ) *
                        -8;

                    card.style.transform =
                        `
                        perspective(1100px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-7px)
                        `;
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {
                    card.style.transform =
                        "";
                }
            );
        });

    const counters =
        document.querySelectorAll(
            ".stat-card h2"
        );

    counters.forEach((counter) => {
        const originalText =
            counter.textContent.trim();

        const target =
            parseInt(
                originalText.replace(
                    /\D/g,
                    ""
                ),
                10
            );

        if (
            Number.isNaN(
                target
            )
        ) {
            return;
        }

        let suffix = "";

        if (
            originalText.includes(
                "%"
            )
        ) {
            suffix = "%";
        } else if (
            originalText.includes(
                "+"
            )
        ) {
            suffix = "+";
        }

        const updateCounter = () => {
            let current = 0;

            const duration = 1000;
            const interval = 20;

            const increment =
                target /
                (
                    duration /
                    interval
                );

            const timer =
                setInterval(
                    () => {
                        current +=
                            increment;

                        if (
                            current >=
                            target
                        ) {
                            clearInterval(
                                timer
                            );

                            counter.textContent =
                                `${target}${suffix}`;

                            return;
                        }

                        counter.textContent =
                            `${Math.floor(
                                current
                            )}${suffix}`;
                    },
                    interval
                );
        };

        if (
            typeof ScrollTrigger !==
            "undefined"
        ) {
            ScrollTrigger.create({
                trigger: counter,
                start: "top 92%",
                once: true,
                onEnter:
                    updateCounter
            });
        } else {
            updateCounter();
        }
    });

    if (
        menuBtn &&
        nav
    ) {
        menuBtn.addEventListener(
            "click",
            () => {
                nav.classList.toggle(
                    "active"
                );

                menuBtn.classList.toggle(
                    "active"
                );
            }
        );

        nav.querySelectorAll(
            "a"
        ).forEach((link) => {
            link.addEventListener(
                "click",
                () => {
                    nav.classList.remove(
                        "active"
                    );

                    menuBtn.classList.remove(
                        "active"
                    );
                }
            );
        });
    }

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            "nav a"
        );

    const updateActiveNavigation = () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop =
                section.offsetTop -
                180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >=
                    sectionTop &&
                window.scrollY <
                    sectionTop +
                    sectionHeight
            ) {
                currentSection =
                    section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute(
                    "href"
                ) ===
                `#${currentSection}`
            ) {
                link.classList.add(
                    "active"
                );
            }
        });
    };

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();

    let progressBar =
        document.getElementById(
            "progress-bar"
        );

    if (!progressBar) {
        progressBar =
            document.createElement(
                "div"
            );

        progressBar.id =
            "progress-bar";

        document.body.appendChild(
            progressBar
        );
    }

    const updateProgressBar = () => {
        const scrollHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;

        if (
            scrollHeight <= 0
        ) {
            progressBar.style.width =
                "0%";

            return;
        }

        progressBar.style.width =
            `${Math.min(
                (
                    window.scrollY /
                    scrollHeight
                ) *
                100,
                100
            )}%`;
    };

    window.addEventListener(
        "scroll",
        updateProgressBar
    );

    updateProgressBar();

    document
        .querySelectorAll(
            `
            .btn,
            .btn-outline,
            .btn-small,
            .btn-small-outline
            `
        )
        .forEach((button) => {
            button.addEventListener(
                "mousemove",
                (event) => {
                    if (
                        window.innerWidth <=
                        768
                    ) {
                        return;
                    }

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left -
                        rect.width /
                        2;

                    const y =
                        event.clientY -
                        rect.top -
                        rect.height /
                        2;

                    gsap.to(
                        button,
                        {
                            x:
                                x *
                                0.12,

                            y:
                                y *
                                0.12,

                            duration:
                                0.25,

                            overwrite:
                                true
                        }
                    );
                }
            );

            button.addEventListener(
                "mouseleave",
                () => {
                    gsap.to(
                        button,
                        {
                            x: 0,
                            y: 0,
                            duration:
                                0.3,

                            overwrite:
                                true,

                            clearProps:
                                "transform"
                        }
                    );
                }
            );
        });

    if (heroImage) {
        document.addEventListener(
            "mousemove",
            (event) => {
                if (
                    window.innerWidth <=
                    900
                ) {
                    return;
                }

                const x =
                    (
                        window.innerWidth /
                            2 -
                        event.clientX
                    ) /
                    48;

                const y =
                    (
                        window.innerHeight /
                            2 -
                        event.clientY
                    ) /
                    48;

                gsap.to(
                    heroImage,
                    {
                        x: -x,
                        y: -y,
                        duration: 0.9,
                        ease:
                            "power2.out",
                        overwrite:
                            "auto"
                    }
                );
            }
        );
    }

    let resizeTimer;

    window.addEventListener(
        "resize",
        () => {
            clearTimeout(
                resizeTimer
            );

            resizeTimer =
                setTimeout(
                    () => {
                        if (
                            typeof ScrollTrigger !==
                            "undefined"
                        ) {
                            ScrollTrigger.refresh();
                        }
                    },
                    200
                );
        }
    );

    window.addEventListener(
        "load",
        () => {
            if (
                typeof ScrollTrigger !==
                "undefined"
            ) {
                setTimeout(
                    () => {
                        ScrollTrigger.refresh();
                    },
                    300
                );
            }
        }
    );

    console.log(
        "%cAbhay Khorasiya Portfolio",
        "font-size:18px;color:#d8b56f;font-weight:bold;"
    );
});