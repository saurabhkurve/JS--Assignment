let s=prompt("Enter OS ");
let p=prompt("Enter Version");
console.log(`The OS name is ${s} and version is ${p}`);


let string = prompt("Enter OS and its version (separated by space)").split(" ");   // Correct
console.log(`The OS name is ${string[0]} and version is ${string[1]}`);




