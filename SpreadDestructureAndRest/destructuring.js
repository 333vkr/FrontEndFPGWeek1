/**The destructuring assignment syntax is a JavaScript expression 
 that makes it possible to unpack values from arrays, or properties from objects,
 into distinct variables. */

//USE CASES
/**
 * Assign indevidual values into destinct variables
 */

//Array destructuring
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//destructure days
const [day1,day2,day3,day4,day5,day6,day7]=week
console.log('Weekdays :',day1,day2,day3,day4,day5,day6,day7);

//Object destructuring
const user={
    fName:'AB',
    lName:'C',
    age:18,
    dob:'20-04-1998'
}

//destructuring properties
const {fName,lName,age,dob}=user
console.log('User Name :',fName,lName);
console.log('User age :',age);
console.log('User dob :',dob);