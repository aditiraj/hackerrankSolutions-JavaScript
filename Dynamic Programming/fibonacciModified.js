function fib(t1,t2,n){
//Use Big Number
    var a=[];
    a.push(t1);
    a.push(t2);
    var BigNumber = require('bignumber.js');
    BigNumber.config({ EXPONENTIAL_AT: 1e+9, POW_PRECISION: 0   });
  
    
    for(var i=2; i<n; i++){
        var x= new BigNumber(a[i-2]);
        var y= new BigNumber(a[i-1]);
        a[i]= new BigNumber(x.plus(y.pow(2)));
    }
    return a[i-1].toString();
}

function main(){
var s_temp = readLine().split(' ');
    var t1 = parseInt(s_temp[0]);
    var t2 = parseInt(s_temp[1]);
    var n=   parseInt(s_temp[2]);
    var result= fib(t1,t2,n);
    console.log(result);
}
