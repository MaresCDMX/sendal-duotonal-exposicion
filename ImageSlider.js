let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector(".next").addEventListener("click", next);

document.querySelector(".prev").addEventListener("click", prev);

setInterval(() => {
  next();
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});

// Loader
$(window).on("load", function () {
  setTimeout(function () {
    // allowing 3 secs to fade out loader
    $(".page-loader").fadeOut("slow");
  }, 3000);
});

/*
Codigo EXTRA para Mostrar/Ocultar con solo 1 Click*/

var click = false;
$(".card").click(function () {
  if (click == false) {
    /*$(".sub ul").css("transform", "translateY(0%)");*/
    /*$(".mycontent").addClass("contentCrd").removeClass("contentCrd");*/
    $(".mycontent").css("transform", "translateZ(0px) scaleY(0)");

    console.log(click);
    click = true;
  } else {
    /*$(".mycontent").removeClass("contentCrd").addClass("contentCrd");*/
    $(".mycontent").css("transform", "translateZ(0px) scaleY(1)");

    console.log(click);
    click = false;
  }
});
