
function minimumNumber(n, password) {
    /* Find the missing must have characters in the password and return it if by adding them the resulting password length is 
       greater than or equal to 6 else if the password length is still less than 6 characters then return the no. of missing must
       have characetrs along with the no. of characters to be added to make the password length equal to 6.*/
    var upperCaseChar=0;
    var lowerCaseChar=0;
    var specialChar=0;
    var digit=0;
    var musthaveChars=0;
    for(let i=0; i<n; i++){
        if(password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90){
            upperCaseChar++;
        }
        else if(password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122){
            lowerCaseChar++;
        }
        
        else if(password.charAt(i)=='!' || password.charAt(i)=="@" || password.charAt(i)=="#" ||
                password.charAt(i)=="$" || password.charAt(i)=="%" || password.charAt(i)=="^" ||
                password.charAt(i)=="*" || password.charAt(i)=="&" || password.charAt(i)=="(" ||
                password.charAt(i)==")" || password.charAt(i)=="-" || password.charAt(i)=="+"){
            specialChar++;
        }
        else if(password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57){
            digit++;
        }    
    }
   
    if(upperCaseChar==0){
        musthaveChars++;
    }
    if(lowerCaseChar==0){
        musthaveChars++;
    }
    if(specialChar==0){
        musthaveChars++;
    }
    if(digit==0){
        musthaveChars++;
    }
    
    var len= n+musthaveChars;
    if(len<6){
        return ((6-len) + musthaveChars);
    }
    else{
        return musthaveChars;
    }
}

function main() {
    var n = parseInt(readLine());
    var password = readLine();
    var answer = minimumNumber(n, password);
    process.stdout.write("" + answer + "\n");

}
