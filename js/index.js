new WOW().init();
$(document).ready(function () {
  // Добавить плавную прокрутку до всех ссылок
  $("a").on("click", function (event) {
    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== "") {
      // Запретить поведение щелчка якоря по умолчанию
      event.preventDefault();

      // Хранить хэш
      var hash = this.hash;

      // Использование метода animate() jQuery для добавления плавной прокрутки страницы
      // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
          window.location.hash = hash;
        }
      );
    } // Конец, если
  });
});

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

$(document).ready(function () {
  var navOffset = $("#nav").offset().top;

  $(window).scroll(function () {
    var scrolled = $(this).scrollTop();

    if (scrolled > navOffset) {
      $("#wrapper").addClass("nav-fixed");
    } else if (scrolled < navOffset) {
      $("#wrapper").removeClass("nav-fixed");
    }
  });
});

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});
