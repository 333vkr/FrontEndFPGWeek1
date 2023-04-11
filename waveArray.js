/** Waveform of an array means the first element is greater than the second element,
 * the second element is less than the third element
 *  and the same pattern repeated again and again */

/** We can create a wave array by these steps
 * 1. sort the array
 * 2. swap adjacent elements
 */


//example
//input arr[]=[20, 10, 8, 6, 4, 2]
//expected output arr[]=[20,8,10,4,6,2]

//define the array
let array = [20, 10, 6, 8, 4, 2];
console.log("Input :", array);
//first sort the array
const sortArray = (array = []) => {
  return array.sort((a, b) => b - a);
};
//sorted array
let sortedArray = sortArray(array);
console.log("Sorted array :", array);

//* Second step is to swap the sorted array elements
const swapElements = (sortedArray = []) => {
  for (
    let i = 1;
    i < sortedArray?.length - 1;
    i += 2 //increment by 2 because we need to swap alternative elements to form a wave array
  ) {
    let temp = sortedArray[i];
    sortedArray[i] = sortedArray[i + 1];
    sortedArray[i + 1] = temp;
  }

  return sortedArray;
};

let waveArray = swapElements(sortedArray);
console.log("Wave array :", waveArray);
