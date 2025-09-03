let n = 7;
let isPrime = true;
for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
        isPrime = false;
    }
}
if (isPrime) {
    console.log(`${n} is Prime Number`);
}
else {
    console.log(`${n} is not Prime Number`);
}