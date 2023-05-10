$(function()
{
    $.ajax({

            type:"GET",
            url:"../rockbands.json",
            success: function(response)
            {
                var arr=response;
                var keys=Object.keys(arr)
                var entries=Object.entries(arr);
                console.log(entries)
                var values=Object.values(response)

            //put data of band in select
                for(let key=0; key<values.length ; key++){
                $("#choose").append(`<option value=`+key+">"+keys[key]+"</option>");}
                // console.log(Object.values(response)[0][0]);

                $('#choose').change(function () {

                    $("#artist").html("");
                    var optionSelected = $(this).find("option:selected");
                    var valueSelected  = optionSelected.val();
                    console.log(valueSelected)
                    var textSelected   = optionSelected.text();
                    var len=entries[valueSelected][1].length;
                    for( var i=0;i<len;i++)
                    {
                       $("#artist").append(`<option value=`+valueSelected+`>`+entries[valueSelected][1][i].name+`</option>`)
                    }
                });
            
                $("#artist").change(function()
                {
                    var optionSelected = $(this).find("option:selected");
                    var valueSelected  = optionSelected.val();
                    var textSelected   = optionSelected.text();
                    var len=entries[valueSelected][1].length
                    console.log(valueSelected);
                    //var artistWeb=entries[valueSelected][1]
                    for(i=0;i<len;i++)
                    {
                        if(entries[valueSelected][1][i].name==textSelected)
                        {
                            var x=i
                        }
                    }
                    var artistWeb=entries[valueSelected][1][x].value;
                    console.log(artistWeb)
                    window.open(artistWeb)


                })

            }
    
    
        })
})