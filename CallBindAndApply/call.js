/**call() allows for a function or method belonging to one object
to be assigned and called for a different object.
we can refer to the values of the object by using the this keyword. */

//use Case
//if we need to call a function defined inside an object with parameter as a different object
 
//create an object with a function
let object1={
    fName:'Vaishnav',
    lName:'K',
    getFullName:function(){
        console.log(this.fName+' '+this.lName);
    }
}
//call the function
object1.getFullName()

//if we want to call this getFullName() with another object we can use call()

let object2={
    fName:'ABC',
    lName:'D'
}

//Call The function using call() method
object1.getFullName.call(object2)