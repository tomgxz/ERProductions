gsap.registerPlugin(ScrollTrigger)

const 
    body = $(document.body),
    header = $("header.header"),
    headerBG = $(".header-background"),
    headerBGH1 = $(".header-background-content h1"),
    headerTextContainer = $(".header-foreground-content"),
    headerText = $(".header-foreground-content .text"),
    headerTextOuter = $(".header-foreground-content .text:not(.meets)"),
    headerTextInner = $(".header-foreground-content .text.meets"),
    headerTrigger = $("#header-trigger"),
    scrollPrompt = $("#scroll-prompt"),
    scrollPromptArrow = $("#scroll-prompt i")


    
$(window).scrollTop(0)


$(window).on("load",() => {

    // onload header animation timeline
    // #region

    const timelineOnLoad = gsap.timeline()

        // Background text move up and fade in
        .fromTo(headerBGH1,
            1,
            {opacity:0, y:100},
            {opacity:1, y:0},
            0)

        // outer text move in from the left, fade in, and clip path from l2r
        .staggerFromTo(
            headerTextOuter,
            .75,
            {opacity:0, x:-15, clipPath:"polygon(0 0, 0 100%, 0% 100%, 0% 0)"},
            {opacity:1, x:0, clipPath:"polygon(0 0, 0 100%, 100% 100%, 100% 0)"},
            2,
            .75)

        // inner text move up and fade in
        .fromTo(headerTextInner,
            .75,
            {opacity:0, y:30},
            {opacity:1, y:0},
            1.75)
        
        // header resizing to 75vh
        .fromTo(
            headerBG,
            .75,
            {height:"100vh"},
            {height:"75vh"},
            4)
        
        // header content clip path resizing to 75vh
        .fromTo(headerTextContainer,
            .75,
            {clipPath:"polygon(0 0, 0 100vh, 100vw 100vh, 100vw 0)"},
            {clipPath:"polygon(0 0, 0 75vh, 100vw 75vh, 100vw 0)"},
            4)
        
        // activate scrolling
        .to(body,
            0,
            {overflow:"initial"},
            4.75)

    // #endregion

    // Header scroll up timeline
    // #region

    gsap.timeline({
        scrollTrigger: {
            trigger: "#header-trigger",
            start: "top top",
            end: "+=100%",
            scrub: true
        }})
        .to(headerBG,{height:0},0)
        .to(headerBGH1,{y:-200},0)
        .to(headerTextContainer,{clipPath:"polygon(0 0, 0 0vh, 100vw 0vh, 100vw 0)"},0)
        .to(headerText,{y:-100},0)

    // #endregion

    // Scroll prompt animation timeline
    // #region

    gsap.timeline({repeat:-1})
        .fromTo(scrollPromptArrow,.5,{opacity:0},{opacity:1},0)
        .fromTo(scrollPromptArrow,1,{y:0},{y:20},.5)
        .fromTo(scrollPromptArrow,.5,{opacity:1},{opacity:0},1)
        .play()

    gsap.timeline({
        scrollTrigger: {
            trigger: headerTrigger,
            start: "top top",
            end: "+=20%",
            scrub: true
        }})
        .fromTo(scrollPrompt,{opacity:1},{opacity:0},0)

    // #endregion


    headerBG.css({height:"100vh"})
    headerTextContainer.css({"clip-path":"polygon(0 0, 0 100vh, 100vw 100vh, 100vw 0)"})
    body.css({"overflow-y":"hidden"})

    timelineOnLoad.play()
})