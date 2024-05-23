// Anser to the Question no 7

const remuveDuplicates=(arry)=>{
    return [...new Set(arry)];
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const result = remuveDuplicates(numbers);

console.log(result);