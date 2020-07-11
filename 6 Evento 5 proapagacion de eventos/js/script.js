(function(){
    
    
    $(document).ready(function() {
       
        
        var enlace = $('a');
        
        enlace.on( 'click' , function ( parametro ) {
           //prevent default, inhabilita las porpiedades del objeto
            parametro.preventDefault(); 
            //para la propagacion de eventos
            /*Eso siginifica que no actuara en cascada si se implementan mas eventos o animaciones*/
            parametro.stopPropagation();
        });
        
    });
    
    
    
})();