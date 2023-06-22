//for donors wall and notable alumni pages

// tailwind.config = {
//   theme: {
//     extend: {
//       colors: {
//         clifford: '#da373d',
//       }
//     }
//   },
//   plugins: [
//     require('@tailwindcss/line-clamp'),
//     // ...
//   ],
// }

function scrollPageUp(element){
  element.scrollIntoView()
}

function alumHover(x) {
    x.children[2].style.display = "block";
    x.children[1].style.display = "none";
  }
  function alumHoverOut(x) {
    x.children[2].style.display = "none";
    x.children[1].style.display = "block";
  }

function showPopups (popupId, text, name){

  
    document.getElementById(`${popupId}`).children[1].children[1].innerHTML = name;
    document.getElementById(`${popupId}`).children[1].children[2].innerHTML = text;
    document.getElementById(`${popupId}`).classList.remove("hidden");
  }
  function closePopups (popupId){
    document.getElementById(`${popupId}`).classList.add("hidden");
  }
  document.getElementById('close-popup-alumni').addEventListener('click',()=>closePopups('side-popup-alumni'))

  function truncateText(text){
    if (text.length > 185){
      return text.slice(0,180) + "...Read More"
    }
    return text
  }



  

  fetch('../data/contributoryFund.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageAlum').forEach((el, i) => {
      el.src = `../public/img/alumni and donor photos/${d[i].name}.jpg`;
    });
    document.querySelectorAll('.nameAlum').forEach((el, i) => {
      el.innerHTML = d[i].name;
    });
    document.querySelectorAll('.classAlum').forEach((el, i) => {
      el.innerHTML = d[i].amount;
    });
    document.querySelectorAll('.textAlum').forEach((el, i) => {
      el.innerHTML = d[i].purpose??`${d[i].name} donated ${d[i].amount} towards the University's Contributory Fund`;
    });

    initCarousel();
  });


  fetch('../data/ScholarshipsAndMedals.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageScholarshipAndMedal').forEach((el, i) => {
      el.src = `../public/img/alumni and donor photos/${d[i].name}.jpg`;
    });
    document.querySelectorAll('.nameScholarshipAndMedal').forEach((el, i) => {
      el.innerHTML = d[i].name;
    });
    document.querySelectorAll('.classScholarshipAndMedal').forEach((el, i) => {
      el.innerHTML = d[i].amount;
    });
    document.querySelectorAll('.textScholarshipAndMedal').forEach((el, i) => {
      el.innerHTML = truncateText(d[i].criteria_for_scholarship);
    });

    initCarouselScholarship();
  });

  fetch('../data/alumnicarousel.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageCorpus').forEach((el, i) => {
      el.src = `../public/img/alumni and donor photos/${d[i].name}.jpg`;
    });
    document.querySelectorAll('.nameCorpus').forEach((el, i) => {
      el.innerHTML = d[i].name;
    });
    document.querySelectorAll('.classCorpus').forEach((el, i) => {
      el.innerHTML = d[i].class;
    });
    document.querySelectorAll('.textCorpus').forEach((el, i) => {
      el.innerHTML = truncateText(d[i].text);
    });

    initCarouselCorpus();
  });


function initCarousel() {

  const swiper = new Swiper('.swiper-container-alumni', {
    cssMode: true,
    loop: true,
    slidesPerView:1,
    spaceBetween: 30,
    stopOnLastSlide: false,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,

  });

}


function initCarouselScholarship() {

  const swiper2 = new Swiper('.swiper-container-scholarship', {
    cssMode: true,
    loop: true,
    slidesPerView:1,
    spaceBetween: 30,
    stopOnLastSlide: false,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,

  });

}

function initCarouselCorpus() {

  const swiper3 = new Swiper('.swiper-container-corpus', {
    cssMode: true,
    loop: true,
    slidesPerView:1,
    spaceBetween: 30,
    stopOnLastSlide: false,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,

  });

}


