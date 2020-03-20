$(document).ready(function()
{  
   $('button').click(function()
   {   
      film = $.get('./playlist.txt', function(data)
       {  
         var datasplited = (data.split('\n')) ;

         $.each(datasplited , function(index, value)


           {  
             $('#list').append("<li>"+value+"</li>");



           });

        });
   });
});
