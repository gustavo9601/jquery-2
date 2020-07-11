(function(){

    $('div#caja1').on('click', 'button' , function(){
        
        //llamamos a ajax con jsquery y le paso lo que quiero que traida , en este caso es una url o archivo del poreycto
        $.ajax('resultado.html',{
            //pasando parametros
            beforeSend: function(){  // beforeSend, elemento que indica antes que se cargue el request
                
                $('div.cajaIntermedia').text('Cargando...');  // text modifico el texto del elemento
                
                
            }
        })
            .done(function(response){
                $('div#caja2').html(response); //modifico mi actual caja con lo que contenga el archivo que traje con la peticion ajax
        })//.done = retorna que se efecturo el requerst y realziara lo que pase en la funcion
        .always(function(){
            $('div.cajaIntermedia').text('Completado !');
        }); //. always = se ejecuta si el done es fecctivo y le paso una funcion para que haga algo


    });


})();