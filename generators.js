//  Generators

function* colors()
{
    yield 'red';
    yield 'blue';
    yield 'green';
}

var generator = colors();

generator.next();// value='red' & done=false
generator.next();// value='blue' & done=false
generator.next();// value='green' & done=false
generator.next();// done=true

/*generators work along with for...of loop to do tasks*/
//example

const myColors = [];

for(let color of colors())
{
    myColors.push(color);
}

myColors // [red,blue,green]


// generators are used to iterate over custom objects 

const object = {
    a:1,
    b:2,
    c:3
}

//iterate over only b's and c's

function* b_c(obj)
{
    yield obj.b;
    yield obj.c;
}

const arr=[];
for(let element of b_c(object))
{
    arr.push(element);
}

arr  // [2, 3]

