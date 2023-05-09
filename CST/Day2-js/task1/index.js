// var result="";
// var x=prompt("Enter the string");
// var y=prompt("Enter the character that U want to check");
// var z=prompt("Enter 'Yes' to ignore case sensitive or 'No' for not ignoring");
// var s=x.split("");
// for(var i=0;i<x.length;i++)
// {
//     if(s[i].toLowerCase()==y.toLowerCase()&& z=="Yes")
//     result+=y;
//     else if(s[i]==y&& z=="No")
//     result+=y;
// }
// alert(result.length);


//new sol during revision
 var x=prompt("Enter the string");
 var y=prompt("Enter the character that U want to check");
 var z=prompt("Enter 'Yes' to ignore case sensitive or 'No' for not ignoring");
 var flag=0;
 var len=x.length;

 for(let i=0;i<len;i++)
 {
    if(z=="Yes"&& x[i].toLowerCase()==y.toLowerCase())
    {
        flag++;
    }
    else if(z=="No"&&x[i]==y)
    {
        flag++;
    }
 }

 alert (flag);