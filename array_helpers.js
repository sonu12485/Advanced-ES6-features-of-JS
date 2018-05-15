/*
arrayhelpers are used to handle data in arrays in JS 
these are to be used inorder to avoid the use of for loops to handel array data
*/

/*
1-> forEach()
*/

let numbers = [1,2,3];

numbers.forEach( (num) =>{
  console.log(num)
});

let sum=0;
function add(number)
{
    sum+=number;
}

numbers.forEach(add);
//pass a reference of the function and not add() or add(number)

/*
2-> map()
*/

let double = numbers.map( (num) => {
    return num*2; //having a return inside a map iterator function is mandatory
});

console.log(double); // [2,4,6]

let objects = [
    {a:1, b:2},
    {a:3, b:4},
    {a:5, b:6}
];

let bs = objects.map( (object) => {
    return object.b;
});

bs //contains all b's 

/*
3-> filter()
*/

let objects = [
    {a:1, b:1},
    {a:0, b:2},
    {a:1, b:3},
    {a:0, b:4},
    {a:1, b:5}
]

let where_a_is_1 = objects.filter( (object) =>{
    return object.a === 1; 
    // return true or false if true object included else not
});

where_a_is_1 // array of objects where a=1


/*
4-> find()
*/

let numbers = [1,2,3];

//find number 2 in numbers array
let two = numbers.find( (number) =>{
    return number === 2;
});

two //2

/*
5-> reduce()
*/

let numbers = [1,2,3];

let sum_of_numbers_in_array = numbers.reduce( (sum,number)=>{
    return sum + number;
},0/*initial value*/);

sum_of_numbers_in_array // 6


//END

/* ... operator */

function addNumbers(...numbers)//numbers = [1,2,3,4,5,6,7] combine them into a single array
{
    return numbers.reduce( (sum,number)=>{
        return sum + number;
    },0);
}

addNumbers(1,2,3,4,5,6,7);

//destructuring

const object={
    a:1,
    b:2
};

const { a, b } = object; // similar to const a = object.a ...


