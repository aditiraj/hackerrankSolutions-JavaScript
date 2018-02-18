function timeConversion(s) {
    
    var time= s.charAt(8)+s.charAt(9);
    if(time=="AM"){
        if(s.charAt(0)=="1"&&s.charAt(1)=="2"){
           return ("00"+ s.substr(2,6));
        }
        else{
        return s.substr(0,8);
        }
    }
   
    else if(time=="PM"){
        if(s.charAt(0)== "0"){
            if(s.charAt(1)== "1"){
                return ("13"+ s.substr(2,6))
            }
            if(s.charAt(1)== "2"){
                return ("14"+ s.substr(2,6))
            }
            if(s.charAt(1)== "3"){
                return ("15"+ s.substr(2,6))
            }
            if(s.charAt(1)== "4"){
                return ("16"+ s.substr(2,6))
            }
            if(s.charAt(1)== "5"){
                return ("17"+ s.substr(2,6))
            }
            if(s.charAt(1)== "6"){
                return ("18"+ s.substr(2,6))
            }
            if(s.charAt(1)== "7"){
                return ("19"+ s.substr(2,6));
            }
            if(s.charAt(1)== "8"){
                return ("20"+ s.substr(2,6))
            }
            if(s.charAt(1)== "9"){
                return ("21"+ s.substr(2,6))
            }
        }
        if(s.charAt(0)== "1"){
            if(s.charAt(1)== "0"){
                return ("22"+ s.substr(2,6))
            }
            if(s.charAt(1)== "1"){
                return ("23"+ s.substr(2,6))
            }
            if(s.charAt(1)== "2"){
                return ("12"+ s.substr(2,6))
            }
        }
    }
    
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}

