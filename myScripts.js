const menuBtn = document.getElementById('menu-btn');

function toggleBtn(){
  menuBtn.classList.toggle("change");
  //change overflow hidden and left attribute of container . class
  var x =   document.getElementsByClassName("container")[0];
  if(!x.classList.contains("open-menu")){
  	document.getElementsByClassName("container")[0].style.overflowX = "visible";
  	x.classList.add("open-menu");
  	document.getElementById("navbar").classList.add("open-menu");
  	document.getElementById("navbar").classList.remove("close-menu");
  	x.classList.remove("close-menu");
  	setTimeout(function() { 
    document.getElementsByTagName("body")[0].style.overflowX = "hidden";
  	}, 1000);
  }else{
  	x.classList.add("close-menu");
  	document.getElementById("navbar").classList.add("close-menu");
  	document.getElementById("navbar").classList.remove("open-menu");
  	x.classList.remove("open-menu");
  	setTimeout(function() { 
    document.getElementsByClassName("container")[0].style.overflowX = "hidden";
    document.getElementsByTagName("body")[0].style.overflowX = "visible";
  	}, 1000);
  }

}