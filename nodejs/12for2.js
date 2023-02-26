const studentList= [
    {name : '강백호', kor : 50, eng : 10, mat : 30},
    {name : '채치수', kor : 90, eng : 85, mat : 95},
    {name : '서태웅', kor : 60, eng : 85, mat : 75}
];
// for(let i=0; i<studentList.length; i++) {
//     console.log(studentList[i]);
// }
let searchName='서태웅';
let stu;
// let sw=false;
for(const student of studentList) {
    if(student.name === searchName) {
        stu=student;
        // sw=true;
        break;
    }
    //console.log(student);
}

studentList.forEach(function (student) {
    console.log(student);
});
studentList.forEach((student) =>console.log(student));
if(stu == undefined) {
    console.log('시험명단에 없습니다.');
}else {
    console.log(`${stu.name}님의 성적표`);
    console.log('국어점수 = ', stu.kor);
    console.log('영어점수 = ', stu.eng);
    console.log('수학점수 = ', stu.mat);
}