// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
//     smoothMobile: true
// });


function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smoothMobile: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

    return locoScroll;
}
const locoScroll = locomotiveAnimation();

function navbarAnimation() {
    gsap.to("#navPart1 svg", {
        transform: "translateY(-100%)",
        marginTop: "-9px",
        scrollTrigger: {
            trigger: "#navPart1 svg",
            scroller: "#main",
            // markers: true,
            start: "50px top",
            end: "55px 60px",
            scrub: 0.5
        }
    })

    gsap.to("#navPart2 #links", {
        transform: "translateY(-100%) !important",
        opacity: 0,
        scrollTrigger: {
            trigger: "#navPart1 #links",
            scroller: "#main",
            start: "50px top",
            end: "55px 60px",
            scrub: 1
        }

    })
}

navbarAnimation()




const videoContainer = document.querySelector("#video-container");
const play = document.querySelector("#play");
let cursorPosition = { x: 0, y: 0 };

const updatePlayPosition = () => {
    const scrollTop = locoScroll.scroll.instance.scroll.y;
    gsap.to(play, {
        y: cursorPosition.y + scrollTop,
        x: cursorPosition.x,
    });
};

const handleMouseEnter = () => {
    gsap.to(play, {
        scale: 1,
        opacity: 1
    });
};

const handleMouseLeave = () => {
    gsap.to(play, {
        scale: 0,
        opacity: 0
    });
};

const handleMouseMove = (dets) => {
    cursorPosition = { x: dets.clientX - 50, y: dets.clientY - 80 };
    updatePlayPosition();
};

videoContainer.addEventListener("mouseenter", handleMouseEnter);
videoContainer.addEventListener("mouseleave", handleMouseLeave);
videoContainer.addEventListener("mousemove", handleMouseMove);

const loadingAnimation = () => {

    var childPart1 = document.querySelectorAll("#page4 .childPart1")
    var childPart2 = document.querySelectorAll("#page4 .childPart2")
    let twoGoodLogo = document.querySelectorAll("#page6 #two-good-logo svg path")
    const timeline = gsap.timeline()


    let yValue = window.innerWidth <= 600 ? 100 : 100;
    
    timeline.from("#nav .navParts .navItems", {
        delay: 0.1,
        y: -4,
        opacity: 0
    })
    timeline.from("#page1 #page1-word1 .wrapper", {
        transform: `translateY(${yValue}%)`,
        opacity: 0,
    })
    timeline.from("#page1 #page1-word2 .wrapper", {
        transform: `translateY(${yValue}%)`,
        opacity: 0,
    })
    gsap.from("#page1 #video-container", {
        opacity: 0,
        delay: 1,
        duration: 0.6,
    });
    gsap.from("#main .elements", {
        opacity: 0,
        stagger: 0.3,
        y: 20,
        scrollTrigger: {
            trigger: ".elements",
            scroller: "#main",
            // markers: true,
            start: "top-=50% top",
            end: "top-=40% end",
        }
    })
    if (window.innerWidth<=600){
        startValue1 = "top-=200% top"
        startValue2 ="top-=280% top"
        startValue3 =  "top-=530 top"
        yValue = 20
        let textArea = document.querySelectorAll("#page6 #page6-part1 ")
        gsap.from(textArea,{
            y:20,
            opacity:0,
            scrollTrigger:{
                trigger:"textArea",
                scroller:"#main",
                // markers:true,
                start:startValue3,
                end:"end end",
                stagger:0.3,
            }
        })
    }
    else if (window.innerWidth > 600){
        startValue1 = "top-=60% top"
        startValue2 = "top-=80% top"
        startValue3 =  "top-=500% top"
    }

    gsap.from(childPart1, {
        opacity: 0,
        y: yValue,
        y:40,
        stagger: 0.4,
        scrollTrigger: {
            trigger: childPart1,
            scroller: "#main",
            start:startValue1,
            end: "bottom+=100% center",
            // markers: true,
        }
    })
    gsap.from(childPart2, {
        opacity: 0,
        y: yValue,
        stagger: 0.4,
        scrollTrigger: {
            trigger: childPart2,
            scroller: "#main",
            start: startValue2,
            end: "bottom+=100% center",
            // markers: true,
        }
    })
    
    gsap.from(twoGoodLogo, {
        opacity: 0,
        rotate: -5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: twoGoodLogo,
            scroller: "#main",
            // markers:true,
            start:startValue3,
            end: "end end",
        }
    })


};

