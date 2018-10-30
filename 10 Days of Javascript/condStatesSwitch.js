function getLetter(s) {
    let letter;
    var firstChar= s.charAt(0);
    switch(firstChar){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter= 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter= 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter= 'C';
            break;
        default:
            letter= 'D';
    }
    
    return letter;
}
