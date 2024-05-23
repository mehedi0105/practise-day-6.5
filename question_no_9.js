// Anser to the Question no 9

const isNumber=(value)=> {
    return typeof value === 'number';
  }

const checkArray=(arr)=> {

  return Array.isArray(arr);

}

const monthySavings=(arry,number)=>{
     
    if(checkArray(arry) && isNumber(number)){
       let save = 0;
       for(let i=0;i<arry.length;i++)
        {
            if(arry[i]>=3000)
                {
                   save += (arry[i]-(20 * arry[i]) / 100);
                }
            else{
                save+=arry[i];
            }
                      
        }
        let result = save-number;
        if(result>=0){
            console.log(result);
        }
        else
        {
            console.log("earn more")
        }
    }
    else
    {
        console.log("invalid input");
    }
}

monthySavings([1000,2000,3000],5400);
monthySavings([1000,2000,2500],5000);
monthySavings([900,2700,3400],10000);
monthySavings(100,[900,2700,3400]);