$(function(){
//    $('#green').mouseenter(function () { 
//         $('#texte').css('color' , 'green')
//     });
//     $('#red').mouseenter(function () { 
//         $('#texte').css('color' , 'red')
//     });
//     $('#blue').mouseenter(function () { 
//         $('#texte').css('color' , 'blue')
//     });
    $('#green, #red, #blue').mouseleave(function () { 
        $('#texte').css('color' , '')
    });
    $('#green, #red, #blue').mouseenter(function () { 
        console.log($(this))
        console.log($(this).attr('id'))
        //this c est pour red green blue , on l attribue un id qui recupere la value dans 
        var textColor = $(this).attr('id');
        $('#texte').css('color' , textColor)
    });
})

