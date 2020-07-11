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
            //divInformacion.show( 1000 ); //el show muestra al contenedor , el 1000 indica el tiempo en milisegundos   
            // show() muestra, hide() oculta 
            divInformacion.toggle(1000); // el toogle muestra el div si no esta visible de lo contrario lo desaparece, el 1000 indica el tiempo en milisegundos, luego puedo pasar una funcion cuando termine el evento
        });
        
        
        
        
    });
    
})();