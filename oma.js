$(document).ready(function(){
    
    $('form').submit(function() {
       if ($('input').val() !== '') {
           var uusiTehtävä = $('input').val();
           var raksi = 'X';
           var uusiLi = $('<li>' + uusiTehtävä + raksi + '</li>');
           uusiLi.on('click', function() {
              $(this).remove(); 
           });
           $('ul').prepend(uusiLi);
           $('input').val('');
           $('input').focus();
           return false;
       }
    });
    
}); //doc.red.
