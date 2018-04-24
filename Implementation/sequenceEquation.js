function permutationEquation(p) {
    var indexArray=[];
    var temp;
    var resArray=[];
    for(var i=0; i<p.length; i++){
        indexArray[p[i]]=i+1;
    }
    for(var i=1; i<=p.length; i++){
        temp= indexArray[i];
         resArray.push(indexArray[temp]);     
    }
    return resArray;
}

function main() {
    var n = parseInt(readLine());
    p = readLine().split(' ');
    p = p.map(Number);
    var result = permutationEquation(p);
    console.log(result.join("\n"));
}
