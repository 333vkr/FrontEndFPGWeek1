/** First Class functions mean that function can be treated like other variables.
 * first class functions can be assigned to any other variable or passed as an argument or can be returned by another function.
 * these kinds of functions are simply a value and are another type of object.
 */

//USE CASE
//when we create an object, we can assign functions into a key just like any other value.

//create an object
let firstClassObject={
    add:(x,y)=>{
        console.log('sum :' ,x+y);
    },
    subtract:(x,y)=>{
        console.log('Difference :',x-y);
    }
}

//calculate the sum
firstClassObject.add(10,5)
//calculate the difference
firstClassObject.subtract(10,5)

//in the above use case, we assigned two separate functions into two keys named add, subtract respectively