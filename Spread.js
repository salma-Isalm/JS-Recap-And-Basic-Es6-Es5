// Spread Operator, Array Max, Copy Arrays

const max = Math.max(34, 50, 23 , 23 , 123 , 400 )
// console.log(max)

const numbers = [ 34 , 3224, 45 , 67888 , 55690 ,  345 , 4566] ;
const arrayMax = Math.max(...numbers)
// console.log(...numbers)
console.log(arrayMax)

//use spread operator to copy

// non primative object and aarry refarence dore rake.aktate change korle onno taw change hobe
const friends = [ 23 , 56, 34, 11 , 20] ;
const bondu = friends ;
// bondu.push (100) ;
const dosto = [...friends] //copy
console.log(dosto)
friends.push(100)
console.log(dosto)
console.log(friends)

// advanced
const extranumber = [...friends, 23900] // add extra  element while copy
console.log(extranumber)