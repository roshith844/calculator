let temp;
let operatorSaved;
function showOnScreen(numberInput){
  temp= document.getElementById('display').innerText+= numberInput
}
function showOperator(input){
     if(input===1){
          operatorSaved=1;
          }
     else if(input===2){
          operatorSaved=2;
     }else if(input===3){
          operatorSaved=3;
     }else if(input===4){
          operatorSaved=4;
     } 
}

function operate(){
}
function add(number1,number2) {
     let sum=number1+number2
     return sum;
   };
   
function subtract(number1,number2) {
     let sub=number1-number2
     return sub;
   };
function multiply (array) {
     let Result=1;
     let input= array
     let arrayLength = input.length
   for(i=0;i<arrayLength;i++){
   Result*= input[i]
   }
   return Result
   };
   function divide (number1,number2) {
   let divisionResult=number1/number2;
   return divisionResult;
   };
