function addHeader(el){
    const headerEl = document.createElement("div");
    headerEl.innerHTML= ` <header class="header">
    <div class="header__container">
        <a href="./index.html">
            <img src="./img/logo.png" class="header__logo">
        </a>
        <div class="bars__menu">
            <span class="line1__bars-menu"></span>
            <span class="line2__bars-menu"></span>
            <span class="line3__bars-menu"></span>
        </div>
        <div class="nav-menu">
            <nav class="header__container-navs">
                <a href="./portfolio.html">Portfolio</a>
                <a href="./servicios.html">Servicios</a>
                <a href="./contacto.html">Contacto</a>
            </nav>
        </div>
    </div>

    <div class="header__container-content active" id="menusito">
        <nav class="header__container-content-nav">
            <ul> 
                <li class="header__li">
                 <a href="./portfolio.html" class="link">Portfolio</a></li>
                <li class="header__li">
                <a href="./servicios.html" class="link"> Servicios</a></li>
                <li class="header__li"> 
                 <a href="./contacto.html" class="link">Contacto</a></li>
            </ul>
        </nav>
    </div>
</header>`

const burgerEl = headerEl.querySelector(".bars__menu")

const ventanaNav = headerEl.querySelector(".header__container-content")

let line1__bars = headerEl.querySelector(".line1__bars-menu");
let line2__bars = headerEl.querySelector(".line2__bars-menu");
let line3__bars = headerEl.querySelector(".line3__bars-menu");

burgerEl.addEventListener("click", function () {
   line1__bars.classList.toggle("activeline1__bars-menu");
   line2__bars.classList.toggle("activeline2__bars-menu");
   line3__bars.classList.toggle("activeline3__bars-menu");
});
// DESPLAZAMIENTO DEL MENU SEGUN EL CLICK
burgerEl.addEventListener("click", function (e) {
   ventanaNav.classList.toggle("active")
});
el.appendChild(headerEl);

};
