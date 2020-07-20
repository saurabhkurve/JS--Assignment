const student ={
    name:"Helsinki",
    age:24,
    projects:{
        dicegame:"Two players dice game using JavaScript",
    }
}


//console.log(student.projects.dicegame);

const {name,age,projects:{dicegame}}=student;  //destructuring object
console.log(dicegame);


