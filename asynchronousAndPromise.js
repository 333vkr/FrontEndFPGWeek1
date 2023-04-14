//**Asynchronous 
/**Functions running in parallel with other functions are called asynchronous.
 * asynchronous programming is a technique that enables our program to start a potentially long-running task and still be able to be responsive
 * to other events while that task runs, rather than having to wait until that task has finished.
*/
/** Asynchronous programs are difficult to write and difficult to debug.
 * because of this most JS methods don't use callbacks. instead, in JS asynchronous programming is solved using Promises
 */

//* Async / await

// Async/await is a special syntax to work with promises in a more comfortable fashion 

//*Async 
/** The async keyword can be placed before a function.
 * it means a function always returns a promise,
 * other values are wrapped in a resolved promise automatically.
 */

//* Await

/**The await keyword makes JS wait until that promise settles and returns its result. */

//* then, catch

/** promises have then, catch methods for doing different things depending on the outcome of the promise */

//then
/** When a promise is successful, we can then use the resolved data,
 *  we get the resolved data using .then() chaining method */

//catch
/** When a promise fails, we can catch the error and do something with the error information,
 *  we get the error information using .catch() chaining method */

//* Promises
/** A promise is an object in JS that will produce a value sometime in the future.
 * This usually applies to asynchronous operations.
 * In applications asynchronous operations happen a lot.
 * This can be API requests, delayed data processing and much more.
 * A promise has 3 states
 * 1. pending - the promise still in the work
 * 2. fulfilled - the promise resolves successfully and returns a value.
 * 3. rejected - the promise fails with an error. 
 */

//* Promise.all()
/**It is a static method it takes an iterable of promises as input and returns a single promise.
 * This returned promise fulfills when all of the input promises are fulfills,
 * with an array of fulfillment values.
 * it rejects when any of the inputs promises rejects, with the first rejection reason.
 */

//* Promise.allSettled()

/**It is a static method it takes an iterable of promises as input and returns a single promise.
 * the returned promise fulfills when all of the input promises settle.
 */

//* Promise.any()

/** The static method takes an iterable of promises and returns a single promise.
 * the returned promise fulfills when any of the input promises fulfills, with this first fulfillment value.
 * it rejects when all of the input promises reject with an aggregateError containing an array of rejection reasons.
 */


//Promise Example
//creating a promise, in the real example it may be an API call
const resolvedPromise= new Promise((resolve,reject)=>{  
    resolve(['value1','value2'])
})
const resolvedPromise2= new Promise((resolve,reject)=>{  
    resolve(['value3','value4'])
})
//rejected Promise
const rejectedPromise= new Promise((resolve,reject)=>{
    reject('API Faild!!')
})

//log resolved promise
// console.log('Resolved promise :',resolvedPromise);
//log rejected promise
// console.log('Rejected promise :',rejectedPromise);

//the above codes are asynchronous so if we console log the two an uncaught error will be thrown. we can handle it by using .then() and .catch()
resolvedPromise.then((res)=>{
    console.log('resolved promise data :',res); //console log the data
}).catch((err=>{
    console.log(err); //console logs the error
}))

rejectedPromise.then((res=>{
    console.log(res); //console log the data
})).catch(err=>{
    console.log('Rejected promise error info :',err); //console log the error
})


//*Promise.all() use case

//If we need to show a success message only after all the API calls fulfilled
//all APIs success case
const allPromises=Promise.all([resolvedPromise,resolvedPromise2])
allPromises.then((res)=>{
    console.log('Promise.all(), all promises success :', res.flat());
})

//any one API rejected case
const allPromises2=Promise.all([resolvedPromise,resolvedPromise2,rejectedPromise])
allPromises2.then((res)=>{
    console.log(res.flat());
}).catch(err=>{
    console.log('Promise.all(), Any one promise rejected case :',err);
})

//Promise.allSettled() use case
//all APIs success case
const allPromises3=Promise.allSettled([resolvedPromise,resolvedPromise2])
allPromises3.then((res)=>{
    console.log('Promise.allSettled(),all promises success,.then():', res.flat());
})

//any one API rejected case
const allPromises4=Promise.allSettled([resolvedPromise,resolvedPromise2,rejectedPromise])
allPromises4.then((res)=>{
    console.log('Promise.allSettled(), then() :',res);
}).catch(err=>{
    console.log('Promise.allSettled(), Any one promise rejected case, catch() :',err);
})
//Promise.any() use case
//all APIs success case
const allPromises5=Promise.any([resolvedPromise,resolvedPromise2])
allPromises5.then((res)=>{
    console.log('Promise.any(),all promises success,.then():', res.flat());
})

//any one API rejected case
const allPromises6=Promise.any([resolvedPromise,resolvedPromise2,rejectedPromise])
allPromises6.then((res)=>{
    console.log('Promise.any(),one promise rejected case, then()',res.flat());
}).catch(err=>{
    console.log('Promise.any(), Any one promise rejected case, catch() :',err);
})



//* Async / await use case when fetching an API

/** Assume we have 2 API s
 * 1. resolvedPromise 
 * 2.rejectedPromise 
 */
//create a function for geting data from apis

const getData=async (api,status)=>{
    const response= await api
    console.log(`API response ${status} :`,response);
}

//call the function with resolevedPromise
getData(resolvedPromise,'resolved')

//call the function with rejectedPromise
getData(rejectedPromise,'rejected')