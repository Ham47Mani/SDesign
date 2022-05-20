//============================= Start Header ===============================
//--- Cash Elements
let header = document.querySelector("header");

//--- Variables
const imgNumbs = 4;

//- Random Background Option
let backgrounOpt = true;
//- Background Interval
let bgInterval;

randomizeImgs();

//- Check if there's local storage random background Item
let bgLocalItem = localStorage.getItem("background_option");
if (bgLocalItem != null) {
  //- Remove class active from all span
  document.querySelectorAll(".random-background span").forEach(element => {
    element.classList.remove("active");
  });
  if (bgLocalItem == "true") {
    backgrounOpt = true;
    randomizeImgs();
    document.querySelector(".random-background span.yes").classList.add("active");
  } else {
    backgrounOpt = false;
    clearInterval(bgInterval);
    document.querySelector(".random-background span.no").classList.add("active");
  }

}

//--- randomizeImgs Function
function randomizeImgs () {
  if (backgrounOpt === true) {
    bgInterval = setInterval( _ => {
      let randomImgs = Math.ceil(Math.random() * imgNumbs);
      //- Change Background Image
      header.style.backgroundImage = `url(imgs/header/${randomImgs}.jpg)`;
    }, 10000);
  }
}

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
    //- Remove class active from all chrildrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

//----------------- Switch Random Background -----------------------
const randomBg = document.querySelectorAll(".option-box.random-background span");
randomBg.forEach(span => {
  span.addEventListener("click", (e) => {
    //- Remove class active from all chrildrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.background == "yes") {
      backgrounOpt = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
      console.log("yes");
    } else {
      console.log("no");
      backgrounOpt = false;
      clearInterval(bgInterval);
      localStorage.setItem("background_option", false);
    }
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