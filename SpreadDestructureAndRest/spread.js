/**The spread operator(...) allows an iterable to be expanded in places where 
zero or more arguments or elements are expected. 
 */
//USE CASES
/**
 * combining arrays
 * copying arrays
 * function arguments
 * destructuring
 * string manipulation
 */

//combining arrays using the spread operator
const arr1=['apple','banana'];
const arr2=['tomato','carrot'];

const combinedArray=[...arr1,...arr2] // using spread operator
console.log('combined array :',combinedArray);

//copying arrays
const orignalArr=[1,2,3,4]
const copy=[...orignalArr]
console.log('Copied array :',copy);

//function arguments
//define a function to sum elements
const getSum=(a,b,c)=>{
    console.log('Sum :',a+b+c);
}
//creating parameter list
const params=[1,2,3]
getSum(...params) //calling function


//*Destructuring
const num=[1,2,3]
const [a,b,c]=[...num]
console.log('destructured data :', a,b,c);

//string manipulation
const myName='Vaishnav'
const letters=[...myName]
console.log('Letters :',letters);