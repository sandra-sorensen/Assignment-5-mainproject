var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "none";
    }
  });
}

function myFunction() {
	var element = document.getElementsByClassName("panel");
	element.classList.toggle("mystyle");
}

 document.getElementsByClassName("menu").addEventListener("mouseenter", mouseEnter);
 document.getElementsByClassName("menu").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementsByClassName("menu").style.color = "red";
}
function mouseLeave() {
  document.getElementsByClassName("menu").style.color = "black";
}


  