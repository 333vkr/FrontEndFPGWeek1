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
 *  we get the resolved data using .then chaining method */

//catch
/** When a promise fails, we can catch the error and do something with the error information,
 *  we get the error information using .catch chaining method */
