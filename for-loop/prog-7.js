let i , j , k;

for(i=1 ; i <= 5 ;i++){
    let str ='';
    for(k=i ; k <5 ; k++){
        str += '  ';
    }
    for(j=1 ; j<=i ; j++){
        str += `${j} `;
    }
    console.log(str);
    
}