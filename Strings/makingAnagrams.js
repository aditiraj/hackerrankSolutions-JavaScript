function makingAnagrams(s1, s2){
 
 // Find the frequency of all the characters in both the strings, subtract the corresponding frequencies and add them up to get the result.
    
    var obj1= new Object();
    var obj2= new Object();
    var arr1= s1.split("");
    for(var i=0; i<arr1.length; i++){
        var occur=1;
        if(i==arr1.length-1){
            occur=1;
        }
        for(var j=i+1; j<arr1.length; j++){
            if(arr1[i]==arr1[j]){
                occur++;
                arr1.splice(j,1);
                j--;
            }            
        }
        obj1[arr1[i]]= occur; 
    }
   
    var arr2= s2.split("");
    for(var i=0; i<arr2.length; i++){
        var occur=1;
        if(i==arr2.length-1){
            occur=1;
        }
        for(var j=i+1; j<arr2.length; j++){
            if(arr2[i]==arr2[j]){
                occur++;
                arr2.splice(j,1);
                j--;
            }            
        }
        obj2[arr2[i]]= occur; 
    }
  
    var del=0;
    for(var prop in obj1){
        if(obj2.hasOwnProperty(prop)){
            del= del+(Math.abs(obj1[prop]-obj2[prop]));
            delete obj2[prop];
        }
        else{
            del= del + obj1[prop];
        }    
    }
    for(var prop in obj2){       
            del= del + obj2[prop];   
    }
    return del;
}

function main() {
    var s1 = readLine();
    var s2 = readLine();
    var result = makingAnagrams(s1, s2);
    process.stdout.write("" + result + "\n");

}

