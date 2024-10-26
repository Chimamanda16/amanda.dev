// Variables
const burger = $(".burger-bar");
const navItems = $(".nav-items");
const navUl = $(".nav-ul");
const skillDesktop = $(".skills-desktop");
const skillDesktopList = $(".skills-desktop").children();
const skillMobile = $(".skills-mobile").children();
const skillMobileList = $(".skills-mobile").children();
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
skillMobileList.css("opacity", "0");
const observerOne = new IntersectionObserver(function (entries, observer) {
    if (entries[0].isIntersecting === true) {
      skillDesktopList.css("opacity", "1");
      skillDesktopList.css("animation", "slidein 2s");
    }
}, options);

const observerTwo = new IntersectionObserver(function (entries, observer) {
   if (entries[0].isIntersecting === true) {
     skillMobileList.css("opacity", "1");
     skillMobileList.css("animation", "slidein 2s");
   }
}, options);

observerOne.observe(skillDesktop[0]);
observerTwo.observe(skillMobile[0]);
