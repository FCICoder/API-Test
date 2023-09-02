closeSideNav();
(function () {
  $(".toggler").click(() => {
    if ($(".navBar").css("left") == "0px") {
      closeSideNav();
    } else {
      openSideNav();
    }
  });
})();

//?-------------------------------------------------
// ?=============>Starting point<===========
import * as search from "./Search.js";
search.searchByName("");

//?--------------------------get Category ----------------------------
import * as Cate from "./Category.js";
$("#cate").click(function () {
  Cate.res();
  closeSideNav();
});
//?--------------------------get Area ----------------------------
import * as Area from "./Area.js";
$("#area").click(function () {
  Area.displayArea(Area.getArea());
  closeSideNav();
});
//?--------------------------get Ingradient ----------------------------
import * as ingred from "./ingradient.js";
$("#ingredient").click(function () {
  ingred.getIngredients();
  closeSideNav();
});
// ?--------------------------get Contact ----------------------------
import * as contact from "./Contact.js";
$("#Contact").click(function () {
  contact.showContacts();
  closeSideNav();
});
// ?--------------------------get Search ----------------------------
$("#search").click(function () {
  search.searchValue();
  closeSideNav();
});

// ?=========>navbar<========
function openSideNav() {
  $(".navBar").animate({ left: 0 }, 400);
  $(".toggler").removeClass("fa-align-justify");
  $(".toggler").addClass("fa-x");
  
  $(".links li").animate({ top: 0 }, 900);
}

function closeSideNav() {
  let Width = $(".navBar .nav-tab").innerWidth();
  $(".navBar").animate({ left: -Width }, 400);
  $(".toggler").addClass("fa-align-justify");
  $(".toggler").removeClass("fa-x");
  $(".links li").animate({ top: 300 }, 800);
}
