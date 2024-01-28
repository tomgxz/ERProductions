const 
    body = $("body"),
    showreel = $(".showreel"),
    showreel_wrapper = $("#index-showreel-wrapper"),
    welcome_wrapper = $("#index-welcome-wrapper"),
    welcome_images = $("#index-welcome-wrapper img")

function toLight() { body.attr("data-bs-theme","light") }
function toDark() { body.attr("data-bs-theme","dark") }

gsap.registerPlugin(ScrollTrigger)

gsap.to(showreel,{width: "90vw", scrollTrigger:{
    trigger: showreel_wrapper,
    start: "top top",
    end: "+=500",
    scrub: true
}})

gsap.to(body,{backgroundColor: "#ffffff",  scrollTrigger:{
    trigger: showreel_wrapper,
    start: "top top-=500",
    end: "+=500",
    scrub: true,
    onLeave: toLight,
    onEnterBack: toDark
}})

gsap.fromTo(welcome_images[0], {opacity:0, y:20}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[0],
    start: "center bottom",
    end: "+=500",
    scrub: true
}})

gsap.fromTo(welcome_images[1], {opacity:0, x:50}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[1],
    start: "center bottom-=400",
    end: "+=500",
    scrub: true
}})

gsap.fromTo(welcome_images[2], {opacity:0, x:50}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[1],
    start: "center bottom-=500",
    end: "+=500",
    scrub: true
}})

gsap.fromTo(welcome_images[3], {opacity:0, y:50}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[3],
    start: "top bottom",
    end: "+=250",
    scrub: true
}})

gsap.fromTo(welcome_images[4], {opacity:0, y:50}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[3],
    start: "top bottom-=100",
    end: "+=250",
    scrub: true
}})

gsap.fromTo(welcome_images[5], {opacity:0, y:50}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[3],
    start: "top bottom-=200",
    end: "+=250",
    scrub: true
}})

gsap.fromTo(welcome_images[6], {opacity:0, y:50}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[3],
    start: "top bottom-=200",
    end: "+=250",
    scrub: true
}})

gsap.fromTo(welcome_images[7], {opacity:0, y:50}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[3],
    start: "top bottom-=300",
    end: "+=250",
    scrub: true
}})

gsap.fromTo(welcome_images[8], {opacity:0, y:50}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[3],
    start: "top bottom-=400",
    end: "+=250",
    scrub: true
}})

gsap.fromTo(welcome_images[9], {opacity:0, y:50}, {opacity:1, x:0, y:0, scrollTrigger:{
    trigger: welcome_images[3],
    start: "top bottom-=500",
    end: "+=250",
    scrub: true
}})

