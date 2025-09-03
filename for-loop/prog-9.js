let i , j , k;

for(i=1 ; i <= 5 ;i++){
    let str ='';
    for(k=1 ; k <i ; k++){
        str += '  ';
    }
    for(j=i ; j<=5*2-i ; j++){
        str += '* ';
    }
    console.log(str);
    
}