// var tl = gsap.timeline();


// sceneOne stage
gsap.set("#Sally_front", {opacity:0});
gsap.set("#Sneeze", {opacity:0});
gsap.set("#thisis", {opacity:0});
gsap.set("#Sally_side", {opacity:0});
gsap.set("#didntknow", {opacity:0});
gsap.set("#Sally_side", {transformOrigin: "center center"});
gsap.set("#Sneeze", {x:10, y:35});

// sceneTwo stage
gsap.set("#sally_plays", {opacity:0});

// sceneThree Stage
gsap.set("#After_comes", {opacity:0});
gsap.set("#sally_talks", {opacity:0});
gsap.set("#Sally_Side_back", {opacity:0});

// sceneFour stage
gsap.set("#back_to_school", {opacity:0});
gsap.set("#Sally_front_4", {opacity:0});
gsap.set("#Sally_side_back_4", {opacity:0});
gsap.set("#question_mark", {opacity:0})


function sceneOne(){
	var tl = gsap.timeline();
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
	// tl.to("#Sally_side", {opacity: 0, duration: 0, delay:2});
	// tl.to("#Sneeze", {opacity: 0, duration: 0}, "<");
	// tl.to("#didntknow", {opacity: 0, duration: 0}, "<");
	return tl;
}

function sceneTwo(){
var tl = gsap.timeline();
tl.fromTo("#sally_plays", {opacity:0}, {opacity:1, duration:1, delay:1});
tl.to("#Sally_front_2",{y:-10, yoyo:true, repeat:3,duration:.2},"<");
tl.to("#Monique_2",{y:-10, yoyo:true, repeat:3,duration:.2,delay:.5},"<");
tl.to("#Ana_2",{y:-10, yoyo:true, repeat:3,duration:.2,delay:.5},"<");
tl.to("#Sally_front_2",{y:-10, yoyo:true, repeat:3,duration:.2});
tl.to("#Monique_2",{y:-10, yoyo:true, repeat:3,duration:.2,delay:.5}, "<");
tl.to("#Ana_2",{y:-10, yoyo:true, repeat:3,duration:.2,delay:.5}, "<");
return tl;
}


// have sick bubbles pulse later when you have more time for final
function sceneThree() {
var tl = gsap.timeline();
tl.fromTo("#After_comes", {opacity:0}, {opacity:1, duration:2});
tl.fromTo("#Sally_Side_3", {x:-200}, {x:0, duration:4}, "<");
tl.fromTo("#sally_talks", {opacity:0}, {opacity:1, duration:2});
tl.to("#Sally_Side_3",{y:-5, duration:.3, yoyo:true,repeat:1}, "<");
tl.to("#Teacher-2",{y:-5, duration:.3, yoyo:true,repeat:1});
tl.to("#Sally_Side_3", {opacity:0, duration:.5});
tl.fromTo("#Sally_Side_back", {opacity:0}, {opacity:100, duration:.5}, "<");
tl.to("#Sally_Side_back", {x:-200, duration:4});
return tl;
}

function sceneFour(){
	var tl = gsap.timeline();
	tl.fromTo("#back_to_school", {opacity:0}, {opacity:1, duration:2});
	tl.to("#Sally_side_4", {x:305,duration:2},"<");
	tl.to("#Sally_side_4", {opacity:0, duration:.5});
	tl.to("#Sally_side_back_4", {opacity:1, duration:.5},"<");
	tl.to("#Sally_side_4", {opacity:1, duration:.5});
	tl.to("#Sally_side_back_4", {opacity:0, duration:.5},"<")
	tl.to("#Sally_side_4", {opacity:0, duration:.5});
	tl.to("#Sally_front_4", {opacity:1, duration:.5},"<");
	tl.to("#question_mark", {opacity:1, duration:.5});
	return tl;
}


// posssible make master timeline then restart it? or is the end delay and end sceneOne

// function bigTime(){
// var master = gsap.timeline();
// master.to(sceneOne())
// master.to(sceneTwo(), "<");
//
// }



// just using thsi code to run the animaiton
// will take out later and plug into carousel trigger below
// make sure to turn other scenes back on!!
var master = gsap.timeline();
master.add(sceneOne());
master.add(sceneTwo(), "+=1.5");
master.add(sceneThree(), "+=1.5");
master.add(sceneFour(), "+=.5");




var myCarousel = document.getElementById('carouselExampleControls')

// myCarousel.addEventListener('slid.bs.carousel', function () {
//
// 	// tl.restart(sceneOne(), sceneTwo());
//
// gsap.timeline().restart(bigTime());
//
//
//
//
//
// 	console.log("slid");
// })
