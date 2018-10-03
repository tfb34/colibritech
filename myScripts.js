const menuBtn = document.getElementById('menu-btn');

let closed = true;

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

