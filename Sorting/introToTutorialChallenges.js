function processData(v,n,ar){
// indexOf returns the index of the element.
    var index=ar.indexOf(v);
    return index;
}
function main() {
    var v = parseInt(readLine());
    var n=  parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = processData(v,n,ar);
    process.stdout.write("" + result + "\n");

}
