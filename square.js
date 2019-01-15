function square(a,b,c,d){
    if(a === b && c === d){
        return 1;
    }else if(a === c && b === d){
        return 1;
    }else if(a === d && b === c){
        return 1;
    }else{
        return -1;
    }  
}
module.exports = square;