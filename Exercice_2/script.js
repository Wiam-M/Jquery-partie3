
$(document).ready(function(){
    $('#image').dblclick(function(){
        $('img').animate({ //animer a chaque double clique on ajoute 500px
            width: '+=500px'
        })
        // $(this).css({"width": "500px"});
    })
})