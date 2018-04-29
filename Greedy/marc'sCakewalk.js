function main() {
    var n = parseInt(readLine());
    calories = readLine().split(' ');
    calories = calories.map(Number);
    // Sort the calories in decreasing order to find the minimum no. of miles. 
    var miles=0;
    calories.sort(function(a,b){return b-a});
    for(var i=0; i<n; i++){
        miles= miles+ ((Math.pow(2,i)*calories[i]));
    }
    console.log(miles);

}
