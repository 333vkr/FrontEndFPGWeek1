let names=['rahul dravid','sachin tendulkar','virendra sehwag']

//log before conversion
console.log('Names :',names);


//capitalizing First Letter of words
const capitalizeWords=(names=[])=>{
   let newNames= names.map((name)=>{
        const [fName,lName]=name.split(' ')
        fLetter=fName?.charAt(0)?.toUpperCase();
        lLetter=lName?.charAt(0)?.toUpperCase()
        return `${fLetter}${fName.substring(1)} ${lLetter}${lName.substring(1)}`
    })

   return newNames
}
//Call the function
let newNames = capitalizeWords(names)
console.log('Capitalized array :' , newNames);

//* Removing sachin tendulkar from the array where the index is unknown
const removeName=(newNames=[])=>{
    let removed=newNames.filter((name)=>(name!=='Sachin Tendulkar'))
    return removed
}
//call function
let nameRemovedArray=removeName(newNames)
console.log('Name Removed Array :', nameRemovedArray);