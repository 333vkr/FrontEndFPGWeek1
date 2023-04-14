/** The apply() function work similar to call() function.
 * the only difference is we can pass multiple parameters in the array and use them
 */
//USE CASE

//we have a function that prints name,age and gender defined inside an object but we need to pass different object data into it
//first object
let object3 = {
  name: "Vaishnav",
  getInfo: function (age, gender) {
    console.log(this.name + " " + age + " " + gender);
  },
};
//call the function
object3.getInfo(25,'male');

//creating new Object

let object4 = {
  name: "ABC",
};

//Call function defined in object3
object3.getInfo.apply(object4, [20, "female"]);
