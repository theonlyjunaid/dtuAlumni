function show(x) {
  x.children[2].style.display = "block";
  //  x.children[1].style.color = "white";
}
function hide(x) {
  x.children[2].style.display = "none";
  // x.children[1].style.color = "black";
}
function alumHover(x) {
  x.children[2].style.display = "block";
  x.children[1].style.display = "none";
}
function alumHoverOut(x) {
  x.children[2].style.display = "none";
  x.children[1].style.display = "block";
}

// fetch('../data/homeMainCarousel.json')
//   .then((r) => r.json())
//   .then((d) => {
//     document.querySelectorAll('.imageHomeCarousel').forEach((el, i) => {
//       el.src = `../public/img/alumni and donor photos/${d[i].name}.jpg`;
//     });

//     initCarousel();
//   });


function news(x) {
  if (x === 'donation') {

    document.getElementById('news_news').style.display = "none";
    document.getElementById('donation_news').style.display = "block";
    document.getElementById('donation_button').style.backgroundColor = "white";
    document.getElementById('donation_button').style.color = "black";
    document.getElementById('news_button').style.backgroundColor = "black";
    document.getElementById('news_button').style.color = "white";
  } else if (x === 'news') {
    document.getElementById('news_news').style.display = "block";
    document.getElementById('donation_news').style.display = "none";
    document.getElementById('news_button').style.backgroundColor = "white";
    document.getElementById('news_button').style.color = "black";
    document.getElementById('donation_button').style.backgroundColor = "black";
    document.getElementById('donation_button').style.color = "white";
  }
}

function events(x) {
  if (x === 'upcoming') {

    document.getElementById('past_events').style.display = "none";
    document.getElementById('upcoming_events').style.display = "block";
    document.getElementById('upcoming_button').style.backgroundColor = "black";
    document.getElementById('upcoming_button').style.color = "white";
    document.getElementById('past_button').style.backgroundColor = "white";
    document.getElementById('past_button').style.color = "black";
  } else if (x === 'past') {
    document.getElementById('past_events').style.display = "block";
    document.getElementById('upcoming_events').style.display = "none";
    document.getElementById('past_button').style.backgroundColor = "black";
    document.getElementById('past_button').style.color = "white";
    document.getElementById('upcoming_button').style.backgroundColor = "white";
    document.getElementById('upcoming_button').style.color = "black";
  }
}



fetch("/data/news.json").then(response => response.json())
    .then(data => {
        let dat = ``;
        for(let item of data){
            dat += ` <li>
    <a onclick="showPopups('side-popup-alumni', '${item.info}', '${item.title}')" class=" cursor-pointer block px-4 py-2 text-sm font-[500] text-white hover:bg-gray-600 rounded-lg hover:bg-opacity-50 hover:text-blue-200 ease-in-out duration-300 truncate">${item.title}  <p class="text-white font-[350]">${item.date}</p>
    </a>
  </li>`;

        }
        document.getElementById("news_news").innerHTML += dat;
        console.log(dat);
    });
