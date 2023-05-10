var x=prompt("Enter your name and it should be characters");
var y=prompt("Enter your phone number with length 8");
var m=prompt("Enter your mobile number with length 11");
var z=prompt("Enter your Email correctly");
var color=prompt("choose the color of format red or blue or green");

var pattx=/^[A-Za-z]+$/;
var pattxTest=pattx.test(x);

var patty=/^\d{8}$/;
var pattyTest=patty.test(y);

var pattm=/(^010\d{8}$)|(^011\d{8}$)|(^012\d{8}$)/;
var pattmTest=pattm.test(m);

var pattz=/^[a-z]{3}@[0-9]{3}\.com$/;
var pattzTest=pattz.test(z);

if(pattxTest)
{
    console.log("%c Welcome dear guest "+x,"color:"+color);
}
else
{
    console.log("%c Please using only characters in your name","color:"+color);
}

if(pattyTest)
{
    console.log("%c your telephone number is "+y,"color:"+color);
}
else
{
    console.log(" %c please enter your phone number with length 8","color:"+color);
}

if(pattmTest)
{
    console.log("%c your mobile number is "+m,"color:"+color);
}
else
{
    console.log(" %c please enter your mobile number correctly","color:"+color);
}

if(pattzTest)
{
    console.log("%c you email is "+z ,"color:"+color)
}
else
{
    console.log(" %c please enter your email like this form abc@121.com","color:"+color)
}

