function simpleArraySum(n, ar) {
    
    var sum=0;
    for(var i=0; i<n; i++){
        sum= sum + ar[i];
    }
    return sum;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = simpleArraySum(n, ar);
    process.stdout.write("" + result + "\n");

}
