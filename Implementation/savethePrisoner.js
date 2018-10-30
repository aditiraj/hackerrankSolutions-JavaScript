function saveThePrisoner(n, m, s){
   var id;
    id= s+(m-1);   
    if(id>n){
        var rem= id%n;
        if(rem==0){
            rem=n;
        }
       return rem;
   }   
    return id;   
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var s = parseInt(n_temp[2]);
        var result = saveThePrisoner(n, m, s);
        process.stdout.write(""+result+"\n");
    }

}
