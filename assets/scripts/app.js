const defaultResult = 0 ;
let currentResult = defaultResult ;
let calculationDescription = '';

function getUserInput(){
  return parseInt( userInput.value );
}

function createAndWriteOutput(operator , calculationBefore, numberToCalc){
  const calculationDescription = `${calculationBefore} ${operator} ${numberToCalc}`;
  outputResult(currentResult,calculationDescription);
}

function add(){
  const enteredNumber = getUserInput();
  const initialResult=currentResult;
  currentResult = currentResult +  enteredNumber ;
  createAndWriteOutput('+',initialResult,enteredNumber);
}

function subtract(){
  const enteredNumber = getUserInput();
  const initialResult=currentResult;
  currentResult = currentResult -  enteredNumber ;
  createAndWriteOutput('-',initialResult,enteredNumber);
}

function mul(){
  const enteredNumber = getUserInput();
  const initialResult=currentResult;
  currentResult = currentResult *  enteredNumber ;
  createAndWriteOutput('*',initialResult,enteredNumber);
}

function div(){
  const enteredNumber = getUserInput();
  const initialResult=currentResult;
  currentResult = currentResult /  enteredNumber ;
  createAndWriteOutput('/',initialResult,enteredNumber);
}



addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);
