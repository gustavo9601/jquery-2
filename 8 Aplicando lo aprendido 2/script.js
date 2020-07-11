(function(){

    $(document).ready(function(){

        $('button').on( 'click', function(){
            var valorEscrito = $('input').val();
            var claseSeleccionada = $(this).attr('class');
            console.log( valorEscrito );
            console.log( claseSeleccionada );



            if( claseSeleccionada === "btn-abajo")
            {
                agregarBlqoueAbajo( valorEscrito );

            }else if(claseSeleccionada === "btn-arriba"){
                agregarBloqueArriba( valorEscrito );
            }else if(claseSeleccionada === "vaciar"){
                vaciar();
            }else{
                borrarItem();
            }

        });



        function agregarBlqoueAbajo ( valor )
        {

            var dato = valor || "Nada";
            var html = '';
            html += '<div class="item">';
            html += '<div class="remove">X</div>'+ dato +'</div>';

            var contenedor = $('div#places-container');
            //append abajo del contenedor
            contenedor.append( html );


        };



        function agregarBloqueArriba ( valor )
        {

            var dato = valor || "Nada";
            var html = '';
            html += '<div class="item">';
            html += '<div class="remove">X</div>'+ dato +'</div>';

            var contenedor = $('div#places-container');
            //prepend = arrgaba del contenedor
            contenedor.prepend( html );

        }

        /*DELEGACION DE EVENTOS

        - implica seleccionar al padre cotnenedor
            luego selecciono al boton o div que quiero que quiero que ejecute el evento

        */
        //eliminar
        $('div#places-container').on( 'click' , 'div.remove' ,function(){
            //this apunta al div sobre el cual se hizo click
            //parent apunta a su padre
            //con remove lo remueve
            $(this).parent().remove();

        });



        //vaciar
        function vaciar(){
            $('div.item').empty();    
        };


        function borrarItem(){
            $('div.item').remove();    
        };

    });


})();