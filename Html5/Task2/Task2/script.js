let canvas = document.getElementById("canv1");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(200, 250);
ctx.lineTo(50, 250)
ctx.strokeStyle="red";
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
// ctx.strokeStyle="black";
ctx.fillStyle = "black";
ctx.font="26pt Georgia";
ctx.lineWidth=2

ctx.fillText("c",100,150);
ctx.fillText("b",210,150);
ctx.fillText("a",120,280);