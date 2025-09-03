let i = 1;
do {
    let str = '';
    let j = 6 - i;
    do {
        str += `${j} `;
        j++;
    } while (j <= 5);
    console.log(str);
    i++;
} while (i <= 5);