const createController = game => {
  const $entrada = $('.entrada');
  const $gaps = $('.gaps');
  
  const showGaps = () => {
    $gaps.empty();
    game.getGaps().forEach(function (gap) {
      $('<li>')
        .addClass('gap')
        .text(gap)
        .appendTo($gaps);
    });
  };
      
  const changePlaceholder = text => $entrada.attr('placeholder', text);
    
  const saveSecretWord = () => {
    try{
      game.setSecretWord($entrada.val().trim());
      $entrada.val('');
      changePlaceholder('chuta');
      showGaps();
    }
    catch(err) {
      alert(err.message);
    }
  };
  
  const restart = () => {
    game.restart();
    $gaps.empty();
    changePlaceholder('Palavra secreta');
  };
  
  const readAttempt = () => {   
    try{
      game.processAttempt($entrada.val().trim().substr(0, 1));
      $entrada.val('');
      showGaps();
    
      if(game.winLose()) {
        
        setTimeout(() => {
          if (game.win()) {
            alert('Ganhou!');
          } else if (game.lose()) {
            alert('Uma pena, tente novamente.');
          }
          restart();
        }, 200);
      }
    }
    catch(err){
      alert(err.message);
    }   
  };

  const start = () => {
    $entrada.keypress(event => {
      if (event.which == 13) {
        switch (game.getStep()) {
          case 1:
            saveSecretWord();
            break;
          case 2:
            readAttempt();
            break;
        }
      }
    });
  };
   
  return { start };
};