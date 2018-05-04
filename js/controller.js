function createController(game){
  var $entrada = $('#entrada');
  var $gaps = $('.gaps');
  
  function showGaps() {
    $gaps.empty();
    game.getGaps().forEach(function (gap) {
      $('<li>')
      .addClass('gap')
      .text(gap)
      .appendTo($gaps);
    });
  };
      
  function changePlaceholder (text) {
    $entrada.val('').attr('placeholder', text);
  };
    
  function saveSecretWord () {
    game.setSecretWord($entrada.val().trim());
    $entrada.val('');
    showGaps();
    changePlaceholder('chute');
  };
  
  function readAttempt() {
    game.processAttempt($entrada.val().trim().substr(0, 1));
    $entrada.val('');
    showGaps();
  }

  function start () {
    $entrada.keypress(function (event) {
      if (event.which == 13) {
        switch (game.getStep()) {
          case 1:
            alert('etapa 1 - falta implementar');
            break;
          case 2:
            alert('etapa 2 - falta implementar');
            break;
        }
      }
    });
  }
   
  return { start: start };
}