
function anagram(s){

    /* Find the difference between the frequencies of each character in string2 with its corresponding frequency in string1 
      and only if the difference is positive, add it to the final result i.e. if the no. of times the character 
      occuring in the second string is more than in the first string. */
       
    if(s.length%2!=0){
        return -1;
    }
    else{
        var arr= s.split("");
        var startIndex= arr.length/2;
        var obj1 =new Object();
        var obj2= new Object();
        var mySet1= new Set();
        var mySet= new Set();
        
        for(var i=0; i<startIndex; i++){
            mySet1.add(arr[i]);
        }
        for(var i=startIndex; i<arr.length; i++){
            mySet.add(arr[i]);
        }
        for(var item of mySet1){
            var freq=0;
            for(var i=0; i<startIndex; i++){
                if(item == arr[i]){
                    freq++;
                }
            }
           obj1[item]= freq;   
        }
        for(var item of mySet){
            var freq=0;
            for(var i=startIndex; i<arr.length; i++){
                if(item == arr[i]){
                    freq++;
                }
            }
           obj2[item]= freq;   
        }
    
        var res=0;
        for(var prop in obj2){
            if(obj1.hasOwnProperty(prop)){
                var diff= obj2[prop]-obj1[prop];
                if(diff>0){
                    res= res + (diff);                   
                }
                
            }
            else{
                res= res + obj2[prop];
            }
            
        }
        
     return res;   
    }
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = anagram(s);
        process.stdout.write("" + result + "\n");
    }

}
