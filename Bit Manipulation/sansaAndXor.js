function sansaXor(arr) {
    /*if array length is odd xor the elements only at the even indexes as the other elements will appear even no. of times 
       and a number xored with itself is 0.*/
    if(arr.length%2!=0){
        var res=0;
        for(var i=0; i<arr.length; i=i+2){
            res= res^arr[i];   
        }
        return res;
    }
    //if array length is even all elements will appear even no. of times hence the result will be zero.
    else if(arr.length%2==0){
        return 0;
    }
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        arr = readLine().split(' ');
        arr = arr.map(Number);
        var result = sansaXor(arr);
        process.stdout.write("" + result + "\n");
    }

}

