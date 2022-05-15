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