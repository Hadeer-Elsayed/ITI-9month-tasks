
// flag1=1;
// flag2=1;
// var x;
// function getAnimation()
// {
//    x= setInterval(function()
// {
//   if(flag1==6)
//   {
//     flag1=1;
//     document.getElementById("img5").src="images/marble"+(--flag2)+".jpg";
//   } 
 
//   else if(flag1<6)
//   {
//     if(flag2==2)
//     {
//             document.getElementById("img"+(flag1-1)).src="images/marble"+(--flag2)+".jpg";
//             console.log("hadeer");
//     }
//   }
//   document.getElementById("img"+flag1).src="images/marble"+(++flag2)+".jpg";
//   console.log(document.getElementById("img1").src); 
//   flag1++;
// }
// ,1000)
// }
// getAnimation()

// function stop()
// {
//     clearInterval(x);
// }


/////-------------------commented code don't work
// flag1=1;
// flag2=1;
// function getAnimation()
// {
//     setInterval(function()
// {
//   if(flag1==6)
//   {
//     flag1=1;
//   } 
 
//   else if(flag1<6)
//   {
//     if(flag2==2)
//     {
//         if(flag1==1)
//         {
//             document.getElementById("img5").src="images/marble"+(--flag2)+".jpg";
//         }
//         else 
//         {
//             document.getElementById("img"+(flag1-1)).src="images/marble"+(--flag2)+".jpg";
//             console.log("hadeer");
//         }
//     }
//     document.getElementById("img"+flag1).src="images/marble"+(++flag2)+".jpg";
//     console.log(document.getElementById("img1").src); 
//     flag1++;
//   }
// }
// ,1000)
// }

// getAnimation()

//----------another sol during studying
var timer;
function getAnimation()
{
  for(var i=1;i<6;)
  {
    setInterval(()=>
    {
      // document.getElementById("img"+(i-1)).src=i>1?"images/marble"+(--flag2)+".jpg":
      
    },1000)
  }
}


