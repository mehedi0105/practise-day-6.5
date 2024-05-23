// Anser to the Question no 6

const checkFreinds=(array)=>{
    let temp = array[0];
    for(let i=0;i<array.length;i++)
        {
            if(array[i].length>temp.length)
                {
                    temp=array[i];
                    // console.log(array[i])
                }
        }
        return temp;

}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const result = checkFreinds(friends);
console.log(result)