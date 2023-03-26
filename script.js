function show(x) {
  x.children[2].style.display = "block";
  //  x.children[1].style.color = "white";
}
function hide(x) {
  x.children[2].style.display = "none";
  // x.children[1].style.color = "black";
}
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



fetch("/data/donations.json").then(response => response.json())
    .then(data => {
        let dat = ``;
        for(let item of data){
            dat += ` <li>
    <a href="#" class="block px-4 py-2 text-sm font-[500] text-white hover:bg-gray-600 rounded-lg hover:bg-opacity-50 hover:text-blue-200 ease-in-out duration-300 truncate ">${item.title}  <p class="text-white font-[350]">${item.date}</p>
    </a>
  </li>`;

        }
        document.getElementById("donation_news").innerHTML += dat;
        console.log(dat);
    });
fetch("/data/news.json").then(response => response.json())
    .then(data => {
        let dat = ``;
        for(let item of data){
            dat += ` <li>
    <a href="#" class="block px-4 py-2 text-sm font-[500] text-white hover:bg-gray-600 rounded-lg hover:bg-opacity-50 hover:text-blue-200 ease-in-out duration-300 truncate">${item.title}  <p class="text-white font-[350]">${item.date}</p>
    </a>
  </li>`;

        }
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
    for(i=0; i<4; i++){
    const el = document.querySelectorAll( '.counter' )[i]
    IO.observe( el )
    }  