// Function Default Parameter For Not Provided Values

function add(num1 = 99, num2 = 0){
    const result = num1 + num2 ;
    console.log(num1,num2, result)
    return result ;
}

// const sum = add(4 , 6)
// const sum = add( 6)
const sum = add()

function fullName(first = 'asma', last= ''){
    const full = first + ' ' + last ;
    return full ;
}

// const names = fullName('wahida' , 'sumoNA')
// const names = fullName('wahida' )
const names = fullName()
console.log(names)

function friends(number = []){
    // array
}

function person(human = {}){
    // array
}
