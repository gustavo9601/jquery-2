(function(){


    $(document).ready(function(){
        var contenedor = $('div#example'); 

        //delegacion de eventos
        //va a escuhar los cambio con change
        //en el div#example pero solo en el select#place
        contenedor.on( 'change' , 'select#place' , function(){
            //variable que cptura la opcion selecionada con la porpiedad css :selected
            var op = $('option:selected');

            //extraigo su valor
            var valor = op.val();

            //extraigo el data de tipo price : data-price="  "
            var precio = op.data('price');

            console.log(valor,"  ",precio);

            //capturo el div de reusltado
            var resutlado =  $('div.resultado');
            //variable que contendra el html concatenado con los resutlados
            var cambioHtml = "<h3>Nombre = "+valor+"</h3>";
            cambioHtml += "<h4>Precio = "+precio+"</h4>"

            
            //validacion si selecciona la opcion por defecto
            if(valor === "nada" || precio === "undefined")
            {
                cambioHtml = " ";
            }

            
            //llamo al div y le nofico el html, lo que contiene la variable
            resutlado.html( cambioHtml );



        });

    });


})();