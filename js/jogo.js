const createGame = sprite => {
  let secretWord = '';
  let gaps = [];
  let step = 1;
  
  const win = () => gaps.length 
    ? !gaps.some(function (gap) {
        return gap == '';
    })
    : false;
  
  const lose = () => sprite.isFinished();

  const winLose = () => win() || lose();
  
  const restart = () => {
    step = 1;
    gaps = [];
    secretWord = '';
    sprite.reset();
  };
  
  const processAttempt = attempt => {
    if (!attempt.trim()) throw Error('Chute inválido');
    
    const exp = new RegExp(attempt, 'gi');
    let result, right = false;
    
    while (result = exp.exec(secretWord)){
      right = gaps[result.index] = attempt;
    }

    if (!right) sprite.nextFrame();
  };
  
  const createGaps = () => {
    for (let i = 0; i < secretWord.length; i++) {
      gaps.push('');
    }
  };
  
  const nextStep = () => step = 2;
  
  const setSecretWord = word => {
    if (!word.trim()) throw Error('Palavra secreta inválida');
    secretWord = word;
    createGaps();
    nextStep();
  };
  
  const getGaps = () => gaps;
  
  const getStep = () => step;

  return { 
    setSecretWord,
    getGaps,
    getStep,
    processAttempt,
    win,
    lose,
    winLose,
    restart
  };
};