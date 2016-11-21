//self executing anonymous function fired
(function(){
	"use strict";
	console.log("fired");

// declare variables to run tweenMax	
var logo1= TweenMax.set('.christmas',{x:0,y:0,opacity:0});
var logo2= TweenMax.set('.fire',{x:0,y:0,opacity:0});

// function to fadein fireworks image
function bye()
{
logo2= TweenMax.fromTo('.fire',4,{x:30,y:30,
opacity:0},{x:30,y:30,opacity:1,ease:Power1.easeIn});
}; 	

//function to fadein and move merry christmas image
function hello(){
	magic.pause();
	logo1= TweenMax.fromTo('.christmas',5,{x:0,y:0,
opacity:0},{x:50,y:50,opacity:1,ease:Power1.easeIn,onComplete:bye});
};

// declare variables to run tweenmax 
//move container and the character in opposite direction
//to create animation of moving santa
var magic = TweenMax.to('.character',1,
{repeat:-1,x:-2250,ease:SteppedEase.config(15)});
var contain = TweenMax.to('.santa',10,
{x:700,ease:Power0.easeIn,onComplete:hello});		

})();

