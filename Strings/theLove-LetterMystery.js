function theLoveLetterMystery(s){
    
    var middleLetter= Math.floor(s.length/2);
    var codeFront=0;
    var codeRear=0;
    var oper=0;
    
        for(var i=0,j=s.length-1; i<middleLetter; i++,j--){
            if(s.charAt(i)!=s.charAt(j)){
                codeFront= s.charCodeAt(i);
                codeRear= s.charCodeAt(j);
                oper= oper + Math.abs(codeFront-codeRear);            
            }
        }
        return oper;   
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = theLoveLetterMystery(s);
        process.stdout.write("" + result + "\n");
    }

}
