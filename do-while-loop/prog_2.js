let i = 1;
do {
    let str = '';
    let j = i;
    do {
        str += `${j} `;
        j--;
    } while (j >= 1);
    console.log(str);
    i++;
} while (i <= 5);