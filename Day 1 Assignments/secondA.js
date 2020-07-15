/*
Var : Var allows us global declaration to the variables means we can use variable everywhere where you want to use 
in your javascript code.
*/
var name = "Saurabh";  //String
console.log(name);
var age=20;           //Number
var canWalk=true;
var sports=['Cricket','Football','Basketball'];    //Array
console.log(sports);
var friend={
    name:"Chetan",
    Age:"24"
}
console.log(friend);


var a=10;
console.log(a);

var a=null;
console.log(a);

/*
Let : Let allows us maintaining the scope of variables i.e.Local scope which mean there is a block of code and 
declared variable in that block will be accesible only within that block of code.
*/

{
    let name="Vrishabh";
    name ="Saurabh";       //Renaming the code inside the block
    console.log(name);
}

/*
const : This is constant/static value which cannot be change.in const declaration you have to give the value when 
you initializing the variable.you cannot reassign value to the variable when you dealing with const.
*/

const city="Mumbai";
console.log(city);

const cities=["Mumbai","Nashik","Nagpur"];
console.log(cities);