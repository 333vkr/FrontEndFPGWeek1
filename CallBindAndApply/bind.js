/** bind() returns the exact copy of a function and binds it with an object.
 This method is used to bind and keep a copy of a method and use it later.
 we can use the function whenever we want by invoking it. */

//USE CASE
//create an object
let object5={
    fName:'Vaishnav',
    lName:'K',
    printName:function(){
        console.log(this.fName+' '+this.lName);
    }
}
//Call the function
object5.printName()

//create a new object
let object6={
    fName:'ABC',
    lName:'D'
}
//calling bind function returns a copy of the function and appends to the new object and can use it later
let bindFn=object5.printName.bind(object6)
bindFn()
bindFn()