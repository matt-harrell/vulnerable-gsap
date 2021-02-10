gsap.set("#Sally_front", {opacity:0});
gsap.set("#Sneeze", {opacity:0});
gsap.set("#thisis", {opacity:0});
gsap.set("#Sally_side", {opacity:0});
gsap.set("#didntknow", {opacity:0});











function sceneOne(){
var tl = gsap.timeline();
gsap.set("#Sally_side", {
	transformOrigin: "center center",
});

gsap.set("#Sneeze", {x:10, y:35});



  tl.fromTo("#Sally_front", {opacity: 0, y:-50}, {opacity: 1, y:0, duration: 3});
  tl.fromTo("#thisis", {opacity: 0}, {opacity: 1, duration: 3, delay:.5},"<");
  tl.to("#Sally_front", {opacity: 0, duration: 1});
  tl.fromTo("#Sally_side", {opacity:0}, {opacity: 100, duration: 1},"<");
  tl.to("#Sally_side", {x:300, duration:3,delay:.5},"<");
  tl.to("#thisis", {opacity: 0, duration: 3, delay:.5},"<");
  tl.to("#Sally_side", {rotation:-30,duration:.5});
  tl.to("#Sally_side", {rotation:0,duration:.2});
  tl.fromTo("#Sneeze", {opacity:0}, {opacity: 1, duration: .3,});
  tl.fromTo("#didntknow", {opacity:0}, {opacity: 1, duration: 1}, "<");



}










var myCarousel = document.getElementById('carouselExampleControls')

myCarousel.addEventListener('slid.bs.carousel', function () {
  gsap.timeline().kill(sceneOne())
  gsap.timeline().restart(sceneOne())

  console.log("slid");
})
