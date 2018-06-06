function jumpingOnClouds(c, k) {

 //The player will jump on (i+k)%n cloud on every turn and the energy will be reduced by 3 if the cloud value is 1 and by 1 otherwise.
    var n = c.length;
    var e = 100;
    var i = (0+k)%n;
    while(i!=0){
        if(c[i]==1){
            e = e-3;
        }
        else{
            e = e-1;
        }
        i = (i+k)%n;
    }
    if(c[0]==1){
        e = e-3;
    }
    else{
        e= e-1;
    }
    return e;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, k);

    ws.write(result + "\n");

    ws.end();
}
