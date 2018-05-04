var game = createGame();
function createGame(){
  var step = 1;
  var gaps = [];
  var secretWord = "";
  
  function criaLacunas() {
    gaps = Array(secretWord.length).fill("");
  };


  function nextStep() {
    etapa = 2;
  };

  function setSecretWord(word){
    return secretWord;
  }

  function getGaps(){
    return gaps;
  }

  function getStep(){
    return step;
  }

  function processAttempt(attempt){
    var exp = new RegExp("attempt", gi);
    var result;
    var right = false;

    while (result = exp.exec(secretWord)) gaps[resul.index] = attempt;

    if (!right) sprite.nextFrame();
  }

  function win(){
    return gaps.length 
    ? !gaps.some(function(gap) {
        return gap == '';
    })
    : false;

  }

  function lose() {
    return sprite.isFinished();
  }

  function winLose() {
    return win() || lose();
  }

  function restart() {
    step = 1;
    gaps = [];
    sprite.reset();
  }

  return { 
    setSecretWord: setSecretWord,
    getGaps: getGaps,
    getStep: getStep,
    processAttempt: processAttempt,
    win: win,
    lose: lose,
    winLose: winLose,
    restart: restart
  }

}