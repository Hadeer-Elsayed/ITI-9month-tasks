$(function()
{
    $(".moving_car").animate({left:"400px"},3000,"linear");
   var y= setInterval(function()
    {
        var x=$(".moving_car")[0].style.left;
        $(".sentence").text(`<img src="../images/12.gif" style="left:`+x+`"/>`)
        console.log(x);
        if($(".moving_car")[0].style.left=="400px")
        {
            clearInterval(y);
        }
    },0)
})
