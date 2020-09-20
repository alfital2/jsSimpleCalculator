print = console.log;
const defaultResult = 0 ;
let currentResult = defaultResult ;
let calculationDescription = '';
let logEntries = []; //this will hold a documentation of all the operations that were done.
let action;

function getUserInput(){
  const value = parseInt( userInput.value ) ;
  cleareUserInput();
  return value;
}

function cleareUserInput(){
  userInput.value ='';
}

function createAndWriteOutput(operator , calculationBefore, numberToCalc){
  print(operator , calculationBefore, numberToCalc);
  const calculationDescription = `${calculationBefore} ${operator} ${numberToCalc}`;
  outputResult(currentResult,calculationDescription);
}

function handleOperator(operatorType){
  currentResult = getUserInput();
  cleareUserInput();
  action= operatorType;
}

function applyOperator(operator,num){
  print(operator);
  const enteredNumber = num;
  const initialResult=currentResult;
  switch(operator){
    case '+':
      currentResult = currentResult +  enteredNumber ;
      createAndWriteOutput(operator,initialResult,enteredNumber);
      break;
    case '-':
      currentResult = currentResult -  enteredNumber ;
      createAndWriteOutput(operator,initialResult,enteredNumber);
      break;
    case '*':
      currentResult = currentResult *  enteredNumber ;
      createAndWriteOutput(operator,initialResult,enteredNumber);
      break;
    case '/':
      if (currentResult == 0) {
        alert("division by zero isn't allowed!");
        return;
      }
      currentResult = currentResult /  enteredNumber ;
      createAndWriteOutput(operator,initialResult,enteredNumber);
      break;
  }

}

function equals(){
  const userInput = getUserInput();
  const initialResult = currentResult;
  applyOperator(action,userInput);
  createAndWriteOutput(action,initialResult,userInput);
  putNumberInTheUserInput(currentResult);
}

function clearZeroAhead(){
  if (userInput.value[0] == 0)
      userInput.value=userInput.value.substring(1);
}

function putNumberInTheUserInput(number){
  clearZeroAhead()
  userInput.value += number;
}

const numericButtons = document.querySelectorAll('.numericBtn')
numericButtons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', ()=>putNumberInTheUserInput(currentBtn.name))
})


addBtn.addEventListener('click',()=>handleOperator(addBtn.name));
subtractBtn.addEventListener('click',()=>handleOperator(subtractBtn.name));
multiplyBtn.addEventListener('click',()=>handleOperator(multiplyBtn.name));
divideBtn.addEventListener('click',()=>handleOperator(divideBtn.name));
equalsBtn.addEventListener('click',equals);
