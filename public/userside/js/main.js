let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

if (!isMobile) {
    $(window).resize(function() {
        if ($(window).width() < 1048){
            if($(".mobile-wrapper").is(":visible")){
                $(".mobile-wrapper").hide();
            }
        } else {
            $(".mobile-wrapper").show();
        }
    })
}



if ($(window).width() < 1048){
    $(".mobile-wrapper").hide();
} else {
    $(".mobile-wrapper").show();
}

$(".nav-icon-btn").on('click', function (){
    $(".mobile-wrapper").fadeIn()
})

$("#mobile-close-search-button").on('click', function (){
    $(".mobile-wrapper").fadeOut()
})


let knjige = $("#searchBoxList");
let form = $('#searchForm');
let imageurl = "";

function search(){
    if ($("#SearchBar").val().length >= 3){

        setTimeout(function () {


            $.ajax({
                type: "POST",
                url: "/searchweb",
                headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
                data: form.serialize(),
                success:function(data){
                    setTimeout(function () {
                        knjige.empty()
                        imageurl = "";
                        if($("#SearchBar").val().length >= 3 && data.books[0] != null){
                            $("#searchBoxResults").fadeIn();
                            $.each(data.books, function (k, book) {
                                if(book.picture === 'book-placeholder.png'){
                                    imageurl = 'imgs/book-placeholder.png';
                                }else {
                                    imageurl = 'storage/uploads/books/' + book.picture;
                                }
                                knjige.append(`
                                                <li class="list-group-item mb-2" style="border:0">
                                                        <div class="media align-items-center">
                                                            <a href="/knjige/${book.id}" class="avatar mr-3">
                                                                <img alt="IMG" src="${imageurl}" style="width: 48px;height: 80px;object-fit: fill">
                                                            </a>
                                                            <div class="media-body">
                                                                <a href="/knjige/${book.id}"><span class="name mb-0">${book.title}</span></a>
                                                            </div>
                                                        </div>
                                                </li>
                                `).show('slow');
                            })
                        }else {
                            $("#searchBoxResults").fadeOut();
                        }


                    },300)
                },
            });
        }, 300);
    }
}


if (!isMobile) {
    $(document).click(function () {
        $("#searchBoxResults").hide()
    });
}

function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#password_confirm").val();

    if(password.length > 8 || confirmPassword.length >= 8){
        if (password != confirmPassword) {
            $(".invalid-feedback").html(" Lozinke se ne poklapaju!");
            $(".invalid-feedback").addClass("d-flex");
            $("#submitDugme").prop("disabled", true);
            return false;
        } else {
            $(".invalid-feedback").removeClass("d-flex");
            $("#submitDugme").prop("disabled", false);
            return true;
        }
    }
    else{
        $(".invalid-feedback").html("Lozinka treba da sadrži više od 8 karaktera!");
        $(".invalid-feedback").addClass("d-flex");
    }
}

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        aos_init();
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });



  /**
   * Initiate Pure Counter
   */
  new PureCounter();



})();
