(function(){








    $(document).ready(function() {






        function capturaSelectHobbie()
        {



        }




        var campoNombre = $('input#nombre');
        var campoApellido = $('input#apellido');
        var campoArea = $('textarea#area');
        var boton = $('button#miBoton');

        //funcion al dar clcik sobre el boton
        boton.on( 'click' , function( propagacion ){ 
            
           
            
            var valorNombre = campoNombre.val();
            var valorApellido = campoApellido.val();







            //moficiacion del html
            var html = "";
            html += "<h1>Datos : </h1>";
            html += "<hr>";
            html += "<h2>Nombre = "+valorNombre+"</h2>";
            html += "<h2>Apellido = :"+valorApellido+"</h2>";
            html += "<h2 class='edad'>Edad = </h2>";
            html += "<h2 class='hobbie'>Hobbie:</h2>";


            var resultado = $('div.resultado1');
            resultado.html( html );





            //captura de los select
            $('select#miSelect1').on( 'change' , function() {
                var opSeleccionada1 = $(this).val();
                console.log(opSeleccionada1) ;
               
               $('h2.edad').html('<h2 class="edad">Edad ='+opSeleccionada1+' </h2>');

            });



            $('select#miSelect2').on( 'change' , function() {
                var opSeleccionada2 = $(this).val();
                console.log( opSeleccionada2 );
                 $('h2.hobbie').html('<h2 class="hobbie">Hobbie ='+opSeleccionada2+' </h2>');
            });


            //modificacion del campo texto con cada tecla que se preciones
            //keyup = evento de precion de tecla
            campoArea.on('keyup',function(){
                //guargo en una variable cada tecla precionada
                var tecla = $(this).val();
                //moficio el html con cada tecla precionada
                $('div.comentarios').html( tecla );

            });



        });
    });




})();