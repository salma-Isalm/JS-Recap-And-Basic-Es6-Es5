// Arrow Function, Multiple Parameter, Function Body


// function declaration

/* function add(a,b){
const result = a+b ;
return result ;
} */

function add(a,b){
return  a+b ;
}

// function expression
const add2 = function(a,b){
    return a + b ;
}

// arrow function
const add3 = (a,b) => a + b ;
const add4 = (n1,n2,n3,n4,n5) => (n1+n2+n3+n4+n5)
const mul = (n1,n2,n3,n4) => (n1*n2*n3*n4)
// const sum  = add2(20, 4);
// const sum  = add4(20, 4, 60, 30, 10);
const sum  = mul(20, 4, 60, 10);
console.log(sum)
