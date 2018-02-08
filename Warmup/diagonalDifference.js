function diagonalDiff(n,a){
    var primSum = 0;
    var secSum = 0;
    var j= n-1;
    for(var i=0; i<n; i++){
        primSum= primSum+ a[i][i];
    }
    for(var i=0; i<n; i++){
        secSum= secSum + a[i][j];
        j--;
    }
    return (Math.abs(primSum-secSum));
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var result= diagonalDiff(n,a);
    console.log(result);
}
