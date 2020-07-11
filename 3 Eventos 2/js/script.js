(function(){
    
    $(document).ready(function(){
       
        //de esta forma sabemos que se espicho algun boton dentro del contenedor div#example
        $('div#example').on('click','button',function(){
            //creo una variable para capturar el valor seleccionado
            //selecciono el contendor y luego el select seguido del option en estado selected
            var opcionSeleccionada = $('div#example select option:selected');
            //optengo en una variable el valor seleccionado
            var valor = opcionSeleccionada.val();
            //obtengo en una variable el valor del precio seleccionado con data y el nombre
            var precio = opcionSeleccionada.data('price');
            
            //muestro lo obtenido
            console.log(valor);
            console.log(precio);
            
            //variable que captura al cuadro de resultado
            var cuadroResultado = $('div.resultado');
            
            if(valor === "nada")
                {
                    alert("Por favor seleccione algun opcion valida");
                    cuadroResultado.html(" ");
                    return;
                }
            
            cuadroResultado.html('<h3>Nombre = '+valor+'</h3><br><h4>Precio = '+precio+'</h4>');
            
        });
        
        
        
        
    });
    
})();