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

    });  
})();