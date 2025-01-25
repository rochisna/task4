 function double(x){
    setTimeout(()=>{
        resolve(2*x);
    },1000);
};


//async handles promises and return promises

// Yes, that's correct! The async keyword in JavaScript handles promises and returns promises as well.

// Here’s a breakdown of how it works:

// 1. async Function Returns a Promise:
// Every function marked with the async keyword automatically returns a promise.
// If the async function returns a value (like a string or an object), JavaScript wraps that value in a promise.
// If the async function throws an error or returns a rejected promise, the returned promise will be rejected with that error.

//In an async function, you should return a promise if you're using await on it. 
async function sum () {
    let a = await double(10);
    let b = await double(a);
    let c  = await double(b);
    console.log(a+b+c)
}
sum()