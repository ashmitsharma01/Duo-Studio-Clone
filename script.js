function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()
var main = document.querySelector(".main")
var crsr = document.querySelector(".cursor")

document.addEventListener("mousemove",function(dets){
  gsap.to(crsr,{
    x:dets.x + 20,
    y:dets.y + 20,
    duration:0.3
})
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller:".main",
        markers: true,
        start:"top 30%",
        end:"top 0",
        scrub:2
    }
})
tl.to(".page1 h1",{
    x: -100
},"anim") // this anim is a random variable name which is used to let both the animation happens on same time jha jha anim use hua h 
tl.to(".page1 h2",{
    x:100
},"anim")
tl.to(".page1 #video",{
    width:"90%"
},"anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger: ".page1 h1",
      scroller:".main",
      markers: true,
      start:"top -115%",
      end:"top -120",
      scrub:2
  }
})
tl2.to(".main",{
  backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger: ".page1 h1",
      scroller:".main",
      markers: true,
      start:"top -280%",
      end:"top -300",
      scrub:2
  }
})

tl3.to(".main",{
  backgroundColor: "#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width = '300px'
    crsr.style.height = "250px"
    crsr.style.borderRadius = "0"
    crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width = '20px'
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = ``
  })
})
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.style.opacity = "1"
    elem.style.borderBottom = "2px solid #575555"
  })
  elem.addEventListener("mouseleave",function(){
    elem.style.opacity = "0.3"
    elem.style.borderBottom = "0"
  })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    purple.style.display = "block"
    purple.style.opacity = "100"
  })
  elem.addEventListener("mouseleave",function(){
    purple.style.display = "none"
    purple.style.opacity = "0"
  })
})