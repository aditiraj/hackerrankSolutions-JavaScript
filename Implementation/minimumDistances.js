function minimumDistances(a) {
// Find the matching element starting from the adjacent index and then calculate the distance of the indexes.Print the minimum distance.

    var dist=0;
    var minDist=Number.MAX_VALUE;
    for(let i=0; i<a.length-1; i++){
        for(let j=i+1; j<a.length; j++){
            if(a[i]==a[j]){
                dist= Math.abs(i-j);
                minDist= Math.min(dist,minDist);
                break;
            }
        }
    }
    if(minDist==Number.MAX_VALUE){
        return -1;
    }
    return minDist;
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = minimumDistances(a);
    process.stdout.write("" + result + "\n");

}
