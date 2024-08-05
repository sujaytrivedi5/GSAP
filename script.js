document.addEventListener("DOMContentLoaded", (event) => {

    // let rule = CSSRulePlugin.getRule(".main-heading::before");

    // Splits text into words and characters
    const text = new SplitType('#target-one')
  
    gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin, CSSRulePlugin)
    // gsap code here!

    let t1 = gsap.timeline();

    t1.from(".word", { 
      y: 300,
      alpha: 1,
      skewX: '-15deg',
      skewY: '0deg',
      rotation: 0,
      perspective: 10000,
      delay: 1,
      stagger: 0.2,
    })
    .from(".text-desc span", {
      alpha: 0,
      y: 100,
      stagger: 0.1,
    })
    .from(".button-wrapper", {
      y: 100,
      alpha: 0,
      stagger: 0.5,
    })
    // .to(".home-video", {
    //   scale: 50,
    //   alpha: 0,
    //   // stagger: 0.5,
    // });

});
