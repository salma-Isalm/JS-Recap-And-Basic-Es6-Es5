// for of used in array or string
// for in used in object
const numbers = [1, 3 , 4, 5 ,7];
for (const number of numbers){
    // console.log(number)
}
const nobab = 'sirajoddollah' ;
for(const char of nobab){
    // console.log(char)
}

const glass = {
    name: 'glass' ,
    color : 'golden' ,
    price : 120 ,
    isCleaned : true 
    };
for(const key in glass){
    const values = glass[key]
    console.log(key, values)
}