loadingAnimation();
if (window.innerWidth<=600){
    const cursor = document.querySelector("#cursor")
    cursor.style.display = "none"
}
const cursorAnimation = () => {

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            top: dets.y,
            left: dets.x
        })
    })

    let childs = document.querySelectorAll(".child")

    childs.forEach(element => {
        element.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%,-50%) scale(1)',
            })
        })
        element.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%,-50%) scale(0)',
            })
        })
    });

    document.querySelector("#child1").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            backgroundColor: 'rgb(231, 230, 230)',
        })
    })
    document.querySelector("#child2").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            backgroundColor: 'rgb(238, 236, 236)',
        })
    })
    document.querySelector("#child3").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            backgroundColor: 'rgb(241, 229, 229)',
        })
    })
    document.querySelector("#child4").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            backgroundColor: ' rgb(206, 218, 230)',
        })
    })


}

cursorAnimation();


let text = document.querySelectorAll(".texts")
let catering = document.querySelector("#catering")
let donateUnderline = document.querySelector("#donateUnderline")

const textAnimation = () => {
    text.forEach(texts => {
        var underline = texts.querySelector(".underline")

        texts.addEventListener("mouseenter", function () {
            underline.style.transformOrigin = "left"
            underline.style.transform = "scaleX(1)"
            underline.style.backgroundColor = "rgb(139, 139, 139)"
        })
        texts.addEventListener("mouseleave", function () {
            underline.style.transformOrigin = "right"
            underline.style.transform = "scaleX(0)"
            underline.style.backgroundColor = "rgb(139, 139, 139)"
        })
    });


    catering.addEventListener("mouseenter", function () {
        donateUnderline.style.transformOrigin = "left"
        donateUnderline.style.transform = "scaleX(1)"
        donateUnderline.style.backgroundColor = "rgb(139, 139, 139)"

    })
    catering.addEventListener("mouseleave", function () {
        donateUnderline.style.transformOrigin = "right"
        donateUnderline.style.transform = "scaleX(0)"
        donateUnderline.style.backgroundColor = "black"
    })
}
textAnimation()

const menuIcon = document.querySelector("#menuIcon")
const icons = document.querySelectorAll("#icons")
const menuPage = document.querySelector("nav #menuPage")
const navParts = document.querySelectorAll(".navParts")
const links = document.querySelectorAll("#links a, #links .words")
menuIcon.addEventListener("click", function () {
    if (!menuPage.classList.contains("menuPage-open")) {
        menuPage.classList.toggle("menuPage-open")
        menuIcon.classList.toggle("menuIcon-open")
        navParts.forEach(element => {
            element.classList.add("menuNav")
        });
        links.forEach(element => {
            element.classList.add("menuNav")
        });
        icons.forEach(part => {
            part.classList.add("menuNav")
        })
        // condition ? expressionIfTrue : expressionIfFalse
        let yValue = window.innerWidth <= 600 ? -31 : -70

        gsap.to("#menuPart2 .title .wrapper", {
            y: yValue,
            delay: 0.1,
            visibility: "visible",
        })
        gsap.from("#menuPart1 .menuPart-boxes", {
            opacity: 0,
            delay: 0.3,
            y: 20,
            stagger: -0.2,
        })
    }
    else if (menuPage.classList.contains("menuPage-open")) {
        menuPage.classList.remove("menuPage-open")
        menuIcon.classList.remove("menuIcon-open")
        navParts.forEach(element => {
            element.classList.remove("menuNav")
        });
        links.forEach(element => {
            element.classList.remove("menuNav")
        });
        icons.forEach(part => {
            part.classList.remove("menuNav")
        })
        gsap.to("#menuPart2 .title .wrapper", {
            y: 0,
            visibility: "hidden"
        })

    }
})


let titles = document.querySelectorAll("#menuPart2 .title h1")
let underlineSvgAnimation = function (titles) {
    // console.log(titles) here the titles are stored in nodeList that's why we cannot use directly the css properties(titles.style) we have to use loops here.
    titles.forEach(title => {
        title.addEventListener("mouseenter", function () {
            let svgElement = this.closest(".title").nextElementSibling.querySelector("svg")
            if (svgElement) {
                svgElement.style.transform = "scaleX(1)"
                svgElement.style.transformOrigin = "left"
            }
        })
        title.addEventListener("mouseleave", function () {
            let svgElement = this.closest(".title").nextElementSibling.querySelector("svg")
            if (svgElement) {
                console.log(svgElement)
                svgElement.style.transform = "scaleX(0)"
                svgElement.style.transformOrigin = "right"
            }
        })
    })
}

underlineSvgAnimation(titles)


