//  Keys, Values, Entries, Delete, Seal, Freeze

const glass = {
name: 'glass' ,
color : 'golden' ,
price : 120 ,
isCleaned : true 
}
console.log(glass)

// all poperty name
const keys = Object.keys(glass)
// console.log(keys)

//all values
const values = Object.values(glass)
// console.log(values)

// array of array two dimensional array
const entries = Object.entries(glass)
// console.log(entries)

delete glass.isCleaned ;
// console.log(glass)

const {isCleaned, ...shortglass} = glass;
// console.log(shortglass)
// freeze
// Object.freeze(glass)
glass.sourse = 'bangladesh' ;
// console.log(glass)
Object.seal(glass)
glass.color = 'red' 
console.log(glass)