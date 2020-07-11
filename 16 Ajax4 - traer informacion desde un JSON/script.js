(function(){

    $(document).ready(function(){

        // selecciono a ajax y le paso el archivo o url que nos devovlera la informacion
        $.ajax('destino.json' , {
            dataType: 'json',  //tipo de archivo
            contentType: 'application/json', 
            cache: false //para que no consulte en cache sino directamente en el servidor
        })
            .done(function(response){

            //imprimiendo todo el objeto
            console.log(response);
            var html;


            /*.each // metodo pregardo de jequedy qu epermite recorrer arreglos

            index = indica la posicion
            element = devulve lo que contenga en la posicion
            */
            $.each(response, function(index,element){
                console.log(index);
                console.log(element);


                //VARIABLE DIV
                html += '<div class="item-Box" data-price="2000  data-id="'+element.id+'">';
                html += '<img src="img/image'+element.id+'.jpg" alt="">';
                html += '<div class="item-Title">'+element.name+'</div>';
                html += '<p>'+element.description+'</p>';
                html += '<div class="item-Price">'+element.price+'</div>';
                html += '<div class="boton">';
                html += '<button>Añadir al carro</button>';
                html += '</div><div>';
                html += '<a href="#" class="info-Link">Masinformacion</a>'; 
                html += '</div>';
                html += '<div class="mas-Informacion">'+element.moreInfo+'</p>';
                html += '</div>';
                html += '</div>';

                //LO AÑADO AL BODY EL HTML
                $('body').append(html);

            });

        });



    });


    //escruchar cuando se haga click sobre mas informacion
    $('body').on('click', 'a.info-Link', function(event){
        event.preventDefault();  //cancelo los eventos por defecto del link
        //this selecciono al link presionado
        //closset = selecciono a un padre contenedor
        //find = busco el elemento de clase mas-informacim
        //slideToggle = le aplico el efecto de esconde muestra
        $(this).closest('div.item-Box').find('div.mas-Informacion').slideToggle();


    });




})();