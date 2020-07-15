console.time("Time Taken")
console.log("Hello LetsUpgraders !!")        //Prints the message on console
console.error("An error has occured!!");     //Sets the warning message to the console if we make any mistake
console.warn("This is warning")              //Sets Warning messageon console if there is any warning
var a = {name:"Saurabh",Age:"20",City:"Mumbai"}
var b = {name:"Vrishabh",Age:"20",City:"Mumbai"}
var c = {name:"Chetan",Age:"20",City:"Mumbai"}
//console.log(a);
//console.log(b);
//console.log(c);   //This Shows tha above record separately on console
//console.log({a,b,c});  //This shows above record combinely on console
console.table({a,b,c});   //This shows the above record in table format on console
console.timeEnd("Time Taken");   //Gives an execution time between console.time and console.timeEnd
console.log('%c Customised Message','color:yellow');  