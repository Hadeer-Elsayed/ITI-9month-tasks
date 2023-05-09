var arr=[0];
for(i=0;i<5;i++)
{
    var x=prompt("Enter number"+(i+1))
    arr[i]=x;
}

console.log("You have entered the values of: "+arr);
arr.sort(function(a,b){return b-a});
console.log("Your values after being sorted descending: "+arr);


arr.reverse();
console.log("Your values after being sorted ascending: "+arr);