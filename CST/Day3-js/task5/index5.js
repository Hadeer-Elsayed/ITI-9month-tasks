var win;
var x=0;
var y=0;
var w=0;
function openWin()
{
    win=open("child.html","_target","width=200,height=200");
    win.focus();
}
openWin();

var z=setInterval(function moveWindow()
{
    if(y<screen.height)
    {
        win.moveBy(20,20);
        y+=30;
    }
   
    else
    {
        win.moveBy(-20,-20);
    }

},100)


function stop()
{
    clearInterval(z);
    win.focus();
}




// var win;
// function openWin()
// {
//     win=open("child.html","","width=200,height=200")
// }
// openWin();


// var x=setInterval(function moveWindow()
// {
//     win.moveBy(50,50);
// },1000)


// setTimeout(function clear_set1()
// {
//     clearInterval(x);
// },10000)

// setTimeout(function getx()
// {
//     console.log(x)
// },15000)

// //console.log(x);
// if(!x)
// {
//     console.log("hadeer");
//     var y=setInterval(function moveWindow()
// {
//     win.moveBy(-50,-50);
// },1000)

// setTimeout(function clear_set1()
// {
//     clearInterval(y);
// },10000)
// }
