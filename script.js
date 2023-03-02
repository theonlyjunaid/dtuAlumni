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

  