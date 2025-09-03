let a =0 ; b = 1 ;
let c;
let str = 'Fibonacci series is : ';
for(let i = 1 ; i <=10 ; i++){
    str += `${a} ` ;
    c =a+b;
    a=b;
    b=c;
}
console.log(str);
