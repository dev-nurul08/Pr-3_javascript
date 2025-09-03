let i , j;

for(i=1 ; i <= 5 ;i++){
    let str ='';
    for(j=6-i ; j>=1 ; j--){
        str += `${j} `;
    }
    console.log(str);
    
}