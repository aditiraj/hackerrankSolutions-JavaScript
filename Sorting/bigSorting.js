function arrange(n,unsorted){
    unsorted.sort(function(a,b){
        if(a.length == b.length){
            return a > b ? 1 : -1;
        }
        return a.length - b.length; 
    });
    return unsorted;
}

function main() {
    var n = parseInt(readLine());
    var unsorted = [];
    for(var unsorted_i = 0; unsorted_i < n; unsorted_i++){
       unsorted[unsorted_i] = readLine();
    } 
    var resArr=arrange(n,unsorted);
    console.log(resArr.join("\n"));

}
