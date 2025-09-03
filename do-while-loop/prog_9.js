
let i = 1;
do {
    let space = '';
    let k = 1;
    do {
        space += '  ';
        k++;
    } while (k <= i);
    let str = '';
    let j = i;
    do {
        str += '* ';
        j++;
    } while (j <= 5 * 2 - i);
    console.log(`${space}${str}`);
    i++;
} while (i <= 5);