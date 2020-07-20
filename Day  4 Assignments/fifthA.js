let sales=Number(prompt("Enter your sales ammount"));
    let calc;
    if ((sales>=0) && (sales<=5000)){
            calc=Number(sales*0.02);
            console.log(`Your total commision is ₹ ${calc}`);
    }
    else if ((sales>=5001) && (sales<=10000)){
        calc=Number(sales*0.05);
        console.log(`Your total commision is ₹ ${calc}`);
    }
    else if ((sales>=10001) && (sales<=20000)){
        calc=Number(sales*0.07);
        console.log(`Your total commision is ₹ ${calc}`);
    }
    else{
        calc=Number(sales*0.1);
        console.log(`Your total commision is ₹ ${calc}`);
    }