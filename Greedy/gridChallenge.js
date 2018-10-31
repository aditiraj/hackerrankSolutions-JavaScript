function processData(r,sortedArr) {
    
    if(r==1){
        return "YES";
    }
 
    var arr=[];
      
    //sorting row-wise
    for(var i=0; i<r; i++){
        for(var j=0; j<r; j++){
            arr.push(sortedArr[i][j]);
        }
        arr.sort();
        for(var col=0; col<r; col++){
            sortedArr[i][col]= arr[col];
        }
        arr=[];
    }
    
    for(var i=0; i<r; i++){
        for(var j=0; j<r; j++){
            arr.push(sortedArr[j][i]);
        }
        arr.sort();
        for(var row=0; row<r; row++){
            if(sortedArr[row][i]!= arr[row]){
                return "NO";
            }
        }
        arr=[];
    }
    
    return "YES";
    
} 
function main() {
     
    var t= parseInt(readLine());
    for(var i=0; i<t; i++){
        var row=0;
        var r= parseInt(readLine());
        if(r==1){
            var s = readLine();
            var result=processData(r,s);
            console.log(result);
        }
        
        else{
            
        var arrMatrix=new Array(r);
            for(var k=0; k<r; k++){
                arrMatrix[k]= new Array(r);
            }
        while(row<r){
            var s = readLine();
            var strArr= s.split("");
                       
           for(var col=0; col<r; col++){        
           arrMatrix[row][col]=strArr[col]; 
           }  
        row++;
        }
            var result=processData(r,arrMatrix);
            console.log(result);
        }   
    }   
}
