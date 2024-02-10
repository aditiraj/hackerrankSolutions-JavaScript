function isValid(s) {
    var freq={};
    var uniqueFreq = new Set();
    for(var i=0; i<s.length; i++){
        if(freq[s.charAt(i)]){
            freq[s.charAt(i)]++;
        }else{
            freq[s.charAt(i)] = 1;
        }
    }
    for(var prop in freq){
        uniqueFreq.add(freq[prop]);
    }
    if(uniqueFreq.size!==1 && uniqueFreq.size!==2){
        return 'NO';
    }
    if(uniqueFreq.size === 1){
        return 'YES';
    }
    if(uniqueFreq.size === 2){
        var uniqueFreqArr = [];
        uniqueFreq.forEach (function(val) {
            uniqueFreqArr.push(val);
            });
            var higherFreqVal = uniqueFreqArr[1];
            var lowerFreqVal = uniqueFreqArr[0];
            if(uniqueFreqArr[0]>uniqueFreqArr[1]){
                higherFreqVal = uniqueFreqArr[0];
                lowerFreqVal = uniqueFreqArr[1];
            }
            var noCharHigherFreq = 0;
            var noCharLowerFreq = 0;
            for(var letter in freq){
                if(freq[letter]===higherFreqVal){
                    noCharHigherFreq++;
                }
                if(freq[letter]===lowerFreqVal){
                    noCharLowerFreq++;
                }
                }
        if((lowerFreqVal===1&&noCharLowerFreq===1)||((Math.abs(uniqueFreqArr[0]-uniqueFreqArr[1]) === 1)&&noCharHigherFreq===1)){
            return 'YES'
                }else{
                    return 'NO';
                    }
                    }
}
