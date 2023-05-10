// var x=prompt("Enter the string");
// var y=prompt("Enter 'Yes' to ignore case sensitive or 'No' for not ignoring");
// var z=((x.split("")).reverse()).join("");
// //console.log(z);
// if(((x.toLowerCase())===(z.toLowerCase())) && y=="Yes")
// {
//     alert("palindrome");
// }
// else if(x==z&& y=="No")
// {
//     alert("palindrome");
// }
// else
// {
//     alert(" not palindrome");
// }

//another sol during rev
var x=prompt("Enter the string");
var choise=confirm("case sensitive or not?");
var reverse_x= x.split("").reverse().join("");
console.log(reverse_x)

if(choise== true &&reverse_x==x ||choise==false &&reverse_x.toLowerCase()==x.toLowerCase())
{
   alert ("palindrome")
}
else{
    alert("not palindrome");
}
