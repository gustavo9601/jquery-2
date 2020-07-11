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
        .fail(function(request, errorType, errorMessage){ /*
        parametros
        request = la url no le responde
        errorType = el tipo de error de coenxion
        errorMessage = el mensaje
        */ 
            
            //tipos de errores = timeout, error, abort, parserror //paserserror = no puede recibir el tipo de objeto o elemneto a mostrar
        
            console.log(errorType);
            alert(errorMessage);
            
            
                                                            
            
        })//.fail = devolvera si falla el request lo que le pase en la funcion
        .always(function(){
            $('div.cajaIntermedia').text('Completado !');
        }); //. always = se ejecuta siempre al final de ejecutar la peticion request y hara lo que yo le pase por funcion


    });


})();