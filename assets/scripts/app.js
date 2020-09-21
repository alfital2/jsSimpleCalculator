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
  const calculationDescription = `${calculationBefore} ${operator} ${numberToCalc}`;
  outputResult(currentResult,calculationDescription);
}

function handleOperator(operatorType){
  currentResult = getUserInput();
  cleareUserInput();
  action= operatorType;
}


function applyOperator(operator,num){

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
        resetResultAndDescrition('Error','Error')
        return 'fail';
      }
      currentResult = currentResult /  enteredNumber ;
      createAndWriteOutput(operator,initialResult,enteredNumber);
      break;

    default: 
      alert("please choose operator");
      return 'fail';

  }
}

function equals(){
  const userInput = getUserInput();
  const initialResult = currentResult;
  if (applyOperator(action,userInput) == 'fail') return;
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

function resetInput(){
  currentResult = defaultResult;
  action='';
  cleareUserInput();
  resetResultAndDescrition(0,0);
}

function resetResultAndDescrition(val1,val2){
  document.getElementById('current-calculation').innerHTML = val1;
  document.getElementById('current-result').innerHTML = val2;
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
clearBtn.addEventListener('click',resetInput);


// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });