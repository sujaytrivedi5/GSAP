// Lenis JS for Smooth Scrolling
const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.addEventListener("DOMContentLoaded", (event) => {
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  // Splits text into words and characters
  const text = new SplitType('#target-one')
  const headingAnimation = new SplitType('.heading-2')

  gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,CSSRulePlugin)
  // gsap code here!

  let t1 = gsap.timeline();

  t1.from("#target-one .word", { 
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
  .to(".home-video", {
    // y: -50,
    alpha: 1,
    stagger: 0.5,
  });

  var t2 = gsap.timeline({
    scrollTrigger: {
      trigger:".heading-2",
      start: "top 60%",
      end: "bottom 50%",
      markers: true,
      // pin: true,
      scrub: 3,
      ease: "power2",
    },
  });

  t2.fromTo(".heading-2 span", {
    x: -10,
  }, 
  { 
    x: 5,
    backgroundPositionX: "0%",
    stagger: 0.5,
  });

  let mm = gsap.matchMedia();
  mm.add("(min-width: 992px)", () => {
    gsap.to(".home-video", {
      y: 50,
      "--radius1": "10%",
      scale: 5,
      scrollTrigger: {
        trigger: ".video-section",
        start: "top 50%",
        end: "+=80",
        // markers: true,
        pin: true,
        scrub: 2,
        ease: "power2",
      },
    });
  });
});
