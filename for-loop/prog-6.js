let i , j;

for(i=1 ; i <= 5 ;i++){
    let str ='';
    for(j=5 ; j>=i ; j--){
        str += `${j} `;
    }
    console.log(str);
    
}