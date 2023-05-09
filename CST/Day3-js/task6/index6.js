// var win;
// var i=0;
// var sentence= "Hadeer Elasyed";
// var sentanceArr=sentence.split("");

//  setInterval(function putLetter()
//  {
//     if(i<sentanceArr.length)
//     {
//         document.write(sentanceArr[i]);
//          i++;
//     }
//     else
//     {
//         setInterval(close(),1000);
//     }
//  },1000)

//new sol after revision

var sentence="Hadeer Elsayed";
var i=0;
var z=setInterval(function()
{
   document.write(sentence[i]);
   i++;
   if(i>=sentence.length)
{
    clearInterval(z);
   setTimeout(function()
    {
        close();
    },1000) 
}

},100)



 