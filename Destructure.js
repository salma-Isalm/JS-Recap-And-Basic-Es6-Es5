//Object And Array Destructure
const actor = {
    name : 'annonto' ,
    age : 30 ,
    phone : '01397840098' ,
    money : 12334300
}
// const phone = actor.phone
// const age = actor.age
// const name = actor.name
// console.log(phone , name, age)


// Object Destructure
// if right side is an object left side of destructuring will be  object as well
// use property name as a variable that contains the property value
const {phone, age : boyos} = actor
console.log(phone)
console.log(phone)
console.log(phone)
console.log(boyos)
// console.log(age)

// array Destructuring
const numbers = [2234 , 67];
const [first , second] = numbers ;
 const [x, y] = [12 , 66] ;
// console.log(second , x)

// advanced
function doubleThem(a, b){
    return [a*2 , b*2] ;
}
const [ f1 , s1] = doubleThem(4, 8) ;
console.log(f1, s1)