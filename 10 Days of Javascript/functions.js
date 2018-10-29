/*
 * Create the function factorial here
 */
function factorial(num){
    if(num==1){
        return 1;
    }
    else{
        var fact= 1;
        for(var i=num; i>1; i--){
            fact= fact*i;
        }
        return fact;
    }
}
