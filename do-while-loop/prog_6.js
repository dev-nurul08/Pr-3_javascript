let i =1;

do{
    let str = '';
    let j=5;
    do{
        str += `${j} `;
        j--;
    }while(j>=i);
    console.log(str);
    i++;  
}while(i <=5);