// import { footer } from "../component/footerLink.js";
// document.getElementById("foot").innerHTML = footer();
import { navBar } from "../component/nav.js";
document.getElementById("navbar").innerHTML = navBar();

let specialNews = [
     {
          href: "https://www.deccanherald.com/national/national-politics/after-sharad-pawar-declines-oppn-considering-gopalkrishna-gandhi-farooq-abdullah-for-presidential-polls-1118415.html",
          title: "oppn mulls 2 names for prez polls",
     },
     {
          href: "https://www.deccanherald.com/business/business-news/disney-could-lose-2-crore-subscribers-after-ceding-ipl-media-rights-1118395.html,",
          title: "disney+ may lose 2 cr subscribers",
     },
     {
          href: "https://www.deccanherald.com/international/world-news-politics/pakistanis-asked-to-drink-less-tea-to-cut-imports-1118388.html",
          title: "Pakistanis asked to drink less tea",
     },
     {
          href: "https://www.deccanherald.com/gallery-categories/dh-galleries",
          title: "DH photo galleries",
     },
     {
          href: "https://www.deccanherald.com/business/us-fed-hikes-interest-rate-by-075-points-biggest-since-1994-1118503.html",
          title: "US FED'S BIGGEST INTEREST RATE HIKE SINCE 1994",
     },
];

let dhPicks = [
     {
          href: "https://www.deccanherald.com/national/national-politics/after-sharad-pawar-declines-oppn-considering-gopalkrishna-gandhi-farooq-abdullah-for-presidential-polls-1118415.html",
          title: "Bihar becomes Agnipath over Modi's new hiring scheme",
     },
     {
          href: "https://www.deccanherald.com/business/business-news/disney-could-lose-2-crore-subscribers-after-ceding-ipl-media-rights-1118395.html,",
          title: "Political significance of UP’s bulldozer demolitions",
     },
     {
          href: "https://www.deccanherald.com/international/world-news-politics/pakistanis-asked-to-drink-less-tea-to-cut-imports-1118388.html",
          title: "Who’s got it right on EVs: Musk or Buffett?",
     },
     {
          href: "https://www.deccanherald.com/gallery-categories/dh-galleries",
          title: "Fed-triggered recession in US may cost Biden a 2nd term",
     },
     {
          href: "https://www.deccanherald.com/business/us-fed-hikes-interest-rate-by-075-points-biggest-since-1994-1118503.html",
          title: "Tax ruling emboldens states against Modi’s government",
     },
];
let latestNews = [
     {
          href: "https://www.deccanherald.com/national/national-politics/after-sharad-pawar-declines-oppn-considering-gopalkrishna-gandhi-farooq-abdullah-for-presidential-polls-1118415.html",
          title: "Mayawati, Varun Gandhi slam govt's 'Agnipath' scheme",
     },
     {
          href: "https://www.deccanherald.com/business/business-news/disney-could-lose-2-crore-subscribers-after-ceding-ipl-media-rights-1118395.html,",
          title: "Overnight rain in Delhi brings pleasant morning",
     },
     {
          href: "https://www.deccanherald.com/international/world-news-politics/pakistanis-asked-to-drink-less-tea-to-cut-imports-1118388.html",
          title: "India fully supports strong, unified ASEAN: Jaishankar",
     },
     {
          href: "https://www.deccanherald.com/gallery-categories/dh-galleries",
          title: "Shehbaz, Imran's spouses richer than husbands: Report",
     },
     {
          href: "https://www.deccanherald.com/business/us-fed-hikes-interest-rate-by-075-points-biggest-since-1994-1118503.html",
          title: "Cong complaint against Delhi cops for thrashing members",
     },
];
let trendNews = [
     {
          href: "https://www.deccanherald.com/national/national-politics/after-sharad-pawar-declines-oppn-considering-gopalkrishna-gandhi-farooq-abdullah-for-presidential-polls-1118415.html",
          title: "People gather in support of Nupur Sharma in Ahmedabad",
     },
     {
          href: "https://www.deccanherald.com/business/business-news/disney-could-lose-2-crore-subscribers-after-ceding-ipl-media-rights-1118395.html,",
          title: "Supa Dam goes dry, opens floodgates of memories",
     },
     {
          href: "https://www.deccanherald.com/international/world-news-politics/pakistanis-asked-to-drink-less-tea-to-cut-imports-1118388.html",
          title: "31 students at 2 Bengaluru schools test Covid positive",
     },
     {
          href: "https://www.deccanherald.com/gallery-categories/dh-galleries",
          title: "Inspired by Tirumala, Iskcon builds temple in Bengaluru",
     },
     {
          href: "https://www.deccanherald.com/business/us-fed-hikes-interest-rate-by-075-points-biggest-since-1994-1118503.html",
          title: "Bengaluru sees 3-fold rise in Covid cases",
     },
];
$(document).ready(function () {
     specialNews.forEach((el) => {
          let a = document.createElement("a");
          let p = document.createElement("p");
          p.setAttribute("class", "specials_news");
          a.setAttribute("target", "_blank");
          a.setAttribute("href", el.href);
          a.innerText = el.title;
          p.append(a);
          $(".specials").append(p);
     });
});

$(document).ready(function () {
     dhPicks.forEach((el) => {
          let li = document.createElement("li");
          let a = document.createElement("a");
          a.setAttribute("target", "_blank");
          a.setAttribute("href", el.href);
          a.innerText = el.title;
          li.append(a);
          $("#dh-picks").append(li);
     });
});
$(document).ready(function () {
     latestNews.forEach((el) => {
          let li = document.createElement("li");
          let a = document.createElement("a");
          a.setAttribute("target", "_blank");
          a.setAttribute("href", el.href);
          a.innerText = el.title;
          li.append(a);
          $("#latest").append(li);
     });
});
$(document).ready(function () {
     trendNews.forEach((el) => {
          let li = document.createElement("li");
          let a = document.createElement("a");
          a.setAttribute("target", "_blank");
          a.setAttribute("href", el.href);
          a.innerText = el.title;
          li.append(a);
          $("#trendNews").append(li);
     });
});

let plus1 = document.querySelectorAll(".side-nav-list");
let list = document.querySelectorAll(".lists");
for (let i = 0; i < plus1.length; i++) {
     plus1[i].addEventListener("click", function () {
          list[i].classList.toggle("show");
          plus1[i].classList.toggle("collapsed");
          removeClass(list[i], plus1[i]);
     });
}

function removeClass(x, y) {
     list.forEach((el) => {
          if (el != x) {
               el.classList.remove("show");
          }
     });
     plus1.forEach((el) => {
          if (el != y) {
               el.classList.remove("show");
               el.classList.add("collapsed");
          }
     });
}
