function add(number1,number2) {
     let sum =number1+number2
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