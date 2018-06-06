function processData(m,n,arr) {
    //Search each combination of 2 nos. to check if the sum is equal to the total money and then print the indexs+1. 
    
    for(var i=0; i<n-1; i++){
        for(var j=i+1; j<n; j++){          
            if((arr[i]+arr[j]) == m){
               return ((i+1)+" "+(j+1));
            }
        }
    }
} 

function main() {
    var t= parseInt(readLine());
    for(var i=0; i<t; i++){
        var m= parseInt(readLine());
        var n= parseInt(readLine());
        arr = readLine().split(' ');
        arr = arr.map(Number);
        var result= processData(m,n,arr);
       console.log(result);
    }
}
