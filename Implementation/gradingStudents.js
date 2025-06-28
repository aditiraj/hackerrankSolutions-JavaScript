/*
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    var finalGrades = [];
    for(let i=0; i< grades.length; i++){
        if(grades[i] <= 37 || grades[i] === 100){
            finalGrades.push(grades[i]);
        }else if(grades[i].toString().charAt(1)==="3" || grades[i].toString().charAt(1)==="8"){
            finalGrades.push(grades[i]+2);
        }else if(grades[i].toString().charAt(1)==="4" || grades[i].toString().charAt(1)==="9"){
            finalGrades.push(grades[i]+1);
        }else{
            finalGrades.push(grades[i]);
        }   
    }
    return finalGrades;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
