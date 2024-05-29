let colors="0123456789abcdef";
let color="#";
for(let i=0;i<3;i++){
    color+=colors[Math.floor(Math.random()*16)]
}
// console.log(color);
document.querySelector("body").style.backgroundColor=color;
document.getElementById("res").innerText=color;