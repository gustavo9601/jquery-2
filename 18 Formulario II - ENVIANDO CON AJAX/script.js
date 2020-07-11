(function(){
    $(document).ready(function(){

        //escuhando el evento de cambio sobre el chekbox
        $('input#cualquierAnimal').on('change',function(){
            //selecciono con this a chekbox
            // con is pregunto el estado
            //:checked retorna si esta chuliado
            if($(this).is(':checked')){

                $('div.seleccioneMascota').css({
                    display: 'block'
                })
            }else{

                $('div.seleccioneMascota').css({
                    display: 'none'
                })

                //vacio el contenedor
                $('select#seleccionMascota').val('---');
                $('div.mostrarTexto').empty();
            }

            //con trigger siempre que halla un cambio se va a disparar esta funcion
            $('input#cualquierAnimal').trigger('change');
        });



        $('select#seleccionMascota').on('change',function(){
            var seleccion = $(this).val();  //obtengo el valor de la seleccion

            if(seleccion == "perro"){
                $('div.mostrarTexto').text('Los perros son geniales')
            }else if(seleccion == "gato"){
                $('div.mostrarTexto').text('Los gatos son Muy Divertidos !!!')
            }else{
                //si no es ninguna opcion valida vaciamos el contenedor
                $('div.mostrarTexto').empty();
            }

            //obligo a que se efecute la presente funcion cuando detencte un cambio "tirgger"
            $('select#seleccionMascota').trigger('change');
        });


        /*USANDO EL EVENTO SUBMIT CON AJAX*/
        $('form#miFormulario').on('submit',function( event ){

            //reseteo el evento predeterminado al dar click, que seria evitar que se recargue la pagina
            event.preventDefault();


            //le indico a aja a donde va a ir cuando se jecute el evento
            $.ajax('mensaje.json', {
                type: 'post',
                data: $('form#miFormulario').serialize()  //con serialize, me va a devolver todos los valores que digite en el formulario


            }).done(function(response){  //donde se efectuo bien lo anterior
                //reponse cualquier variable que devolvera la respuesta del servidor , es decir lo que contenga en este caso el json

                $('div.result')
                    .show() //muestro el div
                    .text(response.mensaje) // modifoc el texto con lo que contenga la respuesta response aputnando al mensaje   
            })

            // muestro en consola los valores que yo tipeo en el formlario con la propeidad serialize
            console.log($('form#miFormulario').serialize());

        });




    });  
})();