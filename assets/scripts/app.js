const defaultResult = 0 ;
let currentResult = defaultResult ;
let calculationDescription = '';


function add(){
  currentResult = currentResult + parseInt( userInput.value );
  outputResult(currentResult,calculationDescription);
}

function subtract(){
  currentResult = currentResult - parseInt( userInput.value );
  outputResult(currentResult,calculationDescription);
}

function mul(){
  currentResult = currentResult * parseInt( userInput.value );
  outputResult(currentResult,calculationDescription);
}

function div(){
  currentResult = currentResult / parseInt( userInput.value );
  outputResult(currentResult,calculationDescription);
}



addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);
