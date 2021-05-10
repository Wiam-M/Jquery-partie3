$(function(){
$('#texte').click(function(){
   //.append sur le click on va apparaitre le button et input
   $('body').append("<input type = 'text'>", "<button type = 'button'> click <button>")
   $("button").click(function(){
      var newColor = $('input').val();
      //class coleur donne les dimension des coleurs ajoutés
      var newDiv = $("<div class='color'></div>");
      //newDiv c est le parent
      var parent = $('#parentColor').append(newDiv)
      // var newDiv = $("parent:last-child");
      newDiv.css("background-color", newColor);
      newDiv.attr('id', newColor);
      var idOfColor = $('.color')
    
      console.log(newColor);
   })
})

})
