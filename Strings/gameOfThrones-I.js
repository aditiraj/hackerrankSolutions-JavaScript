function gameOfThrones(s){
    // Complete this function
    var mySet= new Set();
    for(var i=0; i<s.length; i++){
        mySet.add(s.charAt(i));   
    }
    var even=0; 
    var odd=0;
    
    for(var item of mySet){
        var count=0;
     
        for(var i=0; i<s.length; i++){
            if(item==s[i]){
                count++;
            }   
        }
     
        if(count%2==0){
            even++;
        }
        else{
            odd++;
        }
        if(s.length%2==0){
            if(odd>0){
                return "NO";
            }
        }
            else{
                if(odd>1){
                    return "NO";
                }
            }
        
    }
    return "YES";
}

function main() {
    var s = readLine();
    var result = gameOfThrones(s);
    process.stdout.write("" + result + "\n");

}
