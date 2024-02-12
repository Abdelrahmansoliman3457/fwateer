$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(".loader").remove();
    });
  }, 1000);
});

//  add active class to cuurent link
$(".links > li > a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});
// toggle drop-down
let myBtndrop = document.querySelector(".show-details-btn");
let drop = document.querySelector(".my-drop-now");

if (drop) {
  myBtndrop.addEventListener("click", function (e) {
    drop.classList.toggle("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    drop.classList.remove("show-drop");
  });
  drop.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
// toggle drop-down noti
let showNotibtn = document.querySelector(".show-noti");
let dropNoti = document.querySelector(".my-drop-now2");

if (dropNoti) {
  showNotibtn.addEventListener("click", function (e) {
    dropNoti.classList.toggle("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    dropNoti.classList.remove("show-drop");
  });
  dropNoti.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

// Show And Hide SlideBar

const menu = document.getElementById("menu");
const sideBar = document.getElementById("sidebar");
const navbar = document.getElementById("navbar");
const main = document.getElementById("main");
const closeSidebar = document.getElementById("closeSidebar");

if (menu) {
  menu.addEventListener("click", () => {
    sideBar.classList.toggle("active-side");
    navbar.classList.toggle("active-nav");
    main.classList.toggle("active-main");
  });
}

// Close SideBar
if (closeSidebar) {
  closeSidebar.addEventListener("click", () => {
    sideBar.classList.remove("active-side");
    navbar.classList.remove("active-nav");
    main.classList.remove("active-main");
  });
}
