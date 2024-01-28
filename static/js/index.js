function toLight() { $("body").attr("data-bs-theme","light") }
function toDark() { $("body").attr("data-bs-theme","dark") }

gsap.registerPlugin(ScrollTrigger)

gsap.to($(".showreel"),{width: "90vw", scrollTrigger:{
    trigger: $("#index-showreel-wrapper"),
    start: "top top",
    end: "+=500",
    scrub: true
}})

gsap.to($("body"),{backgroundColor: "#ffffff",  scrollTrigger:{
    trigger: $("#index-showreel-wrapper"),
    start: "top top-=500",
    end: "+=500",
    scrub: true,
    onLeave: toLight,
    onEnterBack: toDark
}})