let whatsapp;
let whatsappContainer = document.querySelector(".whatsapp");
getW = () => {
  whatsapp = document.querySelector(".dg__social-widget");
  console.log(whatsapp);
  if (whatsapp == null) {
    setTimeout(getW, 10);
  } else {
    whatsapp.style.display = "none";
    let popupWhatsapp = whatsapp.querySelector(".dg__social-widget__popup");
    whatsappContainer.appendChild(popupWhatsapp);
    popupWhatsapp.style.display = "block";

    console.log();
  }
};

getW();

let headerLeft = document.querySelector(".header__left");
let headerRight = document.querySelector(".header__right");
let headerInfo = document.querySelector(".header__info");
let btn = document.querySelector(".header__button");
btn.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  headerLeft.classList.toggle("active");
  headerRight.classList.toggle("active");
  headerInfo.classList.toggle("active");
});

window.addEventListener(
  "resize",
  function (event) {
    widthCur = document.body.clientWidth;
    console.log(widthCur);
    if (widthCur > 768) {
      btn.classList.remove("active");
      headerLeft.classList.remove("active");
      headerRight.classList.remove("active");
      headerInfo.classList.remove("active");
    }
  },
  true
);

var element = document.getElementById("phone");
var maskOptions = {
  mask: "+7(000)000-00-00",
  lazy: false,
};
var mask = new IMask(element, maskOptions);
