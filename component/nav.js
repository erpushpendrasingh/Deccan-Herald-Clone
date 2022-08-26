const navBar = () => {
     return ` <header>
        <!--* Side Nav Part Start -->
        <div id="side-nav">
            <ul class="side-nav-main">
                <!-- <li><i class="fa-solid fa-xmark"></i></li> -->
                <li> <a href="index.html">Home</a></li>
                <li class="side-dropdown">
                    <a href="Bengaluru.html" class="toggle">Bengaluru </a> 
                    <ul class="side-nav-sub">
                        <li> <a href="">Top Stories</a></li>
                        <li> <a href="">Crime</a></li>
                        <li> <a href="">Politics</a></li>
                        <li> <a href="">Infrastructure</a></li>
                        <li> <a href="">Life in the City</a></li>
                        <li> <a href="">Bengaluru 2040</a></li>
                    </ul>
                </li>
                <li class="side-dropdown">
                    <a href="" class="toggle">Karnataka</a>
                    <ul class="side-nav-sub">
                        <li> <a href="">Top Stories</a></li>
                        <li> <a href="">Politics</a></li>
                        <li> <a href="">Districts</a></li>
                        <li> <a href="">22in22</a></li>
                    </ul>
                </li>
                <li class="side-dropdown">
                    <a href="national.html" class="toggle">National</a>
                    <ul class="side-nav-sub">
                        <li> <a href="">Politics</a></li>
                        <li> <a href="">Coronavirus</a></li>
                        <li> <a href="">North and Central</a></li>
                        <li> <a href="">East and Northeast</a></li>
                        <li> <a href="">South</a></li>
                        <li> <a href="">West </a></li>
                    </ul>
                </li>
                <li class="side-dropdown">
                    <a href="#" class="toggle">Sports</a>
                    <ul class="side-nav-sub">
                        <li> <a href="">Cricket</a></li>
                        <li> <a href="">Formula 1</a></li>
                        <li> <a href="">Football</a></li>
                        <li> <a href="">Tennis</a></li>
                        <li> <a href="">Sportscene</a></li>
                        <li> <a href="">Other Sports</a></li>
                    </ul>
                </li>
                <li class="side-dropdown">
                    <a href="#" class="toggle">Business</a>
                    <ul class="side-nav-sub">
                        <li> <a href="">Business News</a></li>
                        <li> <a href="">Family Finance</a></li>
                        <li> <a href="">Technology</a></li>
                        <li> <a href="">DH Wheels</a></li>
                        <li> <a href="">Budget 2022</a></li>
                    </ul>
                </li>
                <li class="side-dropdown">
                    <a href="#" class="toggle">Opinion</a>
                    <ul class="side-nav-sub">
                        <li> <a href="">DH Views</a></li>
                        <li> <a href="">Editorials</a></li>
                        <li> <a href="">Panorama</a></li>
                        <li> <a href="">Comment</a></li>
                        <li> <a href="">In Perspective</a></li>
                        <li> <a href="">Right in the Middle</a></li>
                    </ul>
                </li>
                <li class="side-dropdown">
                    <a href="#" class="toggle">Features</a>
                    <ul class="side-nav-sub">
                        <li> <a href="">Metrolife</a></li>
                        <li> <a href="">Entertainment</a></li>
                        <li> <a href="">Travel</a></li>
                        <li> <a href="">Spectrum</a></li>
                        <li> <a href="">Sunday Herald</a></li>
                        <li> <a href="">Living</a></li>
                        <li> <a href="n">DH Education</a></li>
                    </ul>
                </li>
                <li class="side-dropdown">
                    <a href="video.html" class="toggle">Videos</a>
                    <ul class="side-nav-sub">
                        <li> <a href="">Latest Videos</a></li>
                        <li> <a href="">Bengaluru</a></li>
                        <li> <a href="">Karnataka</a></li>
                        <li> <a href="">People</a></li>
                        <li> <a href="">Popular </a></li>
                    </ul>
                </li>
                <li class="side-dropdown">
                    <a href="#" class="toggle">Specials</a>
                    <ul class="side-nav-sub">
                        <li> <a href="">Insight</a></li>
                        <li> <a href="">Point Blank</a></li>
                        <li> <a href="">Sunday Spotlight</a></li>
                    </ul>
                </li>
                <li> <a href="">Brandspot</a></li>
            </ul>
            <div class="side-nav__close"><img
                    src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/close.png"
                    alt="Close"></div>
        </div>
        <div class="side-nav-overlay"></div>
        <!-- *Side Nav Part End -->

        <!--* Top Nav Part Start -->
        <div id="top-nav" class="topNav">
            <div>
                <div id="logo">
                    <img
                        src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/d-logo-new.svg">
                </div>
                <p class="f-weight" id="real-date"></p>
                <p id="real-time"></p>
                <p><a href="./epaper.html">E-PAPER</a></p>
                <p>CLASSIFIEDS</p>
            </div>
            <div>
                <p class="f-weight">
                    <img class="loaded" style="width:12px; height: 12px;" data-ll-status="loaded"
                        src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/weather/03d.svg">
                    BLR 31 ° C Clouds
                </p>
                <p>Sensex: 52693.57 -153.13<span><i class="fa-solid fa-arrow-down-long"></i></span></p>
                <p>Nifty: 15732.1 -42.3 <span><i class="fa-solid fa-arrow-down-long"></i></p>
                <div id="social">
                    <a href="">
                        <img style="width: 15px; height: 15px; margin-right: 7px;" data-ll-status="loaded"
                            src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/fb-nav.svg">
                    </a>
                    <a href="">
                        <img style="width: 15px; height: 15px; margin-right: 7px;" class="lazy loaded"
                            data-ll-status="loaded"
                            src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/twitter-nav.svg">
                    </a>
                    <a href="">
                        <img style="width: 15px; height: 15px;" data-ll-status="loaded"
                            src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/ig-nav.svg">
                    </a>
                </div>
            </div>
        </div>
        <!-- *Top Nav Part End -->

        <!-- <div id="mob-nav">
            <div class="mob-navbar">
                <div class=" nav-hamburger">
                    <div class="hamburger">
                        <div class="ham"></div>
                        <div class="ham"></div>
                        <div class="ham"></div>
                    </div>
                </div>
                <div class="mobile-logo-wrapper f-left abs-center"> <a href="/"><img class=""
                            style="width: 120px; height: 25px;"
                            src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/white-logo.svg"></a>
                </div>
                <div id="new_nl" class="new">
                    <a href="" class="navbar-text">
                        <span class="new"> NEW </span>
                        <span class="pdng-top">Newsletters</span>
                    </a>
                </div>
                <div>
                    <i class="fi fi-br-search"></i>
                    <div class="search-box">
                        <input type="text" id="search" placeholder="What you are looking for?">
                        <input type="button" value="Search">
                    </div>
                </div>
            </div>
        </div> -->

        <!--*Main Nav Part Start -->
        <div id="nav">
            <div class="navbar">
                <div class=" nav-hamburger">
                    <div class="hamburger">
                        <div class="ham"></div>
                        <div class="ham"></div>
                        <div class="ham"></div>
                    </div>
                </div>
                <div class="mobile-wrapper f-left abs-center"> <a href="/"><img class=""
                            style="width: 120px; height: 25px;"
                            src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/white-logo.svg"></a>
                </div>
                <nav class="">
                    <ul class="nav-main">
                        <li> <a href="index.html">Home</a></li>
                        <li class="dropdown"><a href="Bengaluru.html">Bengaluru</a>
                            <ul class="nav-sub">
                                <li> <a href="">Top Stories</a></li>
                                <li> <a href="">Crime</a></li>
                                <li> <a href="">Politics</a></li>
                                <li> <a href="">Infrastructure</a></li>
                                <li> <a href="">Life in the City</a></li>
                                <li> <a href="">Bengaluru 2040</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="./karnataka.html">Karnataka</a>
                            <ul class="nav-sub">
                                <li> <a href="">Top Stories</a></li>
                                <li> <a href="">Politics</a></li>
                                <li> <a href="">Districts</a></li>
                                <li> <a href="">22in22</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="national.html">National</a>
                            <ul class="nav-sub">
                                <li> <a href="">Politics</a></li>
                                <li> <a href="">Coronavirus</a></li>
                                <li> <a href="">North and Central</a></li>
                                <li> <a href="">East and Northeast</a></li>
                                <li> <a href="">South</a></li>
                                <li> <a href="">West </a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#">Sports</a>
                            <ul class="nav-sub">
                                <li> <a href="">Cricket</a></li>
                                <li> <a href="">Formula 1</a></li>
                                <li> <a href="">Football</a></li>
                                <li> <a href="">Tennis</a></li>
                                <li> <a href="">Sportscene</a></li>
                                <li> <a href="">Other Sports</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="">Business</a>
                            <ul class="nav-sub">
                                <li> <a href="">Business News</a></li>
                                <li> <a href="">Family Finance</a></li>
                                <li> <a href="">Technology</a></li>
                                <li> <a href="">DH Wheels</a></li>
                                <li> <a href="">Budget 2022</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="">Opinion</a>
                            <ul class="nav-sub">
                                <li> <a href="">DH Views</a></li>
                                <li> <a href="">Editorials</a></li>
                                <li> <a href="">Panorama</a></li>
                                <li> <a href="">Comment</a></li>
                                <li> <a href="">In Perspective</a></li>
                                <li> <a href="">Right in the Middle</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="">Features</a>
                            <ul class="nav-sub">
                                <li> <a href="">Metrolife</a></li>
                                <li> <a href="">Entertainment</a></li>
                                <li> <a href="">Travel</a></li>
                                <li> <a href="">Spectrum</a></li>
                                <li> <a href="">Sunday Herald</a></li>
                                <li> <a href="">Living</a></li>
                                <li> <a href="n">DH Education</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="video.html">Videos</a>
                            <ul class="nav-sub">
                                <li> <a href="">Latest Videos</a></li>
                                <li> <a href="">Bengaluru</a></li>
                                <li> <a href="">Karnataka</a></li>
                                <li> <a href="">People</a></li>
                                <li> <a href="">Popular </a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="">Specials</a>
                            <ul class="nav-sub">
                                <li> <a href="">Insight</a></li>
                                <li> <a href="">Point Blank</a></li>
                                <li> <a href="">Sunday Spotlight</a></li>
                            </ul>
                        </li>
                        <li> <a href="brandspot.html">Brandspot</a></li>
                    </ul>
                </nav>
                <div id="new_nl" class="new">
                    <a href="newsletters.html" class="navbar-text">
                        <span class="new"> NEW </span>
                        <span class="pdng-top">Newsletters</span>
                    </a>
                </div>
                <div id="right-nav">
                    <div class="contrib_m_banner "> <a target="_blank"
                            href="https://epaper.deccanherald.com/?utm_source=DH_Website_TopHeader_Mobile_CTA&amp;utm_medium=DH_Website_MobileWeb&amp;utm_campaign=Subscribe_To_Epaper_CTA_Mobile">
                            <span>Subscribe <br> To Epaper </span> </a>
                    </div>
                    <i class="fi fi-br-search"></i>
                    <div class="search-box">
                        <input type="text" id="search_input" placeholder="What you are looking for?">
                        <input type="button" id="search_btn" value="Search">
                    </div>

                </div>
            </div>
        </div>
        <!--*Main Nav Part End -->

        <!--*Bottom Nav Part Start -->
        <div id="bottom-nav">
            <div class="container">
                <h3 class="just-in-h">IN BRIEF:</h3>
                <ul class="items">
                    <li><a
                            href="/sports/cricket/hardik-pandya-to-lead-india-in-ireland-as-rahul-tripathi-gets-maiden-call-up-samson-makes-comeback-1118463.html">Hardik
                            skipper against Ireland</a></li>
                    <li><a
                            href="/international/world-news-politics/europe-epicentre-of-monkeypox-outbreak-who-1118390.html">Epicentre
                            of monkeypox</a></li>
                    <li><a
                            href="/sports/cricket/englands-joe-root-reclaims-top-position-in-icc-test-player-rankings-1118326.html">Joe
                            Root again top Test player</a></li>
                    <li><a
                            href="/national/west/4000-resident-doctors-go-on-strike-in-gujarat-over-bond-service-issue-1118347.html">Doctors
                            strike in Gujarat</a></li>
                    <li><a
                            href="/entertainment/entertainment-news/nine-years-at-the-top-the-unstoppable-rise-of-bts-1118322.html">The
                            unstoppable rise of BTS</a></li>
                    <li><a href="/business/business-news/bitcoin-tumbles-to-new-18-month-low-1118324.html">Bitcoin
                            tumbles
                            to new low</a></li>
                </ul>
            </div>
        </div>
    </header>`;
};

export { navBar };
