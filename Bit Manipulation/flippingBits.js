function flipBits(num) {
    
    var arr=[];
    var str= num.toString(2);
    var zeros= 32-str.length;
    //adding preceding zeros to the string to make it 32 bit long.
    for(var i=0; i<zeros; i++){
        str= "0" + str;
    }
  //flip the bit from 0 to 1 and vice-versa.
    for(var j=0; j<str.length; j++){
        if(str.charAt(j)=="0"){
            arr.push(1);
        }
        else{
            arr.push(0);
        }
    }
    //convert binary to decimal.
    var flipStr= arr.join("");
    var flipInt= parseInt(flipStr,2);
    return flipInt;
} 
function main() {
    var n = parseInt(readLine());
    for(var i=0; i<n; i++){
        var num = parseInt(readLine());
        var result = flipBits(num);
        process.stdout.write("" + result + "\n");
    }   
    
}
