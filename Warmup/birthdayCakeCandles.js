function birthdayCakeCandles(n, ar){
  //Sort the height array and then return the frequency of the tallest candle. 
    ar.sort(function(a,b){
        return b-a;
    });
    var count=1;
    for(var i=1; i<ar.length; i++){
        if(ar[0]==ar[i]){
            count++;
        }
    }
    return count;
}
function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = birthdayCakeCandles(n, ar);
    process.stdout.write("" + result + "\n");

}

