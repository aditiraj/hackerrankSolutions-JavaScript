function encryption(s) {
    var strArr=[];
    var len=0;
    //Remove spaces
    for(var i=0; i<s.length; i++){
        if(s.charAt(i)!=' '){
            strArr.push(s.charAt(i));
            len++;
        }
    }    
    var row= Math.floor(Math.sqrt(len));
    var column= Math.ceil(Math.sqrt(len));
    while((row*column)<len){
    //Column has the max value so increament the row
        row++;
    }
    var arrMatrix= new Array(row);
    for(var i=0; i<row; i++){
        arrMatrix[i]= new Array(column);
    }
    var count=0;
    for(var i=0; i<row; i++){
        for(var j=0; j<column; j++){
            if(count==len){
                break;
            }
            else{
                arrMatrix[i][j]= strArr[count];
                count++;
            }         
        }
    }
    var finalArr=[];
    for(var i=0; i<column; i++){
        for(var j=0; j<row; j++){
            if(arrMatrix[j][i]!=undefined){
               finalArr.push(arrMatrix[j][i]);
            }
        }
        finalArr.push(" ");
    }
    var finalStr=finalArr.join("");
    return finalStr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
