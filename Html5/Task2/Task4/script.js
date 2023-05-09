let overlay = document.querySelector(".overlay");
let canvas = document.getElementById("canv1");
let ctx = canvas.getContext("2d");
let x = y = 0;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineWidth=2
ctx.strokeStyle="red";
ctx.lineTo(10, 10)
ctx.stroke();

let animation = setInterval(function(){
    x += 10;
    y += 10;
    ctx.lineTo(x, y)
    ctx.stroke();
    if(x == 360 && y == 360) {
        clearInterval(animation);
        overlay.classList.toggle("hidden");
    }
}, 100);

document.getElementById("btn").addEventListener("click", function() {
    overlay.classList.toggle("hidden");
})