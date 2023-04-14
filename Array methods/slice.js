/** The slice() method returns a copy of an array’s portion into a new array object. 
 * This object is selected from start to end.
 * the original array will not be modified.
 * Also, if a new element is added to one of the arrays, the other array will not be affected.
 * The parameters of the slice() method are a starting and finishing index.
 * */

//USE CASES
/**
 * 1. Copy Array
 * 2. Create sub arrays
 */

//copy array
const numArray=[1,2,3,4,5]
const numCopyArray=numArray.slice()
console.log('Copied array :',numCopyArray);

//Creating sub arrays

const  week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  //create sub-arrays of weekend
  const weekEnd=week.splice(5,6)
  const weekDays=week.splice(0,5)

  console.log('Week Days :',weekDays);
  console.log('Weekend :',weekEnd);