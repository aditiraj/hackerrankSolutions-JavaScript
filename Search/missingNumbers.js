function processData(n,arrA,m,arrB) {
    
    
   var freq=0;
    var freqInA=0;
    var distArrB=[];
    var missingNos=[];
    
   arrB.sort(function(a,b){return a-b});
    
    distArrB= arrB.slice();
    for(var i=0; i<distArrB.length-1; i++){
        for(var j=i+1; j<distArrB.length; j++){
            if(distArrB[i]==distArrB[j]){
                distArrB.splice(j,1);
                j--;
            }
        }      
    }
    
    for(var i=0; i<distArrB.length; i++){
        for(var j=0; j<m; j++){           
            if(distArrB[i]==arrB[j]){
                freq++;
            }           
        }
        
        for(var k=0; k<n; k++){
            if(distArrB[i]==arrA[k]){
                freqInA++;
            }
        }
        if(freq!=freqInA){
            missingNos.push(distArrB[i]);
        }
        freq=0;
        freqInA=0;
    }
    
    var str=missingNos.join(" ");
    return str;
} 

function main() {
    var n= parseInt(readLine());
    arrA = readLine().split(' ');
    arrA = arrA.map(Number);
    var m= parseInt(readLine());
    arrB = readLine().split(' ');
    arrB = arrB.map(Number);  
    var result= processData(n,arrA,m,arrB);
    console.log(result);
    
}
