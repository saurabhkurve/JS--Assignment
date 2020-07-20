

let ask=(a)=>{
    a=prompt("Accept terms & conditions");
    if((a=="yes") || (a=="Yes") || (a=="y") ||(a=="Y")){
        alert("You agreed !!!!");
    }
    else if((a=="no") || (a=="No") || (a=="N") || (a=="n")){
        alert("You cancelled the execution....");
    }
}

let res=ask();
console.log((res));

