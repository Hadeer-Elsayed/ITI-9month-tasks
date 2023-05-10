// var x=prompt("Enter the string");
// var y=x.split(" ");
// // console.log(y);
// var i;
// var j;
// var z;
// var max=0;
// for(i=0;i<y.length;i++)
// {
//     if(max<(y[i]).length)
//     max=(y[i]).length;
// }
// for(j=0;j<y.length &&((y[j]).length)!=max;j++)
// {}
// z=y[j];
// alert(z);

//new ans during revision
var sentence=prompt("Enter the string");
function giveBiggestWord(x)
{
    var arr=x.split(" ");
    console.log(arr)
    var len=arr.length;
    var word=arr[0];

    for(var i=0;i<len;i++)
    {
        if(word.length<arr[i].length)
        {
            word=arr[i]
        }
    }
    alert(word);
    
}

giveBiggestWord(sentence);
