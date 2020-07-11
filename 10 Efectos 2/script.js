(function(){
    
    $(document).ready(function(){
         var contador = 0 ;
       $('div.Contador').on('click' , 'button' , function(){
          
           var miH3 = $('h3');
          
           contador = contador + 1 ;
           console.log(contador);
           miH3.text(contador);// modifico el texto del lh3
           
           
           //toggleClasee = añade la clase si no la hay de lo contrario si existe elimina la clase
           //parents selecciona al padre princiapl
           $(this).parents().toggleClass('cambioColor');
           
           
           
           
           
           
       });
        
        
    });
    
    
})();