(function(){
    
    /*
    selecciono al documento
    le pregunto que esta listo y
    le paso una funcion anonima que se ejecutara cuando cargeuel documetn
    */
    $(document).ready(function(){
        
        /*Delegacion de eventos
        selecciono al padre imten-box
        luego escuho si se hace onclik en el infp-link y se ejecutara la siguiente funcion
        */
        $('div.item-Box').on(' click ',' a.info-Link', function( parametro1 ){
            //selecciono el parametro que me entrega cuando se ejcuta el evento
            // el prevenDefault, quita las propiedaes del link
            parametro1.preventDefault();
            
            
            
            /*Seleccionamos el otro div a mostrar*/
            var divInformacion = $('div.mas-Informacion');
          
            //slideDowm
            //slideOut
            //slideToggle // muestra en forma de lista
            
            divInformacion.slideToggle(1000);
        });
        
        
        
        
    });
    
})();