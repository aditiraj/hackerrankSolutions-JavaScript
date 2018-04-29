function stringConstruction(s) {
    /* Add each of the unique characters of the string to the set and increament the cost(case:copying character from old to new 
       string). If the set already has the character do not increament the cost(case:copying the substring from the new string at 
       no cost)*/ 
       
    var mySet= new Set();
    var cost=0;
    for(let i=0; i<s.length; i++){
        if(!mySet.has(s.charAt(i))){
            mySet.add(s.charAt(i));
            cost++;
        }       
    }
    return cost;
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = stringConstruction(s);
        process.stdout.write("" + result + "\n");
    }

}
