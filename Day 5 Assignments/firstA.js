let num=prompt("Enter Positive Number(Separated by space)").split(' ');

let odd=num.filter(el=>el%2 !=0);   //filtering odd numbers
    console.log(odd);

let cube=num.filter(el => el%2 !=0).map(el =>{      //Filtering and and generates array of filtered cube
    let cube1=el*el*el;
    return cube1;
})
console.log(cube);

