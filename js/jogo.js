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

  return { 
    setSecretWord: setSecretWord,
    getGaps: getGaps,
    getStep: getStep
  }

}