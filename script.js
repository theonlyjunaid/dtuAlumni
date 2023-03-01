
//  fetch("/data/alumnicarousel.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         let alum = `<div class="swiper-slide w-max h-[460px] ">
//         <div class="flex flex-col rounded shadow overflow-hidden">
//           <div class="flex-shrink-0 relative alumni" onmouseover="show(this)" onmouseleave="hide(this)" onclick="show(this)">
//             <img class="h-[50vh] w-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=750w" alt="">
// <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
// <p class="text-3xl font-semibold">Raj soin</p>
// <p >Class 1987</p>
// </div>
//             <div class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-xl  ">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe atque quisquam iste tenetur? Cum voluptate, commodi consequatur maxime odio qui delectus id, hic, magnam eum dolores ipsum excepturi rerum!
//             </div>
//           </div>
//         </div>
//       </div><div class="swiper-slide w-max h-[460px] ">
//         <div class="flex flex-col rounded shadow overflow-hidden">
//           <div class="flex-shrink-0 relative alumni" onmouseover="show(this)" onmouseleave="hide(this)" onclick="show(this)">
//             <img class="h-[50vh] w-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=750w" alt="">
// <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
// <p class="text-3xl font-semibold">Raj soin</p>
// <p >Class 1987</p>
// </div>
//             <div class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-xl  ">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe atque quisquam iste tenetur? Cum voluptate, commodi consequatur maxime odio qui delectus id, hic, magnam eum dolores ipsum excepturi rerum!
//             </div>
//           </div>
//         </div>
//       </div><div class="swiper-slide w-max h-[460px] ">
//         <div class="flex flex-col rounded shadow overflow-hidden">
//           <div class="flex-shrink-0 relative alumni" onmouseover="show(this)" onmouseleave="hide(this)" onclick="show(this)">
//             <img class="h-[50vh] w-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=750w" alt="">
// <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
// <p class="text-3xl font-semibold">Raj soin</p>
// <p >Class 1987</p>
// </div>
//             <div class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-xl  ">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe atque quisquam iste tenetur? Cum voluptate, commodi consequatur maxime odio qui delectus id, hic, magnam eum dolores ipsum excepturi rerum!
//             </div>
//           </div>
//         </div>
//       </div><div class="swiper-slide w-max h-[460px] ">
//         <div class="flex flex-col rounded shadow overflow-hidden">
//           <div class="flex-shrink-0 relative alumni" onmouseover="show(this)" onmouseleave="hide(this)" onclick="show(this)">
//             <img class="h-[50vh] w-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=750w" alt="">
// <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
// <p class="text-3xl font-semibold">Raj soin</p>
// <p >Class 1987</p>
// </div>
//             <div class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-xl  ">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe atque quisquam iste tenetur? Cum voluptate, commodi consequatur maxime odio qui delectus id, hic, magnam eum dolores ipsum excepturi rerum!
//             </div>
//           </div>
//         </div>
//       </div><div class="swiper-slide w-max h-[460px] ">
//         <div class="flex flex-col rounded shadow overflow-hidden">
//           <div class="flex-shrink-0 relative alumni" onmouseover="show(this)" onmouseleave="hide(this)" onclick="show(this)">
//             <img class="h-[50vh] w-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=750w" alt="">
// <div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
// <p class="text-3xl font-semibold">Raj soin</p>
// <p >Class 1987</p>
// </div>
//             <div class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-xl  ">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe atque quisquam iste tenetur? Cum voluptate, commodi consequatur maxime odio qui delectus id, hic, magnam eum dolores ipsum excepturi rerum!
//             </div>
//           </div>
//         </div>
//       </div>`;


//         document.getElementById("alumniCarousel").innerHTML += alum;
//     }
// );

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

    fetch("/data/alumnicarousel.json").then(response => response.json()).then(data => {
        console.log(data);
        let alum = ``;
        for(let item of data){
            alum += ` <div class="swiper-slide  ">
        <div class="flex flex-col rounded shadow overflow-hidden">
          <div class="flex-shrink-0 relative alumni" onmouseover="show(this)" onmouseleave="hide(this)" onclick="show(this)">
            <img class="h-[50vh] w-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5cdcc14ad86cc91b80cdbf65/1558486905146-N2NCK3RXK9ZJ1PLRMEDN/Raj+Headshot+2-2019.jpg?format=750w" referrerpolicy="no-referrer" alt="">
<div class="absolute bottom-0 p-6  z-50 alumni-content text-white">
<p class="text-3xl font-semibold">Raj soin</p>
<p >Class 1969</p>
</div>
            <div class="absolute z-40 top-0 bg-black bg-opacity-75 h-full alumni-text ease-in-out duration-300 p-6 text-white text-xl  ">
Dr Rajesh K Soin, an alumnus of 1969 batch of Mechanical Engineering and now chairman and CEO of Soin LLC at Ohio in the US, donated the amount Rs 5 crore for the construction of a multipurpose hall at his alma mater Delhi Technological University
            </div>
          </div>
        </div>
      </div>`
        }
        // document.getElementById("alumnicarousel").innerHTML += alum;
    });