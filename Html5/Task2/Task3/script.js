let canv1 = document.getElementById("canv1");
let canv2 = document.getElementById("canv2");
let ctx1 = canv1.getContext("2d");
let ctx2 = canv2.getContext("2d");

ctx1.beginPath();
ctx1.arc(150, 150, 100, 0, Math.PI, true)
ctx1.closePath();
ctx1.fillStyle = "yellow";
ctx1.fill();
ctx1.stroke();

ctx2.beginPath();
ctx2.arc(150, 0, 100, 0, Math.PI)
ctx2.closePath();
ctx2.fillStyle = "yellow";
ctx2.fill();
ctx2.stroke();

let counter = 0;

let toggle = setInterval(function() {
    canv1.classList.toggle("hidden");
    canv2.classList.toggle("hidden");
    counter++;
    if(counter > 10) {
        clearInterval(toggle);
    }
}, 1000);
document.addEventListener("load", function() {
    toggle();
})
