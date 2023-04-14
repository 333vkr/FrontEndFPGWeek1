/** The sort method arranges elements of an array in
either ascending, descending or in a custom order.
* By default array is sorted in ascending order
* we can determine the order by passing a callback function
* The a-b expression arranges the smallest elements first
* The b-a expression arranges the biggest elements first
*/

//USE CASE
//Arrange Elements of any array in
/** 
 * 1. Ascending Order
 * 2. Descending Order
 */

//Arrange student records in Lowest to Highest Score
const studentsRecord1 = [
    {
      name: "Michael Jordan",
      score: 200,
    },
    {
      name: "Abraham Lincoln",
      score: 190,
    },
    {
      name: "Isreal Adesanya",
      score: 250,
    },
    {
      name: "Bill Gate",
      score: 140,
    },
  ];

  //function that sorts the lowest to highest
  const lowestToHighestSort=(array)=>{
    return array.sort((a,b)=>(a.score-b.score))
  }

  console.log('Ascending Sort:',lowestToHighestSort(studentsRecord1));


  //Function that sorts Highest to lowest
const highToLow=(array)=>{
    return array.sort((a,b)=>(b.score-a.score))
}

console.log('Descending Sort:',highToLow(studentsRecord1));