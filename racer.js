$(document).on('ready', function(){
  $('button').on('click', function(){
    var movement1 = 0;
    var movement2 = 0;
    $('#player1').css('margin-left','0%');
    $('#player2').css('margin-left','0%');
    $('#start').hide();

    $(document).on('keyup',function(event){
      if(event.keyCode == 81) {
        if (movement1 < 92) {
          console.log(movement1);
          movement1 += 2;
          $('#player1').css('margin-left', movement1 + '%');
        } else {
          $('#notification').text('Player1 won!');
          $(document).unbind('keyup');
        };        
      };
      if(event.keyCode == 80) {
        if (movement2 < 92) {
          console.log(movement1);
          movement2 += 2;
          $('#player2').css('margin-left', movement2 + '%');
        } else {
          $('#notification').text('Player2 won!');
          $(document).unbind('keyup');
        };        
      };

    });
  });
});