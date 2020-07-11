(function()
{
    //selecciono el documento
    //ready, sabe cuando se cargo la pagina
    // y cargara la funcion que le pasemos
    $(document).ready(function(){
        
        var miContenedor = $('div#container');
        var miUl = $('ul');
        var miLi = $('li');
        var miLi1 = $('li.class1');
        var miLi2 = $('li.class2');
        var miBoton = $('button');
        
        
        miContenedor.html("<h1>Me han cambiado por esto desde el javascript</h1>");
        
        
        miLi1.css({
            backgroundColor:'red',
            color: 'white'
            
        })
        
        miLi2.text('Me cambiaron desde el javascriot');
        
        //selecciono la variable que contiene todos los li
        //con eq y la poscion 0 selecciono el primero elecmnto
        miLi.eq(0).css({
            fontSize: '100px'
        });
        
        
        miBoton.attr('class','miClase');
        
        /************************************************/
        //selecciono a los ul dentro de la variable
        var miUl2 = $('div.container2 ul');
        //con fin le digo encuentra a todos los li
        //eq selecciono la posicion 2 --> 3
        //addClass = le añado una calse que tiene estilos
        miUl2.find('li').eq(2).addClass('otraClase');
        
        
        
        //parent, selecciono a su padre directo
        console.log( miUl2.parent() );
        //patents, selecciona su padre , a todo lo que este por encima de el incluyendo al body
        console.log( miUl2.parents() );
    });
    
})();