document.addEventListener("DOMContentLoaded", (event) => {

  // var anim = {alpha:0,blur:10};
  // Splits text into words and characters
  const text = new SplitType('#target-one')

  gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin)
  // gsap code here!
  gsap.from(".word", { 
    y: 300,
    skewX: '-15deg',
    skewY: '0deg',
    rotation: 0,
    perspective: 10000,
    delay: 1,
    stagger: 0.2,
  });

  gsap.to(".main-heading", {
    alpha: 1,
    blur: 0,
    stagger: 0.5,
    duration: 2,
  });

});
