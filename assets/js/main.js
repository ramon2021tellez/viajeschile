   /*Evento jquery que genera alerta al enviar mensaje*/
        $( "#enviarcorreo" ).click(function() {
       alert("Su consulta  fue enviada correctamente!!");
       
     });
   /*evento desaparecer contenido*/
   $(function(){
    $("#imagen1").on("click",function(){
 
    $ ("#fotoimagen1 , #textoimagen1").toggle(1000,function(){
   })
    })
   }) 
     
    /*evento desaparecer contenido*/
           $(function(){
        $("#imagen2").on("click",function(){
     
        $ ("#fotoimagen2 , #textoimagen2").toggle(1000,function(){
       })
        })
       })
    /*-evento desaparecer contenido*/
                $(function(){
          $("#imagen3").on("click",function(){
     
          $ ("#fotoimagen3 , #textoimagen3").toggle(1000,function(){
         })
          })
         })
/*-evento desaparecer contenido*/
$(function(){
  $("#imagen4").on("click",function(){

  $ ("#fotoimagen4 , #textoimagen4").toggle(1000,function(){
 })
  })
 })

 smoothScroll.init({
      selector: ['data-scroll'],
      selectorheader: null,
      speed:2000,
      easing:'easeInOutCubic',
      offset:0,
      callback:function(ancho,toggle){}
 }); 
 $(function () {
      $('[data-toggle="tooltip"]').tooltip()
 })