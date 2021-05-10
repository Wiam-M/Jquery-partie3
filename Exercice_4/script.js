$(function(){
    $('#green').click(function(){
      setTextColor('green')
    })
    $('#red').click(function(){
      setTextColor('red')
     })
     $('#blue').click(function(){
        setTextColor('blue')
     })
})

function setTextColor(color) {
   $('#texte').css('color' , color);
}
