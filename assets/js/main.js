$(function(){
    $("#tiramisu").on("click",function(){
 
    $ ("#fototiramisu , #textotiramisu").toggle(1000,function(){
   })
    })
   })

   /*Evento jquery que genera alerta al enviar mensaje*/
        $( "#enviarcorreo" ).click(function() {
       alert("Su consulta  fue enviada correctamente!!");
       
     });
     
    /*evento desaparecer contenido*/
           $(function(){
        $("#plateada").on("click",function(){
     
        $ ("#fotoplateada , #textoplateada").toggle(1000,function(){
       })
        })
       })
    /*-evento desaparecer contenido*/
                $(function(){
          $("#panqueques").on("click",function(){
     
          $ ("#fotopanqueque , #textopanqueque").toggle(1000,function(){
         })
          })
         })
   
   /*efecto cambio color fuente doble click ingredientes*/
   $( "#ingredientes,#preparacion" ).dblclick(function() {
   $(this).css({
      "color":"red"
        })
    });  
  