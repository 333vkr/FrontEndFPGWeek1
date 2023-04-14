/**Splice array in JavaScript is a method that adds or removes items to or from the array
 * Splice method changes the original array
 * 
 */

//USE CASES
/**
 * 1. Replace elements from an array
 * 2. Remove content from the original array 
 * 3. insert a new Element into the original array
 */

//Replace element from an array
const fruits=['Banana','Apple','Orange','Tomato']
//replace tomato with Watermelon
fruits.splice(3,1,'Water melon')
console.log('Replaced Array:',fruits);


//Remove Element from the original array
const vegetables=['Potato','Onion','Cauliflower']
vegetables.splice(2,1)
console.log('Item Removed Array :',vegetables); //Cauliflower removed

//Insert a new element
const numbers=[1,2,4,5]
numbers.splice(2,0,3) //insert 3 at index 2
console.log('Inserted array :',numbers);