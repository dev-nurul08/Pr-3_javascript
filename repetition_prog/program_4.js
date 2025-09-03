let n = 100;
let str = ''
for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        str += `${i} `;
    }
}
console.log(`Prime Number is : ${str}`);