// Variables
const burger = $(".burger-bar");
const navItems = $(".nav-items");
const navUl = $(".nav-ul");
const skillDesktop = $(".skills-desktop");
const skillDesktopList = $(".skills-desktop").children();
const options = {
    threshold: 0.5,
    rootmargin: "-500px",
};

//Custom cursor movement
document.body.onmousemove = function(e) {
    if (e.pageX >= window.innerWidth - 90) {
      $("#cursor").css({
        left: e.pageX - 90,
        top: e.pageY - 90
      });
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

skillDesktopList.css("opacity", "0");
const observerOne = new IntersectionObserver(function (entries, observer) {
  if (entries[0].isIntersecting === true) {
    // Add the animation when the element enters the viewport
    skillDesktopList.css("opacity", "1");
    skillDesktopList.css("animation", "slidein 2s"); // Apply the animation
  } else {
    // Optionally reset opacity or other properties when it leaves
   console.log("Not intersecting");
    skillDesktopList.css("opacity", "0");
    skillDesktopList.css("animation", "none"); // Apply the animation
  }
}, options);

observerOne.observe(skillDesktop[0]);
