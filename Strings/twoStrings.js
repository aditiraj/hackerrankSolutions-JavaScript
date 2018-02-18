function twoStrings(s1, s2){
    // If both the strings have any lowercase alphabet in common then return yes.
    var ar1= s1.split("");
    var ar2= s2.split("");
  
    var string="abcdefghijklmnopqrstuvwxyz";
    var alphabets= string.split("");
    
    for(var i=0; i<alphabets.length; i++){
        if(ar1.indexOf(alphabets[i])>=0 && ar2.indexOf(alphabets[i])>=0){
            return "YES";
        }
    }
    return "NO";
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s1 = readLine();
        var s2 = readLine();
        var result = twoStrings(s1, s2);
        process.stdout.write("" + result + "\n");
    }

}
