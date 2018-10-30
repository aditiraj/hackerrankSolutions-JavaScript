function vowelsAndConsonants(s) {
    var vowels=[];
    var consonants=[];
    for(let i=0; i<s.length; i++){
        var char= s.charAt(i);
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            vowels.push(char);
        }
        else{
            consonants.push(char);
        }
    }
    for(var i=0; i<vowels.length; i++){
        console.log(vowels[i]);
    }
    for(var j=0; j<consonants.length; j++){
        console.log(consonants[j]);
    }
}
