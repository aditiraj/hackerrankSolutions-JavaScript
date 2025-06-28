'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    var hrStr;
    var minStr;
    var toMin;
    var toHr;
    if(m === 0){
        hrStr = getStrValue(h);
        return hrStr + " o' clock";
    }
    if(m>=1 && m<=30){
        minStr = getStrValue(m);
        hrStr = getStrValue(h);
        if(minStr === "one"){
            return minStr + " minute past " + hrStr;      
        }else if(minStr === "quarter" || minStr === "half"){
            return minStr + " past " + hrStr;
        }else{
            return minStr + " minutes past " + hrStr;
        }
    }
    if(m > 30){
        toMin = 60 - m;
        toHr = h+1;
        minStr = getStrValue(toMin);
        hrStr = getStrValue(toHr);
        if(minStr === "one"){
            return minStr + "minute to " + hrStr;
        }else if(minStr === "quarter"){
            return minStr + " to " + hrStr;
        }else{
        return minStr + " minutes to " + hrStr;
        }     
    }
}

function getStrValue(timeVal){
    var strValue = '';
    switch(timeVal){
        case 1:
         strValue = "one";
         break;
        case 2:
         strValue = "two";
         break;
        case 3:
         strValue = "three";
         break;
        case 4:
         strValue = "four";
         break;
        case 5:
         strValue = "five";
         break;
        case 6:
         strValue = "six";
         break;
        case 7:
         strValue = "seven";
         break;
        case 8:
         strValue = "eight";
         break;
        case 9:
         strValue = "nine";
         break;
        case 10:
         strValue = "ten";
         break;
        case 11:
         strValue = "eleven";
         break;
        case 12:
         strValue = "twelve";
         break;
        case 13:
         strValue = "thirteen";
         break;
        case 14:
         strValue = "fourteen";
         break;
        case 15:
         strValue = "quarter";
         break;
        case 16:
         strValue = "sixteen";
         break;
        case 17:
         strValue = "seventeen";
         break;
        case 18:
         strValue = "eighteen";
         break;
        case 19:
         strValue = "nineteen";
         break;
        case 20:
         strValue = "twenty";
         break;
        case 21:
         strValue = "twenty one";
         break;
        case 22:
         strValue = "twenty two";
         break;
        case 23:
         strValue = "twenty three";
         break;
        case 24:
         strValue = "twenty four";
         break;
        case 25:
         strValue = "twenty five";
         break;
        case 26:
         strValue = "twenty six";
         break;
        case 27:
         strValue = "twenty seven";
         break;
        case 28:
         strValue = "twenty eight";
         break;
        case 29:
         strValue = "twenty nine";
         break;
       case 30:
         strValue = "half";
         break;
    }
    return strValue;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine().trim(), 10);

    const m = parseInt(readLine().trim(), 10);

    const result = timeInWords(h, m);

    ws.write(result + '\n');

    ws.end();
}
