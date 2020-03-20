
var listOfMovie = [];

$(document).ready(function()
{  
   $('button').click(function()
   {   
      film = $.get('./playlist.txt', function(data)
       {  
         var datasplited = (data.split('\n')) ;

         $.each(datasplited , function(index, value)


           { 
             var monElementHTML = htmlDivElement(value);
             $('#list').append(monElementHTML);



           });

        });
   });
});



function htmlDivElement(name){

    return "<div class= 'divfilm'>"+name+"</div>";

}
 
function splitFile(data){

return data.split('\n') ;
}

