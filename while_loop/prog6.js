let i= 1 ;

while(i <=5){
    let str ='';
    let j = 5 ;
    while(j >= i){
        str += `${j} `;
        j--;
    }
    i++;
    console.log(str);
}