fetch("/data/donations.json").then(response => response.json())
    .then(data => {
        let dat = ``;
        for(let item of data){
            dat += ` <li>
    <a onclick="showPopups('side-popup-alumni', '${item.info}', '${item.title}')"  class="cursor-pointer block px-4 py-2 text-sm font-[500] text-white hover:bg-gray-600 rounded-lg hover:bg-opacity-50 hover:text-blue-200 ease-in-out duration-300 truncate ">${item.title}  <p class="text-white font-[350]">${item.date}</p>
    </a>
  </li>`;

        }
        document.getElementById("donation_news").innerHTML += dat;
        document.getElementById("news_news").innerHTML += dat;
        console.log(dat);
    });

    // dates should ONLY be in these formats: 23-March-2023 or 23-Mar-2023 or 23 Mar 2023
    fetch("./data/events.json").then(response => response.json())
    .then(data => {
        let dat = ``;
        for(let item of data){
            let pickedDatestr = item.date
            var pickedDate = new Date(Date.parse(pickedDatestr.replace(/-/g, " ")));
            var todaysDate = new Date();
            var isUpcoming = pickedDate >= todaysDate;
            
            dat += isUpcoming? ` <li class="pb-3 sm:pb-4 pt-4">
            <div class="flex flex-col md:flex-row items-center space-x-4 ">
            <div class="flex-shrink-0">
               <img class="h-24 w-60 object-cover rounded-md hover:cursor-pointer" src="${item.image}" alt="Neil image"
               onClick="showModal('${item.image}')">
            </div>
            <div class="flex flex-row justify-between md:w-full">
               <div>
                 <p class="text-lg font-medium text-gray-900 truncate">
                    ${item.title}
                 </p>
                 <div class="flex-row flex gap-2">
                   <p class="text-sm text-gray-500 truncate">
                      ${item.date}
                   </p>
                   <div class="inline-flex items-center md:hidden">
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border border-green-600">Upcoming</span>
                  </div>
                 </div>
               </div>
              <div class="items-center hidden md:inline-flex">
                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border border-green-600">Upcoming</span>
              </div>
            </div>
            
         </div>
  </li>` : 
  `
  <li class="pb-3 sm:pb-4 pt-4">
            <div class="flex flex-col md:flex-row items-center space-x-4 ">
               <div class="flex-shrink-0">
               <img class="h-24 w-60 object-cover rounded-md hover:cursor-pointer" src="${item.image}" alt="Neil image"
               onClick="showModal('${item.image}')">
            </div>
            <div class="flex flex-row justify-between md:w-full">
               <div>
                 <p class="text-lg font-medium text-gray-900 truncate">
                    ${item.title}
                 </p>
                 <div class="flex-row flex gap-2">
                   <p class="text-sm text-gray-500 truncate">
                      ${item.date}
                   </p>
                      <div class="inline-flex items-center md:hidden">
                        <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border border-red-400">past</span>
                      </div>
                    </div>
                  </div>
                 <div class="items-center hidden md:inline-flex">
                  <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border border-red-400">past</span>
                </div>
               </div>
               
            </div>
          </li>
         `;

        }
        document.getElementById("events_list").innerHTML += dat;
        console.log(dat);
    });
    

  
    //notable alumni
    // fetch("/data/alumnicarousel.json").then(response => response.json())
    // .then(data => {
    //     let dat = ``;
    //     for(let item of data){
    //         dat += ` 
    //         <div class="swiper-slide  ">
    //         <div class="flex flex-col rounded shadow overflow-hidden">
    //           <div class="flex-shrink-0 relative alumni" onclick="showPopups('side-popup-alumni')"
    //             onclick="show(this)">
    //             <img class="h-[50vh] w-full object-cover"
    //               src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=4000w"
    //               alt="">
    //             <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
    //               <p class="text-xl md:text-2xl  lg:text-3xl font-semibold">${item.name}</p>
    //               <p>Class of ${item.batch}</p>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //         `;

    //     }
    //     document.getElementById("alumnicarousel").innerHTML = dat;})
    //     document.getElementById("notedAlumni").innerHTML = `
    //     <div x-data="{swiper: null}" x-init="swiper = new Swiper($refs.container, {
    //       loop: true,
    //       slidesPerView: 1,
    //       spaceBetween: 0,
    //    pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //    autoplay: {
    //       delay: 3000,
    //     },
    //       breakpoints: {
    //         640: {
    //           slidesPerView: 2,
    //           spaceBetween: 20,
    //           slidesPerGroup: 2,
    //         },
    //         768: {
    //           slidesPerView: 3,
    //           spaceBetween: 20,
    //           slidesPerGroup: 3,
    //         },
    //         1024: {
    //           slidesPerView: 4,
    //           spaceBetween: 20,
    //           slidesPerGroup: 4,
    //         },
    //       },
    //     })" class="relative w-12/12 mx-auto my-10 mb-28 px-10">
    //       <p class="text-3xl font-bold py-2">Notable Alumni</p>
    
    //       <div class="swiper-container" x-ref="container">
    //         <div class="swiper-wrapper" id="alumnicarousel">
    //         ${dat}
    //         </div>
    //         </div>
    //         </div>

    //         </div>
    //         </div>
    //         <div class="swiper-pagination absolute -bottom-6 flex gap-1 "></div>
    //         <div class="absolute  -bottom-15 right-16 z-10 flex items-center">
    //           <button @click="swiper.slidePrev()"
    //             class="bg-white m-2  flex justify-center items-center w-10 h-10 rounded-full shadow shadow-lg focus:outline-none">
    //             <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-left w-6 h-6">
    //               <path fill-rule="evenodd"
    //                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
    //                 clip-rule="evenodd"></path>
    //             </svg>
    //           </button>
    //         </div>
    //         <div class="absolute  m-2 -bottom-15 right-5 z-10 flex items-center">
    //           <button @click="swiper.slideNext()"
    //             class="bg-white flex justify-center items-center w-10 h-10 rounded-full shadow shadow-lg focus:outline-none">
    //             <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-right w-6 h-6">
    //               <path fill-rule="evenodd"
    //                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
    //                 clip-rule="evenodd"></path>
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //       <!-- Alumni details SideNav -->
    //       <section id="side-popup-alumni" class="hidden">
    //         <div class="fixed top-0 z-30 right-0 h-[100vh] w-[100vw] bg-black bg-opacity-50"></div>
    //         <div id="read-more" class="fixed top-0 z-40 right-0 h-[100vh] w-[100vw] lg:w-[50vw] bg-gray-50 flex flex-col gap-4 p-8">
    //           <span id="close-popup-alumni" class="material-symbols-outlined place-self-end cursor-pointer">
    //               cancel
    //           </span>
    //           <h3 id="side-popup-alumni-head" class="text-2xl font-semibold"></h3>
    //           <p id="side-popup-alumni-paragraph" class="text-lg text-gray-700 overflow-y-auto"></p>
    //         </div>
    //       </section>
    //     `
    //     console.log(dat);
    // });

  //   document.getElementById('alumnicarousel').innerHTML = `<div class="swiper-slide ">
  //   <div class="flex flex-col rounded shadow overflow-hidden">
  //     <div class="flex-shrink-0 relative alumni" onclick="showPopups('side-popup-alumni')"
  //       >
  //       <img class="h-[50vh] w-full object-cover"
  //         src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=750w"
  //         alt="">
  //       <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
  //         <p class="text-xl md:text-2xl  lg:text-3xl font-semibold">Raj soin1</p>
  //         <p>Class 1969</p>
  //       </div>
  //       <div
  //         class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-md md:text-lg lg:text-xl  ">
  //         Dr Rajesh K Soin, an alumnus of 1969 batch of Mechanical Engineering and now chairman and CEO of Soin
  //         LLC at Ohio in the US, donated the amount Rs 5 crore for the construction of a multipurpose hall at
  //         his alma mater Delhi Technological University
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // <div class="swiper-slide ">
  //   <div class="flex flex-col rounded shadow overflow-hidden">
  //     <div class="flex-shrink-0 relative alumni" onclick="showPopups('side-popup-alumni')"
  //       >
  //       <img class="h-[50vh] w-full object-cover"
  //         src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT8xQMR7KOxGyMcjeRxEf-c9yDrR2Jr5EEseSg_0xKodBeUhxhqqtSgaztN5gQZ90y-Dy6uz9C2FRgn3zs"
  //         alt="">
  //       <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
  //         <p class="text-xl md:text-2xl  lg:text-3xl font-semibold">Raj soin2</p>
  //         <p>Class 1965</p>
  //       </div>
  //       <div
  //         class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-md md:text-lg lg:text-xl  ">
  //         Dr Rajesh K Soin, an alumnus of 1969 batch of Mechanical Engineering and now chairman and CEO of Soin
  //         LLC at Ohio in the US, donated the amount Rs 5 crore for the construction of a multipurpose hall at
  //         his alma mater Delhi Technological University
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // <div class="swiper-slide ">
  //   <div class="flex flex-col rounded shadow overflow-hidden">
  //     <div class="flex-shrink-0 relative alumni" onclick="showPopups('side-popup-alumni')"
  //       >
  //       <img class="h-[50vh] w-full object-cover"
  //         src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=750w"
  //         alt="">
  //       <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
  //         <p class="text-xl md:text-2xl  lg:text-3xl font-semibold">Raj soin3</p>
  //         <p>Class 1967</p>
  //       </div>
  //       <div
  //         class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-md md:text-lg lg:text-xl   ">
  //         Dr Rajesh K Soin, an alumnus of 1969 batch of Mechanical Engineering and now chairman and CEO of Soin
  //         LLC at Ohio in the US, donated the amount Rs 5 crore for the construction of a multipurpose hall at
  //         his alma mater Delhi Technological University
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // <div class="swiper-slide ">
  //   <div class="flex flex-col rounded shadow overflow-hidden">
  //     <div class="flex-shrink-0 relative alumni" onclick="showPopups('side-popup-alumni')"
  //       >
  //       <img class="h-[50vh] w-full object-cover"
  //         src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=750w"
  //         alt="">
  //       <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
  //         <p class="text-xl md:text-2xl  lg:text-3xl font-semibold">Raj soin4</p>
  //         <p>Class 1968</p>
  //       </div>
  //       <div
  //         class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-md md:text-lg lg:text-xl   ">
  //         Dr Rajesh K Soin, an alumnus of 1969 batch of Mechanical Engineering and now chairman and CEO of Soin
  //         LLC at Ohio in the US, donated the amount Rs 5 crore for the construction of a multipurpose hall at
  //         his alma mater Delhi Technological University
  //       </div>
  //     </div>
  //   </div>
  // </div>`

     //Alumni Sidenav
     function showPopups (popupId, text, name){
      document.getElementById(`${popupId}`).children[1].children[1].innerHTML = name;
      document.getElementById(`${popupId}`).children[1].children[2].innerHTML = text;
      document.getElementById(`${popupId}`).classList.remove("hidden");
    }
    function closePopups (popupId){
      document.getElementById(`${popupId}`).classList.add("hidden");
    }
    document.getElementById('close-popup-alumni').addEventListener('click',()=>closePopups('side-popup-alumni'))
  

    // Events section image modal
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    function showModal(src) {
        modal.classList.remove('hidden');
        modalImg.src = src;
    }
    function closeModal() {
        modal.classList.add('hidden');
    }


  //Numbers increase animation
    const counterUp = window.counterUp.default

    const callback = entries => {
      entries.forEach( entry => {
        const el = entry.target
        if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
          counterUp( el, {
            duration: 2000,
            delay: 16,
          } )
          el.classList.add( 'is-visible' )
        }
      } )
    }
    
    const IO = new IntersectionObserver( callback, { threshold: 1 } )
    
    //No. of iterations is equal to no. of stastistics that we are showing
    for(i=0; i<3; i++){
    const el = document.querySelectorAll( '.counter' )[i]
    IO.observe( el )
    }  


   


