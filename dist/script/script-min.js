let header=document.querySelector("header");const imgNumbs=4;let bgInterval,backgrounOpt=!0;randomizeImgs();let bgLocalItem=localStorage.getItem("background_option");function randomizeImgs(){!0===backgrounOpt&&(bgInterval=setInterval(e=>{let t=Math.ceil(Math.random()*imgNumbs);header.style.backgroundImage=`url(imgs/header/${t}.jpg)`},1e4))}null!=bgLocalItem&&(document.querySelectorAll(".random-background span").forEach(e=>{e.classList.remove("active")}),"true"==bgLocalItem?(backgrounOpt=!0,randomizeImgs(),document.querySelector(".random-background span.yes").classList.add("active")):(backgrounOpt=!1,clearInterval(bgInterval),document.querySelector(".random-background span.no").classList.add("active"))),document.querySelector(".setting-box .toggele-setting i").onclick=function(){this.classList.toggle("fa-spin"),document.querySelector(".setting-box").classList.toggle("open")};const colorsLi=document.querySelectorAll(".option-box .colors-lists li");colorsLi.forEach(e=>{e.addEventListener("click",e=>{document.documentElement.style.setProperty("--main-color",e.target.dataset.color),localStorage.setItem("color_option",e.target.dataset.color),e.target.parentElement.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active")})});const randomBg=document.querySelectorAll(".option-box.random-background span");randomBg.forEach(e=>{e.addEventListener("click",e=>{e.target.parentElement.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active"),"yes"==e.target.dataset.background?(backgrounOpt=!0,randomizeImgs(),localStorage.setItem("background_option",!0),console.log("yes")):(console.log("no"),backgrounOpt=!1,clearInterval(bgInterval),localStorage.setItem("background_option",!1))})});let mainColor=localStorage.getItem("color_option");null!=mainColor&&(document.documentElement.style.setProperty("--main-color",mainColor),colorsLi.forEach(e=>{e.classList.remove("active"),e.dataset.color==mainColor&&e.classList.add("active")}));