const text = document.querySelector("#text");
const inputs = document.querySelectorAll("input");

for(let i=0; i<inputs.length; i++) {
    inputs[i].addEventListener("change", function() {
        let red = document.querySelector("#red").value;
        let green = document.querySelector("#green").value;
        let blue = document.querySelector("#blue").value;
        text.style.color = "rgb(" + red + ", " + green + ", " + blue +")";
    });
}