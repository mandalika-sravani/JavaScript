// Switch -- can be an efficient replacement to many if else statements

let testScore = 81;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80 && testScore <= 90:
        letterGrade = "B";
        break;
    case testScore >= 70 && testScore <= 80:
        letterGrade = "C";
        break;
    case testScore >= 60 && testScore <=70:
        letterGrade = "D";
        break;
    case testScore >= 50 && testScore <= 60:
        letterGrade = "E";
        break;
   default:
        letterGrade = "Fail";
}

console.log(letterGrade);