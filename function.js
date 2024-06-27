//Normal Function

function sumOf(a,b){
    return a+b;
}
console.log(sumOf(45,34))

//Function to call

function multi(a,b){
    return a*b;
}
function fnc(a,b,fn){
    return fn(a,b);
}
console.log(fnc(45,234,multi))

//