let header=document.querySelector("header");const imgNumbs=4;setInterval(e=>{let a=Math.ceil(4*Math.random());header.style.backgroundImage=`url(imgs/header/${a}.jpg)`},1e4);