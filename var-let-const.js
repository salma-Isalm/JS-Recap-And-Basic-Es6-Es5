// var : no reason to use var
// let : allow it to reassign
// const : do not use allow it to reassign 

const money = 24 ;
// money = 34 ;
const rich = money+10;
console.log(rich)

let count = 0 ;
count = count + 10 ;
console.log(count)

const numbers = [12, 34, 45 , 32 , 41,] ;
// numbers = [12, 34, 56 , 78]
numbers[1] = 89 ;
numbers.push(23, 66, 77)
console.log(numbers)

const students = { name: 'moyna' , class : 12}
// students  = {
//     name: 'kokil' , class: 12 
// }
students.name = 'kohali'
console.log(students)
