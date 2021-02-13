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
gsap.set("#question_mark", {opacity:0});

//sceneFive Stage
gsap.set("#wenthome", {opacity:0});
gsap.set("#wheremonique", {opacity:0});

//sceneSix Stage
gsap.set("#Severalweeks_6", {opacity:0});
gsap.set("#sally_side_back_6", {opacity:0});
gsap.set("#Sally_side_6", {opacity:0});

	var tl = gsap.timeline();

function sceneOne(){

	tl.fromTo("#Sally_front", {opacity: 0, y:-50}, {opacity: 1, y:0, duration: 3,delay:1});
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

sceneOne()


var tl2 = gsap.timeline();

function sceneTwo(){
tl2.fromTo("#sally_plays", {opacity:0}, {opacity:1, duration:1, delay:1.5});
tl2.to("#Sally_front_2",{y:-10, yoyo:true, repeat:3,duration:.2},"<");
tl2.to("#Monique_2",{y:-10, yoyo:true, repeat:3,duration:.2,delay:.5},"<");
tl2.to("#Ana_2",{y:-10, yoyo:true, repeat:3,duration:.2,delay:.5},"<");
tl2.to("#Sally_front_2",{y:-10, yoyo:true, repeat:3,duration:.2});
tl2.to("#Monique_2",{y:-10, yoyo:true, repeat:3,duration:.2,delay:.5}, "<");
tl2.to("#Ana_2",{y:-10, yoyo:true, repeat:3,duration:.2,delay:.5}, "<");
return tl2;
}

var tl3 = gsap.timeline();
// have sick bubbles pulse later when you have more time for final
function sceneThree() {

tl3.fromTo("#After_comes", {opacity:0}, {opacity:1, duration:2,delay:1});
tl3.fromTo("#Sally_Side_3", {x:-200}, {x:0, duration:4}, "<");
tl3.fromTo("#sally_talks", {opacity:0}, {opacity:1, duration:2});
tl3.to("#Sally_Side_3",{y:-5, duration:.3, yoyo:true,repeat:1}, "<");
tl3.to("#Teacher-2",{y:-5, duration:.3, yoyo:true,repeat:1});
tl3.to("#Sally_Side_3", {opacity:0, duration:.5});
tl3.fromTo("#Sally_Side_back", {opacity:0}, {opacity:100, duration:.5}, "<");
tl3.to("#Sally_Side_back", {x:-200, duration:4});
return tl3;
}
	var tl4 = gsap.timeline();
function sceneFour(){

	tl4.fromTo("#back_to_school", {opacity:0}, {opacity:1, duration:2,delay:1.5});
	tl4.to("#Sally_side_4", {x:305,duration:2},"<");
	tl4.to("#Sally_side_4", {opacity:0, duration:.5});
	tl4.to("#Sally_side_back_4", {opacity:1, duration:.5},"<");
	tl4.to("#Sally_side_4", {opacity:1, duration:.5});
	tl4.to("#Sally_side_back_4", {opacity:0, duration:.5},"<")
	tl4.to("#Sally_side_4", {opacity:0, duration:.5});
	tl4.to("#Sally_front_4", {opacity:1, duration:.5},"<");
	tl4.to("#question_mark", {opacity:1, duration:.5});

	return tl4;
}
	var tl5 = gsap.timeline();
function sceneFive(){

	tl5.fromTo("#wheremonique", {opacity:0}, {opacity:1, duration:1.5, delay:1.3});
	tl5.to("#Sally_front_5",{y:-5, duration:.3, yoyo:true,repeat:1}, "<");
	tl5.to("#wheremonique", {opacity:0, duration:0, delay:.5})
	tl5.fromTo("#wenthome", {opacity:0}, {opacity:1, duration:1.5});
	tl5.to("#Ana_5",{y:-5, duration:.3, yoyo:true,repeat:1}, "<");
	return tl5;
}

// function walkToBus() {
// 	var tlb = gsap.timeline({repeat: 2, repeatDelay: .3});
//
// 	tlb.fromTo("#Sally_side_6", {opacity:0}, {opacity:1, duration:.5}, "<");
// 	tlb.to("#Sally_side_6", {x:400, duration:2});
// 	tlb.to("#Sally_side_6", {opacity:0, duration:.5});
// 	tlb.to("#sally_side_back_6", {opacity:1, duration:.5});
// 	tlb.to("#sally_side_back_6", {x:-360, duration:2});
// 	tlb.to("#sally_side_back_6", {opacity:0,duration:.5});
//
// 	return tlb;
// }

var tl6 = gsap.timeline();
function sceneSix(){



	tl6.fromTo("#Severalweeks_6",{opacity:0}, {opacity:1, duration:2, delay:1});
	tl6.to("#Sally_side_6", {opacity:1, duration:.5},"<");
	tl6.to("#Sally_side_6", {x:400, duration:2});
	tl6.to("#Sally_side_6", {opacity:0, duration:.5});
	tl6.fromTo("#sally_side_back_6",{opacity:0}, {opacity:1, duration:.5});
	tl6.to("#sally_side_back_6", {x:-360, duration:2.3});
	tl6.to("#sally_side_back_6", {opacity:0,duration:.5});

	// tl6.invalidate("#Sally_side_6","#sally_side_back_6");
	//
	//
	// tl6.to("#Sally_side_6", {opacity:1, duration:.5});
	// tl6.to("#Sally_side_6", {x:400, duration:2});
	// tl6.to("#Sally_side_6", {opacity:0, duration:.5});
	// tl6.to("#sally_side_back_6", {opacity:1, duration:.5});
	// tl6.to("#sally_side_back_6", {x:-360, duration:2.3});
	// tl6.to("#sally_side_back_6", {opacity:0,duration:.5});

	tl6.fromTo("#Sally_side_6",{x:0}, {opacity:1, duration:.5});
	tl6.fromTo("#Sally_side_6",{x:0}, {x:400, duration:2});
	tl6.to("#Sally_side_6", {opacity:0, duration:.5});
	tl6.fromTo("#sally_side_back_6", {x:0}, {opacity:1, duration:.5});
	tl6.to("#sally_side_back_6", {x:-360, duration:2.3});
	tl6.to("#sally_side_back_6", {opacity:0, duration:.5});




	return tl6;
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

// var master = gsap.timeline();
// master.add(sceneOne());
// master.add(sceneTwo(), "+=1.5");
// master.add(sceneThree(), "+=1.5");
// master.add(sceneFour(), "+=.5");
// master.add(sceneFive(), "+=1");
// master.add(sceneSix(), "+=1");
// master.add(walkToBus(), "<");

// var master = gsap.timeline();
//
// master.play(sceneOne());
// master.play(sceneTwo(),"<");
// master.add(sceneThree(),"<");
// master.add(sceneFour(),"<");
// master.add(sceneFive(),"<");
// master.add(sceneSix(),"<");
// master.add(walkToBus());





// var myCarousel = document.getElementById('carouselExampleControls')


// $('#carouselExampleControls').on('slid.bs.carousel', function(event) {
//     console.log(event.from);
// 		if (event.from == 0) {
//
// 				tl.restart();
// 				tl2.restart();
// 		} else if (event.from == 1) {
// 				tl.restart();
// 				tl2.restart();
//
// 		} else if (event.from == 2) {
//
// 		}else if (event.from == 3) {
// 			// alert('three')
// 	}
//  else if (event.from == 4) {
// 		// alert('four')
// }
//  else if (event.from == 5) {
// 		// alert('five')
// 		//play scene one
//
// }
//    // You can use use 'event.from' in whatever way works best for you here
// })

// myCarousel.addEventListener('slid.bs.carousel', function () {
//
// 	// tl.restart(sceneOne(), sceneTwo());
//
// // gsap.timeline().restart(bigTime());
//
//
// master.restart()
//
//
//
//
//
//
// 	console.log("slid");
// })



https://stackoverflow.com/questions/30361799/how-to-target-bootstrap-carousels-active-slide

$('#carouselExampleControls').on('slide.bs.carousel', function onSlide (ev) {
  var id = ev.relatedTarget.id;
  switch (id) {

    case "one":

			tl.restart(true)

      break;


    case "two":

			sceneTwo()
			tl2.restart(true)

      break;


    case "three":

			sceneThree()
			tl3.restart(true)

      break;

		case "four":

			sceneFour()
			tl4.restart(true)

			break;


		case "five":

			sceneFive()
			tl5.restart(true)

			break;

		case "six":

			sceneSix()
			tl6.invalidate()
			tl6.clear()
			sceneSix()
			tl6.restart(true)

			break;

	  }

})
