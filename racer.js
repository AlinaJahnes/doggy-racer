$(document).on('ready', function(){
  $('.racer-link').on('click',function(){
    $('#racer').show();
    $('#welcome-container').effect('shake');
    $('#modal-background').show();
  })

  $('#start-button').on('click', function(){
    var movement1 = 0;
    var movement2 = 0;
    $('#player1').css('margin-left','0%').attr('src', './img/running-dog.gif');
    $('#player2').css('margin-left','0%').attr('src', './img/running-dog.gif');
    $('#start').hide();

    $(document).on('keyup',function(event){
      if(event.keyCode == 81) {
        if (movement1 < 92) {
          console.log(movement1);
          movement1 += 2;
          $('#player1').css('margin-left', movement1 + '%');
        } else {
          $('#notification').text('Stanley won!');
          $(document).unbind('keyup');
          $('#player1').attr('src', './img/static-dog.png');
          $('#player2').attr('src', './img/static-dog.png');
        };        
      };
      if(event.keyCode == 80) {
        if (movement2 < 92) {
          console.log(movement1);
          movement2 += 2;
          $('#player2').css('margin-left', movement2 + '%');
        } else {
          $('#notification').text('Chewy won!');
          $(document).unbind('keyup');
          $('#player1').attr('src', './img/static-dog.png');
          $('#player2').attr('src', './img/static-dog.png');
        };        
      };
    });

  });
  
  var closeModal = function(){
    $('#modal-background').hide('fade');
    $('#racer').hide('fade');
    $(document).foundation('reflow'); 
  }

  $('#close-button').on('click', closeModal);

  $('#modal-background').on('click', closeModal);
});