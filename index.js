// Variables
const burger = $(".burger-bar");
const navItems = $(".nav-items");
const navUl = $(".nav-ul");

//Custom cursor movement
document.body.onmousemove = function(e) {
    if (e.pageX >= window.innerWidth - 90) {
      console.log("Cursor is at the right edge of the screen");
    }
    else{
      $("#cursor").css({
        left: e.pageX,
        top: e.pageY
      });
    }
}
//Navbar toggle
burger.click(
    function(){
      navItems.toggleClass("nav-open");
      navUl.toggleClass("nav-ul-display");
    }  
  );
  
