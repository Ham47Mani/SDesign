//============================= Start Header ===============================
//--- Cash Elements
let header = document.querySelector("header");

//--- Variables
const imgNumbs = 4;

setInterval( _ => {
  let randomImgs = Math.ceil(Math.random() * imgNumbs);
  //- Change Background Image
  header.style.backgroundImage = `url(imgs/header/${randomImgs}.jpg)`;
}, 10000);
//============================= End Header ===============================

//============================= Start Setting Box ===============================
//----------------- Open Setting Box -----------------------
document.querySelector(".setting-box .toggele-setting i").onclick= function () {
  //--- Toggel Spin class in fontawesome gear
  this.classList.toggle("fa-spin");
  //--- Toggle Class open in setting box
  document.querySelector(".setting-box").classList.toggle("open");
};

//----------------- Switch Color -----------------------
const colorsLi = document.querySelectorAll(".option-box .colors-lists li");
colorsLi.forEach(li => {
  li.addEventListener("click", (e) => {
    //- Set Color on root
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    //- Set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color);
    //- Remove class active fromall chrildrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

//----------------- Check Local Storage -----------------------
//- Check if there's local storage color option
let mainColor = localStorage.getItem("color_option");
if (mainColor != null) {
  //- Set Color on root
  document.documentElement.style.setProperty("--main-color", mainColor);
  //- Add class active
  colorsLi.forEach(element => {
    element.classList.remove("active");
    if (element.dataset.color == mainColor) {
      element.classList.add("active");
    }
  });
}

//============================= End Setting Box ===============================