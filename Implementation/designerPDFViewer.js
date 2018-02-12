function designerPdfViewer(h, word) {
    /*Create an object with all alphabets as the key and their height as the value. Find the maximum height and multiply it with the length
      of the word. */
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
