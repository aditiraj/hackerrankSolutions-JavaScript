function designerPdfViewer(h, word) {
    var obj= new Object();
    var code= 97;
    var maxHeight=0; 
    var height=0;
    for(var i=0; i<=25; i++){
        obj[String.fromCharCode(code)]= h[i];
        code++;
    }
    for(var i=0; i<word.length; i++){
        height= obj[word.charAt(i)];
        maxHeight= Math.max(maxHeight,height);
    }
    return (word.length*maxHeight);
}

function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    var result = designerPdfViewer(h, word);
    process.stdout.write("" + result + "\n");

}
