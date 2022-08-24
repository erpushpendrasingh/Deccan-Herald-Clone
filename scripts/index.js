import { navBar } from "../component/nav.js";
document.getElementById("navbar").innerHTML = navBar();

let plus = document.querySelectorAll(".toggle");
let show = document.querySelectorAll(".side-dropdown");
for (let i = 0; i < plus.length; i++) {
     plus[i].addEventListener("click", function () {
          show[i].classList.toggle("show");
          show.forEach((el) => {
               if (el != show[i]) {
                    el.classList.remove("show");
               }
          });
     });
}

let sideNav = document.querySelector(".nav-hamburger");
sideNav.addEventListener("click", () => {
     document.querySelector("#side-nav").classList.toggle("open");
     document
          .querySelector(".side-nav-overlay")
          .classList.toggle("overlay-active");
});

let cross = document.querySelector(".side-nav__close");
cross.addEventListener("click", () => {
     document.querySelector("#side-nav").classList.remove("open");
     document
          .querySelector(".side-nav-overlay")
          .classList.toggle("overlay-active");
});
let overlay = document.querySelector(".side-nav-overlay");
overlay.addEventListener("click", () => {
     document.querySelector("#side-nav").classList.remove("open");
     document
          .querySelector(".side-nav-overlay")
          .classList.toggle("overlay-active");
});

window.addEventListener("scroll", function () {
     let header = document.querySelector("#top-nav");
     let windowPosition = window.scrollY > 10;
     // header.classList.toggle('scrolling-active', windowPosition);
     document
          .querySelector(".navbar")
          .classList.toggle("after-scroll", windowPosition);
});
window.onload = () => {
     let rtClock = new Date();
     let hours = rtClock.getHours();
     let minutes = rtClock.getMinutes();
     let amPm = hours < 12 ? "AM" : "PM";

     hours = hours > 12 ? hours - 12 : hours;

     hours = ("0" + hours).slice(-2);
     minutes = ("0" + minutes).slice(-2);

     document.querySelector("#real-time").innerText =
          "UPDATED: " + hours + ":" + minutes + " " + amPm + " IST";
     let day = new Date().getDay();
     switch (day) {
          case 0:
               day = "SUNDAY";
               break;
          case 1:
               day = "MONDAY";
               break;
          case 2:
               day = "TUESDAY";
               break;
          case 3:
               day = "WEDNESDAY";
               break;
          case 4:
               day = "THURSDAY";
               break;
          case 5:
               day = "FRIDAY";
               break;
          case 6:
               day = "SATURDAY";
     }

     let b = rtClock.getMonth() + 1;
     switch (b) {
          case 1:
               b = "JAN";
               break;
          case 2:
               b = "FEB";
               break;
          case 3:
               b = "MAR";
               break;
          case 4:
               b = "APR";
               break;
          case 5:
               b = "MAY";
               break;
          case 6:
               b = "JUN";
               break;
          case 7:
               b = "JUL";
               break;
          case 8:
               b = "AUG";
               break;
          case 9:
               b = "SEP";
               break;
          case 10:
               b = "OCT";
               break;
          case 11:
               b = "NOV";
               break;
          case 12:
               b = "DEC";
               break;
     }
     let year = rtClock.getFullYear();
     let date = rtClock.getDate();

     document.querySelector("#real-date").innerText =
          day + " " + date + " " + b + " " + year;
};

// $(document).ready(function () {
//      $(".fi-br-search").click(function () {
//           $(".search-box").toggle();
//           $("input[type='text']").focus();
//      });
// });
// let search = document.getElementById("search");

let search_input = document.getElementById("search_input");
// console.log(search_input);
search_input.addEventListener("keypress", function (event) {
     if (event.key === "Enter") {
          event.preventDefault();
          console.log(search_input.value);
          getData(search_input.value);
     }
});

const getData = async (query) => {
     // let key = `841af73467c34891a1e3a75e58b6af41`;
     let key = `58e658e9e2f74644a72c988e1cab51f3`;
     try {
          let res = await fetch(
               `https://newsapi.org/v2/everything?q=${query}&from=2022-07-24&sortBy=publishedAt&apiKey=${key}`
          );
          let data = await res.json();
          let result = data.articles;
          displaydata(result);
          console.log(result);
     } catch (error) {
          console.log("error:", error);
     }
};
let cr = (el) => {
     return document.createElement(el);
};
let container = document.getElementById("search_result");
let searchbox = document.getElementById("searchbox");
const displaydata = (result) => {
     console.log("result:", result);
     let inputbox = cr("input");
     inputbox.setAttribute("id", "query");
     inputbox.placeholder = "Search";
     result.forEach((element) => {
          let image = cr("img");
          image.src = element.urlToImage;
          let title = document.createElement("p");
          title.innerText = element.title;
          let author = document.createElement("p");
          author.innerText = element.author;
          let content = document.createElement("p");
          content.innerText = element.content;
          let description = document.createElement("p");
          description.innerText = element.description;
          let publishedAt = document.createElement("p");
          publishedAt.innerText = element.publishedAt;
          let card = cr("div");
          card.setAttribute("class", "card");
          let imageDiv = cr("div");
          imageDiv.setAttribute("class", "imageDiv");
          let box = cr("div");
          box.setAttribute("class", "box");
          imageDiv.append(image);

          card.append(title, author, content);
          box.append(imageDiv, card);

          container.append(box);
     });
     searchbox.append(inputbox);
};
