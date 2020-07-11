(function(){
    
    
    $(document).ready(function(){
        
        //keydown = escuha el teclado pero se ejecuta despues de espichar otra tecla
        //keyup = escuha el teclado y ejecuta instantanemente
       
        //captura el evento de espcihar alguna tecla, y modicia al unico input con la funcion
        $('div.contenedor1').on( 'keyup' , 'input' , function() {
            
            //capturamos el div.resultado
            var divResutlado = $('div.resutlado');
            //modificamos el html con lo que tenga el valor de la tecla precionada
            divResutlado.html($(this).val());
            
        });
        
        
        
    });
    
    
})();