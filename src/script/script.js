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
//============================= Start Toggle Menu ===============================
let toggleMenu = document.querySelector("header .toggle-menu");
let menuContainer = document.querySelector("header .links-container");
toggleMenu.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("clicked");
  menuContainer.classList.toggle("open");
}

window.onclick = function (e) {
  if (e.target !== toggleMenu) {
    toggleMenu.classList.remove("clicked");
    menuContainer.classList.remove("open");
  }
}
//============================= End Toggle Menu ===============================

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
    hadleActive(e)
  });
});

//----------------- Switch Random Background -----------------------
const randomBg = document.querySelectorAll(".option-box.random-background span");
randomBg.forEach(span => {
  span.addEventListener("click", (e) => {
    hadleActive(e);

    if (e.target.dataset.background == "yes") {
      backgrounOpt = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
    } else {
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

//----------------- Reset Option -----------------------
document.querySelector(".reset-option").onclick = function () {
  localStorage.clear();
  window.location.reload();
}

//============================= End Setting Box ===============================

//============================= Start Nav Bullets ===============================
let allBullets = document.querySelectorAll(".nav-bullets  .bullet");
scrollToSection(allBullets);

let allLinks = document.querySelectorAll("header .links a");
scrollToSection(allLinks);


//---- scrollToSection Function
function scrollToSection (elements) {
  elements.forEach(ele => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

//--------- Bullets Box Option
let bulletsSpan = document.querySelectorAll(".show-bullets span"),
    bulletsContainer = document.querySelector(".nav-bullets"),
    bulletLocalItem = localStorage.getItem("bullets-options");

if (bulletLocalItem !== null) {
  bulletsContainer.style.display = bulletLocalItem;
  bulletsSpan.forEach(span => {
    span.classList.remove("active");
    (bulletLocalItem == "block")? document.querySelector(".show-bullets .yes").classList.add("active") : document.querySelector(".show-bullets .no").classList.add("active");
  });
}

bulletsSpan.forEach(span => {
  span.addEventListener("click", (event) => {
    if (span.dataset.bullets == "show") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullets-options", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets-options", "none");
    }
    hadleActive(event);
  });
});
//============================= End Nav Bullets ===============================

//============================= Start Our Skills ===============================
let ourSkills =  document.querySelector(".our-skills"); 

window.onscroll = function () {
  //- Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;
  //- Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop - 100) {
    let allSklills = document.querySelectorAll(".our-skills .skill-progress span");
    allSklills.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    });
  } else {
    let allSklills = document.querySelectorAll(".our-skills .skill-progress span");
    allSklills.forEach(skill => {
      skill.style.width = "0";
    });
  }
};
//============================= End Our Skills ===============================

//============================= Start Our Gallery ===============================
//-------------------------- Create Popup With The Image
let imgGallery = document.querySelectorAll(".our-gallery img");
imgGallery.forEach(img => {
  img.addEventListener("click", (e) => {
    //--- Create Overlay
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);

    //--- Create Popup
    let popupBox = document.createElement("div");
    popupBox.className = "popup-Box";
    let popupImg = document.createElement("img");

    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      imgHeading.appendChild(imgText);
      popupBox.appendChild(imgHeading)
    }

    //--- Create Image
    popupImg.src = img.src;
    popupBox.appendChild(popupImg);

    document.body.appendChild(popupBox);

    //--- Create The Close Span
    let closePopup = document.createElement("span");
    let closePopupText = document.createTextNode("X");
    closePopup.appendChild(closePopupText);
    closePopup.className ="popup-close";
    popupBox.appendChild(closePopup);

    //--- Close Popup
    document.addEventListener("click", (e) => {
      if (e.target.className == "popup-close") {
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
      }
    });
  });
});
//============================= End Our Gallery ===============================

//============================= Start Functions ===============================
function hadleActive (event) {
  //- Remove class active from all chrildrens
  event.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
}
//============================= End Functions ===============================