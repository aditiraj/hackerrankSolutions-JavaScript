function extraLongFactorials(n) {
    // Use BigNumber library
    var BigNumber= require("bignumber.js");
    BigNumber.config({EXPONENTIAL_AT:1e+9, POW_PRECISION:0});
    
    var fact=new BigNumber(1);
    for(var i=1; i<=n; i++){
        fact= fact.times(i);
    }
    return fact.toString();
}

function main() {
    var n = parseInt(readLine());
    var res=extraLongFactorials(n);
    console.log(res);

}
