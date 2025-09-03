let i = 1;
do {
    let space = '';
    let k = 6 - i;
    do {
        space += '  ';
        k--;
    } while (k >= 1);
    let str = '';
    let j = 1;
    do {
        str += `${j} `;
        j++;
    } while (j <= i);
    console.log(`${space}${str}`);
    i++;
} while (i <= 5);