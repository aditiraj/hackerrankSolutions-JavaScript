function minimumAbsoluteDifference(n, arr) {
    // Sort the array as it will give the minimum difference between the consecutive elements.
 
    arr.sort(function(a, b) { return a - b });
    let val, diff = Number.MAX_VALUE;
    for (let num of arr) {
        if (val !== undefined) {
            diff = Math.min(diff, Math.abs(val - num));
        }
        val = num;
    }
    console.log(diff);   
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = minimumAbsoluteDifference(n, arr);

}
