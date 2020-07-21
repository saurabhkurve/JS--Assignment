// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response=>response.json())
// .then(data=>console.log(data))



async function fetchTodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

fetchTodos();



let obj1 = {
    name:'Saurabh',
    age:20,
    canCode:true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str);