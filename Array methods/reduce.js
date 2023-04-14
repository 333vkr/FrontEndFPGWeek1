/**The reduce method executes a user-supplied callback function,
the “reducer”, on each element of the array. It passes in the
return value from the calculation on the preceding element.
The result is a single value. It is the result of running the
reducer across all elements of the array */
/**
 * The parameters are
 * 1. callback function
 * 2. initial value
 */
//UESE CASES
/**
 * 1. Find sum of an array
 * 2 .Flatten an array
 */

//find sum of an array
const prices=[5.99,2.99,3.99,11.59]
const sum= prices.reduce((preValue,currValue)=>(preValue+currValue),0)
console.log('Sum :',sum);

//Flatten an array
const data=[[2,3,5],[7,8,9]]
const flattenData=data.reduce((prevValue,currValue)=>(prevValue.concat(currValue)))
console.log('Flattend Array :',flattenData);