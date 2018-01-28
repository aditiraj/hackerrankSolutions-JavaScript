function solve(a0, a1, a2, b0, b1, b2){
    
    var alicePoints=0;
    var bobPoints=0;
    if(a0!==b0){
        if(a0>b0){
        alicePoints++;
    }
    else{
        bobPoints++;
    }
    }
    
    if(a1!== b1){
        if(a1>b1){
        alicePoints++;
    }
    else{
        bobPoints++;
    }
    }
    
    if(a2 !== b2){
        if(a2>b2){
        alicePoints++;
    }
    else{
        bobPoints++;
    }
    }
     
    return [alicePoints, bobPoints];
    
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));
}
