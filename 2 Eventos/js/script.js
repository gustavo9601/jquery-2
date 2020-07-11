(function(){
    $(document).ready(function(){
        //guardamos el cuadro
        var cuadrado = $('div.cuadrado');
        var contenedor = $('div.contenedor');
        var titulo = $('h1');
        //evento al dar clik sobre el cuadro
        cuadrado.on( 'click',function(){
            
            contenedor.css({
                backgroundColor: "white"
            })
            
            titulo.css({
                color: "black"
            })
            console.log("Hola me espicharomn") 
        });


    });
})();