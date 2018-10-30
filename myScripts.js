window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const menuBtn = document.getElementById('menu-btn');

let closed = true;

/*loading page*/
var t = new TimelineMax();

t.to('#body', 1, {
        autoAlpha: 1,
        ease: Power1.easeInOut
    })
	.to('#ring', 0.5, {
		autoAlpha:1,
        strokeDashoffset:0,
        ease: Power1.easeInOut,
        delay:1
    })
    .to('#body,#ring',1,{autoAlpha:0, ease:Power1.easeOut},"-=0.2")
	.fromTo('#loading-page',0.1,{top:0},{top:'-20vh', ease:Power1.easeOut})
	.to('#loading-page, #loading-backdrop', 0.5,{top:'-100vh'})
	/*.to('#main-header-cover',0.4,{height:0, transformOrigin:"bottom", ease:Power2.easeOut},'-=0.2')
	.fromTo('#home-main-letters > path',0.5,{autoAlpha:0},{autoAlpha:1,ease:Power2.easeInOut},'-=0.3')
	.fromTo('#home-subheader',0.5,{autoAlpha:0},{autoAlpha:1,ease:Power2.easeInOut},'-=0.3')
	.fromTo('#home-navbar > li', 0.5,{autoAlpha:0,paddingTop:"2em"},{autoAlpha:1,paddingTop:0})*/
	.call(showOverflow)
	.to('body',1,{overflowY:"scroll"},"+=1")

function showOverflow(){
	if(document.getElementsByTagName('title')[0].innerText != "home : colibritech"){
		document.getElementsByTagName('body')[0].style.overflowY = "scroll";
	}
}



function toggleBtn(){

  menuBtn.classList.toggle("change");
  var navbar = document.getElementById("navbar");
  var body = document.getElementsByTagName("body")[0];
  var x =   document.getElementsByClassName("container")[0];
  var mobileMenu = document.getElementsByClassName("mobile-menu")[0];

  if(closed){
  	mobileMenu.style.transform = "translateX(-200px)";
  	navbar.style.transform = "translateX(-200px)";
  	x.style.transform = "translateX(-200px)";
  	body.style.overflowY = "hidden";
  	closed = false;
  }else{
  	mobileMenu.style.transform = "none";
  	navbar.style.transform = "none";
  	x.style.transform = "none";
  	body.style.overflowY = "visible";
  	closed = true;
  }
}


/*Carousel on index page*/
var arr = ["one", "two", "three"];
var dotArray = ["dot1", "dot2", "dot3"];
let currIndex = 0;
/*move to the next picture in array of slideshow images*/
function next(){
	console.log("called next , index: "+ currIndex);
	stripCarouselClasses(currIndex);
	document.getElementById(arr[currIndex]).classList.add("carousel-left");
	
	var newCurrIndex = (currIndex+1) % arr.length;
	/*change dots*/
	document.getElementById(dotArray[currIndex]).classList.remove("selected");
	document.getElementById(dotArray[newCurrIndex]).classList.add("selected");
	/*stage new selected element*/
	document.getElementById(arr[newCurrIndex]).classList.add("carousel-stage-right");
	document.getElementById(arr[newCurrIndex]).classList.add("selected");
	setTimeout(function(){
		console.log(currIndex);
		document.getElementById(arr[newCurrIndex]).classList.add("carousel-show");
		document.getElementById(arr[currIndex]).classList.remove("carousel-left");
		currIndex = newCurrIndex;
	},400);
}


function stripCarouselClasses(id){
	let x = document.getElementById(arr[currIndex]).classList;
	x.remove("selected");
	x.remove("carousel-show");
	x.remove("carousel-stage-right");
	x.remove("carousel-stage-left");
}

function previous(){
	console.log("called next , index: "+ currIndex);
	stripCarouselClasses(currIndex);
	document.getElementById(arr[currIndex]).classList.add("carousel-right");
	
	var newCurrIndex =  currIndex-1 % arr.length ;
	if(newCurrIndex < 0){
		newCurrIndex = arr.length -1;
	}
	/*change dots*/
	document.getElementById(dotArray[currIndex]).classList.remove("selected");
	document.getElementById(dotArray[newCurrIndex]).classList.add("selected");
	/*stage new selected element*/
	document.getElementById(arr[newCurrIndex]).classList.add("carousel-stage-left");
	document.getElementById(arr[newCurrIndex]).classList.add("selected");
	setTimeout(function(){
		console.log(currIndex);
		document.getElementById(arr[newCurrIndex]).classList.add("carousel-show");
		document.getElementById(arr[currIndex]).classList.remove("carousel-right");
		currIndex = newCurrIndex;
	},400);
}


/*Hides navigation bar only when scrolling down*/
let scrollPos = null;
window.addEventListener('scroll', function(e){
	last_known_scroll_position = window.scrollY;
    
    if(last_known_scroll_position > scrollPos){
    	console.log("scrolling down");
    	hideNavBar();
    }else{
    	console.log("scrolling up");
    	if(last_known_scroll_position <50){
    		document.getElementById("navbar").style.boxShadow = "none";
    	}else{
    		document.getElementById("navbar").style.boxShadow = "0px 2px 2px lightgrey";
    	}
    	showNavBar();
    }

    scrollPos = last_known_scroll_position;
});


function showNavBar(){
	document.getElementById("navbar").style.display = "block";
}

function hideNavBar(){
	document.getElementById("navbar").style.display = "none";
}

