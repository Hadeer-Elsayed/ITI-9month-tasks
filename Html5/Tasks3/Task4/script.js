var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext("2d");
let counter = 0;
context.translate(400, 400);
context.fillStyle = "lightblue";

let animation = setInterval(function() {
    context.rotate((Math.PI / 180) * -30);  
    context.fillRect(-40, -100, 40, 100);
    counter++; 
    if(counter > 12) {
        clearInterval(animation);
        context.fillStyle = "white";
        context.fillRect(-400, -400, 800, 800);
        counter = 0;
        context.fillStyle = "lightblue";
        let reverse = setInterval(function() {
            context.rotate((Math.PI / 180) * 30);  
            context.fillRect(-40, -100, 40, 100);
            if(counter > 11) {
                clearInterval(reverse);
            }
        },200)
    }
},200)
