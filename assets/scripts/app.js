print = console.log;
const defaultResult = 0 ;
let currentResult = defaultResult ;
let calculationDescription = '';
let action;

function getUserInput(){
  const value = parseInt( userInput.value ) ;
  cleareUserInput();
  return value;
}

function cleareUserInput(){
  userInput.value=0
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

function validateInputExist(num){
  return isNaN(num);
}
function applyOperator(operator,num){
  if(validateInputExist(num)){
    alert('enter a number to proceed!');
    return 'fail';
  }

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
      if (enteredNumber == 0) {
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
  if(applyOperator(action,userInput)=='fail') return;
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


function resetInput(){
  currentResult = defaultResult;
  cleareUserInput();

}




addBtn.addEventListener('click',()=>handleOperator(addBtn.name));
subtractBtn.addEventListener('click',()=>handleOperator(subtractBtn.name));
multiplyBtn.addEventListener('click',()=>handleOperator(multiplyBtn.name));
divideBtn.addEventListener('click',()=>handleOperator(divideBtn.name));
equalsBtn.addEventListener('click',equals);
clearBtn.addEventListener('click',resetInput);
