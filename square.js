function square(a,b,c,d){
    if(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d)){
        if(a === b && c === d){
            return 1;
        }else if(a === c && b === d){
            return 1;
        }else if(a === d && b === c){
            return 1;
        }else{
            return -1;
        }  
    }else{
        return -2;
    }   
}
module.exports = square;