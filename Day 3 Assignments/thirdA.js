//Using if-else conditional

// let marks=Number(prompt("Enter your marks"));

// if (marks>=90)
// {
//     console.log(`Your marks are ${marks} and grade is A+`);
// }
// else if(marks>=75 && marks<=90)
// {
//     console.log(`Your marks are ${marks} and grade is A`);
// }
// else if(marks>=60 && marks<=75)
// {
//     console.log(`Your marks are ${marks} and grade is B+`)
// }
// else if(marks>=45 && marks<=60)
// {
//     console.log(`Your marks are ${marks} and grade is B`);
// }
// else if(marks>=35 && marks<=45)
// {
//     console.log(`Your marks are ${marks} and grade is C`);
// }
// else
// {
//     console.log(`Your marks are ${marks} and you are fail`);
// }



//Using switch case 

// let marks=Number(prompt("Enter your marks"));
// switch(true){
//     case marks>=90:
//         console.log(`Your marks are ${marks} and grade is A+`);
//         break;
//     case marks>=75 && marks <=90:
//         console.log(`Your marks are ${marks} and grade is A`);
//         break;
//     case marks>=60 && marks<=75:
//         console.log(`Your marks are ${marks} and grade is B+`);
//         break;
//     case marks>=45 && marks<=60:
//         console.log(`Your marks are ${marks} and grade is B`);
//         break;
//     case marks>=35 && marks<=45:
//         console.log(`Your marks are ${marks} and grade is C`);
//         break;
//     default:
//         console.log(`Your marks are ${marks} and you are fail`);
// }



//using ternary
let marks=Number(prompt("Enter your marks"));
let per=( marks>=90) ? 'Your marks are'+marks+ 'and grade is A+' :
        (marks>=75 && marks <=90) ? 'Your marks are ' + marks + ' and grade is A':
        (marks>=60 && marks <=75) ? 'Your marks are ' + marks + ' and grade is B+':
        (marks>=45 && marks <=60) ? 'Your marks are ' + marks + ' and grade is B':
        (marks>=35 && marks <=45) ? 'Your marks are ' + marks + ' and grade is C':
                                    'Your marks are '+ marks + ' and you are fail';

console.log(per);
