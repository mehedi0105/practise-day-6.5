// Anser to the Question no 5

const Number = () =>{
    const arry = [];
    for(let i=1;i<=50;i++)
        {
            if(i%3===0 && i%5===0){
                arry.push(i);
            }
        }
    return arry;
}

const result = Number();
console.log(result);;