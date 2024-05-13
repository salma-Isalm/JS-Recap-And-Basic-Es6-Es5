// More Arrow Functions And Big Arrow Function
const difference = (x, y) => x-y ;
const multiply = (first, secoend ,  thhird) => first*secoend+thhird ;

// single paramiter or one parameter
const getAge = (person) => person.age ;
const student = { name:' saharear' , age: 34};
const age = getAge(student)

// console.log(age)

const getThird = numbers => numbers[2];
const third = getThird([4, 3, 6 , 5 ,56, 49 ]);
// console.log(third)

const double = num => num*2 ;
const mul = double( 6)
console.log(mul)

//  no parameter 
const getPI = () => Math.PI
console.log(getPI())

// large arrow function  ,,,  if you want to get anything return from this function, then you have to used the return function
const doMath = (x , y, z)=> {
    const sum = x + y+ z ;
    const div = x / y / z ;
    const mul = x  * y * z ;
    return mul ;
}