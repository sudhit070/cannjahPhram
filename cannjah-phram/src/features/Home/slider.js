let second_slider = $(".owl-left-carousel").owlCarousel({
  loop: true,
  margin: -290,
  nav: true,
  dots: false,
  items: 3,
  navText: [
    "<i className='fa fa-chevron-left'></i>",
    "<i className='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
  },
});

let first_slider = $(".owl-right-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  items: 1,
  navText: [
    "<i className='fa fa-chevron-left'></i>",
    "<i className='fa fa-chevron-right'></i>",
  ],
});

second_slider.on("click", ".owl-next", function () {
  first_slider.trigger("next.owl.carousel");
});
second_slider.on("click", ".owl-prev", function () {
  first_slider.trigger("prev.owl.carousel");
});
first_slider.on("click", ".owl-next", function () {
  second_slider.trigger("next.owl.carousel");
});
first_slider.on("click", ".owl-prev", function () {
  second_slider.trigger("prev.owl.carousel");
});

second_slider.on("translated.owl.carousel", function () {
  slide_vi();
});

function slide_vi() {
  let active_slide = Array.from(
    document.querySelectorAll(".owl-left-carousel .owl-item.active")
  );
  let all_slide = Array.from(
    document.querySelectorAll(".owl-left-carousel .owl-item")
  );

  all_slide.forEach((items, index) => {
    if (active_slide.includes(items)) {
      items.style.transform = "rotate(13deg) scale(1)";
      items.style.opacity = "1";
    } else {
      items.style.transform = "rotate(13deg) scale(0.8)";
      items.style.opacity = "0";
    }
  });
}

slide_vi();
