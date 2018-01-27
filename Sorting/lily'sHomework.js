function lilysHomework(arr) {

    /* Sort the array in ascending order and descending order as both meet the given requirement. Compare the sorted arrays to the original
       array and if the elements do not match perform the swap and count the swap opertions.Print the minimum value. */
    
    var arrCpy= arr.slice();
    var arrCpy2= arr.slice();
    var indexArr=[];
    var count=0;
    var index;
    var temp; 
    var decCount=0;
    
    for(var i=0; i<arr.length; i++){
        indexArr[arr[i]]=i;
    }
    arr.sort(function(a,b){return a-b});
    var sortedArrCpy= arr.slice();
    var decSort= sortedArrCpy.reverse();
    
    for(var i=0; i<arr.length; i++){
        if(arr[i]!=arrCpy[i]){
            temp=arrCpy[i];
            index= indexArr[arr[i]];
            indexArr[arr[i]]=i;
            indexArr[arrCpy[i]]=index;
            arrCpy[i]=arr[i];
            arrCpy[index]=temp;
            count++;
        }
    }
    indexArr=[];  
    
    for(var i=0; i<arrCpy2.length; i++){
        indexArr[arrCpy2[i]]=i;
    }

    for(var i=0; i<decSort.length; i++){
        if(decSort[i]!=arrCpy2[i]){
            temp=arrCpy2[i];
            index= indexArr[decSort[i]];
            indexArr[decSort[i]]=i;
            indexArr[arrCpy2[i]]=index;
            arrCpy2[i]=decSort[i];
            arrCpy2[index]=temp;
            decCount++;
        }
    }
    
    return Math.min(count,decCount);
    
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = lilysHomework(arr);
    process.stdout.write("" + result + "\n");

}

