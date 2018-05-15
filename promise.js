
promise = new Promise((resolve, reject) =>{
    resolve();
});

// each promise object should have a function and that function gets two parameters as
// functions - resolve(), reject() 

promise
    .then( ()=>{
        console.log("promise resolved");
    })
    .catch( ()=>{
        console.log("promise rejected");
    });

// .then is executed when promise is resolved 
// .catch is executed when promise is rejected

// you can also have multiple .then or .catch

// Use of fetch()

fetch(url)
    .then( response => response.json())  // this .then compulsary to get our data
    .then( data => console.log(data));



// async await -

async function myfunc()
{
	return "hello";
}

console.log(myfunc()) // returns a promise as the async keword is provided in the function

async function myfunc()
{
    let promise = new Promise( (resolve, reject)=>{
        setTimeout( ()=> resolve("okk"), 2000);
    });

    const result = await promise;  
    // await makes it wait till the promise resolves and after the promise is resolved
    // after that it assigns the data returned from the promise to result  
    return result;
}

myfunc()
    .then( res => console.log(res)) // returns okk after 2 sec's
    .catch( err => console.log(err))

// !(IMP)  await can only be used inside a async function and not a normal function

