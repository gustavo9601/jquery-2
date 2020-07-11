(function(){
    
    $('div.caja').on('click',function(){
     
       
       /*Estrucutra del animate
       .animate({}, 'fast' , function()) 
       
       en corchete prodiedes en css
       ''fast puede ser numero en milisegundos
       function, se ejecuta algo cuando termine la animacion
       
       */
          $(this).animate(
              {
                  opacity: 0.3
              }, 1000) 
    });
    
    
    $('div#caja1').on('click',function(){
       
        $(this).animate({
            left: 100,
            width: 50
        },1000)
        
    });
    
})();