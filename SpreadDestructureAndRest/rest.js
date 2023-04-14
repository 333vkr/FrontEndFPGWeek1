/** A rest parameter(...) allows us to represent 
 an indefinite number of arguments as an array*/

 //USE CASES
 //most common use case of rest parameter is to receive arguments of a function

 //defining a function to calculate the sum of numbers passed as an argument

 const calculateSum=(...args)=>{
    let total=0
    for (const num of args) {
        total+=num
    }

    console.log('Total :', total);
 }

//call the function with different lengths of arguments
calculateSum(1,2) //total will be 3
calculateSum(1,2,3) //total will be 6
calculateSum(1,2,3,4) //total will be 10
