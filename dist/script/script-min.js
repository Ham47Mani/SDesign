let header=document.querySelector("header");const imgNumbs=4;let bgInterval,backgrounOpt=!0;randomizeImgs();let bgLocalItem=localStorage.getItem("background_option");function randomizeImgs(){!0===backgrounOpt&&(bgInterval=setInterval(e=>{let t=Math.ceil(Math.random()*imgNumbs);header.style.backgroundImage=`url(imgs/header/${t}.jpg)`},1e4))}null!=bgLocalItem&&(document.querySelectorAll(".random-background span").forEach(e=>{e.classList.remove("active")}),"true"==bgLocalItem?(backgrounOpt=!0,randomizeImgs(),document.querySelector(".random-background span.yes").classList.add("active")):(backgrounOpt=!1,clearInterval(bgInterval),document.querySelector(".random-background span.no").classList.add("active"))),document.querySelector(".setting-box .toggele-setting i").onclick=function(){this.classList.toggle("fa-spin"),document.querySelector(".setting-box").classList.toggle("open")};const colorsLi=document.querySelectorAll(".option-box .colors-lists li");colorsLi.forEach(e=>{e.addEventListener("click",e=>{document.documentElement.style.setProperty("--main-color",e.target.dataset.color),localStorage.setItem("color_option",e.target.dataset.color),hadleActive(e)})});const randomBg=document.querySelectorAll(".option-box.random-background span");randomBg.forEach(e=>{e.addEventListener("click",e=>{hadleActive(e),"yes"==e.target.dataset.background?(backgrounOpt=!0,randomizeImgs(),localStorage.setItem("background_option",!0)):(backgrounOpt=!1,clearInterval(bgInterval),localStorage.setItem("background_option",!1))})});let mainColor=localStorage.getItem("color_option");null!=mainColor&&(document.documentElement.style.setProperty("--main-color",mainColor),colorsLi.forEach(e=>{e.classList.remove("active"),e.dataset.color==mainColor&&e.classList.add("active")})),document.querySelector(".reset-option").onclick=function(){localStorage.clear(),window.location.reload()};let allBullets=document.querySelectorAll(".nav-bullets  .bullet");scrollToSection(allBullets);let allLinks=document.querySelectorAll("header .links a");function scrollToSection(e){e.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),document.querySelector(e.target.dataset.section).scrollIntoView({behavior:"smooth"})})})}scrollToSection(allLinks);let bulletsSpan=document.querySelectorAll(".show-bullets span"),bulletsContainer=document.querySelector(".nav-bullets"),bulletLocalItem=localStorage.getItem("bullets-options");null!==bulletLocalItem&&(bulletsContainer.style.display=bulletLocalItem,bulletsSpan.forEach(e=>{e.classList.remove("active"),"block"==bulletLocalItem?document.querySelector(".show-bullets .yes").classList.add("active"):document.querySelector(".show-bullets .no").classList.add("active")})),bulletsSpan.forEach(e=>{e.addEventListener("click",t=>{"show"==e.dataset.bullets?(bulletsContainer.style.display="block",localStorage.setItem("bullets-options","block")):(bulletsContainer.style.display="none",localStorage.setItem("bullets-options","none")),hadleActive(t)})});let ourSkills=document.querySelector(".our-skills");window.onscroll=function(){let e=ourSkills.offsetTop;if(this.pageYOffset>e-100){document.querySelectorAll(".our-skills .skill-progress span").forEach(e=>{e.style.width=e.dataset.progress})}else{document.querySelectorAll(".our-skills .skill-progress span").forEach(e=>{e.style.width="0"})}};let imgGallery=document.querySelectorAll(".our-gallery img");function hadleActive(e){e.target.parentElement.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active")}imgGallery.forEach(e=>{e.addEventListener("click",t=>{let l=document.createElement("div");l.className="popup-overlay",document.body.appendChild(l);let o=document.createElement("div");o.className="popup-Box";let a=document.createElement("img");if(null!==e.alt){let t=document.createElement("h3"),l=document.createTextNode(e.alt);t.appendChild(l),o.appendChild(t)}a.src=e.src,o.appendChild(a),document.body.appendChild(o);let c=document.createElement("span"),r=document.createTextNode("X");c.appendChild(r),c.className="popup-close",o.appendChild(c),document.addEventListener("click",e=>{"popup-close"==e.target.className&&(e.target.parentNode.remove(),document.querySelector(".popup-overlay").remove())})})});