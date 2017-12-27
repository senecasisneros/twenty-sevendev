"use strict";

let mobile = document.createElement("div");
mobile.className = "nav-mobile";
document.querySelector(".nav").appendChild(mobile);

// hasClass
function hasClass(elem, className) {
  return new RegExp(" " + className + " ").test(" " + elem.className + " ");
}

//toggleClass
function toggleClass(elem, className) {
  let newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  } else {
    elem.className += " " + className;
  }
}

let mobileNav = document.querySelector(".nav-mobile");
let toggle = document.querySelector(".nav-list");
mobileNav.onclick = function() {
  toggleClass(this, "nav-mobile-open");
  toggleClass(toggle, "nav-active");
};