fetch('../data/alumnicarousel.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageAlum-1').forEach((el, i) => {
      el.src = `../public/img/alumni and donor photos/${d[i].name}.jpg`;
      // el.onerror = function(){ el.src =`../public/img/alumni and donor photos/${d[i].name}.png`}
      // el.onerror = function(){ el.src =`../public/img/blank-profile-picture.png`}
    });
    document.querySelectorAll('.nameAlum-1').forEach((el, i) => {
      el.innerHTML = d[i].name;
    });
    document.querySelectorAll('.classAlum-1').forEach((el, i) => {
      el.innerHTML = d[i].class;
    });
    document.querySelectorAll('.textAlum-1').forEach((el, i) => {
      el.innerHTML = truncateText(d[i].text);
    });

    initCarouselAlumni1();
  });

  function initCarouselAlumni1() {

    const swiper = new Swiper('.swiper-container-alumni-1', {
      cssMode: true,
      loop: true,
      slidesPerView:1,
      spaceBetween: 30,
      stopOnLastSlide: false,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
  
    });
  
  }

  fetch('../data/businessAlumni.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageAlum-2').forEach((el, i) => {
      el.src = `../public/img/alumni and donor photos/${d[i].name}.jpg`;
    });
    document.querySelectorAll('.nameAlum-2').forEach((el, i) => {
      el.innerHTML = d[i].name;
    });
    document.querySelectorAll('.classAlum-2').forEach((el, i) => {
      el.innerHTML = d[i].class;
    });
    document.querySelectorAll('.textAlum-2').forEach((el, i) => {
      el.innerHTML = truncateText(d[i].text);
    });

    initCarouselAlumni2();
  });

  function initCarouselAlumni2() {

    const swiper = new Swiper('.swiper-container-alumni-2', {
      cssMode: true,
      loop: true,
      slidesPerView:1,
      spaceBetween: 30,
      stopOnLastSlide: false,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
  
    });
  
  }

  fetch('../data/scienceAndTechnologyAlumni.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageAlum-3').forEach((el, i) => {
      el.src = `../public/img/alumni and donor photos/${d[i].name}.jpg`;
    });
    document.querySelectorAll('.nameAlum-3').forEach((el, i) => {
      el.innerHTML = d[i].name;
    });
    document.querySelectorAll('.classAlum-3').forEach((el, i) => {
      el.innerHTML = d[i].class;
    });
    document.querySelectorAll('.textAlum-3').forEach((el, i) => {
      el.innerHTML = truncateText(d[i].text);
    });

    initCarouselAlumni3();
  });

  function initCarouselAlumni3() {

    const swiper = new Swiper('.swiper-container-alumni-3', {
      cssMode: true,
      loop: true,
      slidesPerView:1,
      spaceBetween: 30,
      stopOnLastSlide: false,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
  
    });
  
  }

  fetch('../data/civilServiceAlumni.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageAlum-4').forEach((el, i) => {
      el.src = `../public/img/alumni and donor photos/${d[i].name}.jpg`;
    });
    document.querySelectorAll('.nameAlum-4').forEach((el, i) => {
      el.innerHTML = d[i].name;
    });
    document.querySelectorAll('.classAlum-4').forEach((el, i) => {
      el.innerHTML = d[i].class;
    });
    document.querySelectorAll('.textAlum-4').forEach((el, i) => {
      el.innerHTML = truncateText(d[i].text);
    });

    initCarouselAlumni4();
  });

  function initCarouselAlumni4() {

    const swiper = new Swiper('.swiper-container-alumni-4', {
      cssMode: true,
      loop: true,
      slidesPerView:1,
      spaceBetween: 30,
      stopOnLastSlide: false,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
  
    });
  
  }


  fetch('../data/artsAndEntertainmentAlumni.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageAlum-5').forEach((el, i) => {
      el.src = `../public/img/alumni and donor photos/${d[i].name}.jpg`;
    });
    document.querySelectorAll('.nameAlum-5').forEach((el, i) => {
      el.innerHTML = d[i].name;
    });
    document.querySelectorAll('.classAlum-5').forEach((el, i) => {
      el.innerHTML = d[i].class;
    });
    document.querySelectorAll('.textAlum-5').forEach((el, i) => {
      el.innerHTML = truncateText(d[i].text);
    });

    initCarouselAlumni5();
  });

  function initCarouselAlumni5() {

    const swiper = new Swiper('.swiper-container-alumni-5', {
      cssMode: true,
      loop: true,
      slidesPerView:1,
      spaceBetween: 30,
      stopOnLastSlide: false,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
  
    });
  
  }