//homepage alumni carousel
  fetch('../data/alumnicarousel.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageAlum-1').forEach((el, i) => {
      el.src = d[i].image;
    });
    document.querySelectorAll('.nameAlum-1').forEach((el, i) => {
      el.innerHTML = d[i].name;
    });
    document.querySelectorAll('.classAlum-1').forEach((el, i) => {
      el.innerHTML = d[i].class;
    });
    document.querySelectorAll('.textAlum-1').forEach((el, i) => {
      el.innerHTML = d[i].text;
    });

    initCarousel1();
  });
 
  
  function initCarousel1() {
  
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
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 3,
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
  
   //big carousel of home page
  fetch('../data/homeMainCarousel.json')
  .then((r) => r.json())
  .then((d) => {
    document.querySelectorAll('.imageMainCarousel').forEach((el, i) => {
      el.src = d[i].image;
    });

    initMainCarousel();
  });

  function initMainCarousel() {
  
    const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
    },
    // cssMode: true,
    loop: true,
    slidesPerView:1,
    spaceBetween: 0,
    allowTouchMove: false,
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    stopOnLastSlide: false,
    // autoplay: {
    //   delay: 5000,
    //   pauseOnMouseEnter: true,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next-main",
      prevEl: ".swiper-button-prev-main",
    },
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          },
    });
  }
