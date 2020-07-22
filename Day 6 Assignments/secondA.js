let num1=Number(prompt("Enter Range"));   /* This code iterate loop itself when user enter the range means when user enter input 5 then loop iterate itself for 5 times in a proper manner.here user only enter range not first number and second number where user will give first number as a constant and second number will iterate loop upto range entered by user */  
for(let i=1;i<=num1;i++){
   document.write(num1 + 'x' + i + '=' + num1*i);
   document.write("<br>");
}