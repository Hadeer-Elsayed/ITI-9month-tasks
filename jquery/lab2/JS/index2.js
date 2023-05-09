$(function()
{
    $(".rab img").draggable();
    $( "#drop" ).droppable(
        {
            drop :function()
        {
            $(".rab img").hide("explode",2000)
        }
        } );
})