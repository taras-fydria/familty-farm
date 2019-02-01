// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import "./lib/foundation-explicit-pieces";

import {
  slick
} from "slick-carousel/slick/slick.min.js";

$(document).foundation();

import $ from "jquery";
import "what-input";

var map;
var marker;
const markerDesc =
  '<div class="ba-map__desc">' + "<p>We are here</p>" + "</div>";

function initMap() {
  var myLatLng = {
    lat: -38.092596,
    lng: 146.262637
  };
  var markerPosition = {
    lat: -38.071541,
    lng: 146.17727
  };
  map = new google.maps.Map(document.querySelector(".ba-map__body"), {
    center: myLatLng,
    zoom: 12,
    disableDefaultUI: true
  });

  marker = new google.maps.Marker({
    position: markerPosition,
    map: map,
    title: "We are here",
    icon: "/assets/img/placeholder.png"
  });

  var infowindow = new google.maps.InfoWindow({
    content: markerDesc
  });
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });
}
initMap();

$(".ba-testimonials__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,
  dots: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});


let sliderH = $(".slick-list.draggable").height();
sliderH = sliderH - 80;
let slideContentH = $(".ba-testimonials__content").css("height", sliderH);


console.log(sliderH);
console.log(slideContentH);