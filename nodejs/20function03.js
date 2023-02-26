const students=[
    {name : '강백호', score : 69},
    {name : '서태웅', score : 70},
    {name : '채치수', score : 90},
    {name : '정대만', score : 80},
    {name : '송태섭', score : 86}
];
// 등급 구하는 함수
function getDegree(score) {
    let degree;
    if(score>=90) {
        degree='A';
    }else if(score>=80) {
        degree='B'
    }else if(score>=70) {
        degree='C';
    }else if(score>=60) {
        degree='D';
    }else {
        degree='F';
    }
    return degree;
}
console.log(` ** 학생 등급 현황표 **`);
students.forEach((student)=>{
    let result=`이름 : ${student.name}  등급 : ${getDegree(student.score)}`
    console.log(result);
});






