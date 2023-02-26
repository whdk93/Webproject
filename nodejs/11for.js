const studentList= [
    {name : '강백호', kor : 50, eng : 10, mat : 30},
    {name : '채치수', kor : 90, eng : 85, mat : 95},
    {name : '서태웅', kor : 60, eng : 85, mat : 75}
];
let searchName='강백호';
let index;
for (index=0; index<studentList.length; index++) {
    if(studentList[index].name === searchName) {
        break;
    }
}
if(index==studentList.length) {
    console.log('시험명단에 없습니다.');
}else {
    console.log(`${studentList[index].name}님의 성적표`);
    console.log('국어점수 = ',studentList[index].kor);
    console.log('영어점수 = ',studentList[index].eng);
    console.log('수학점수 = ',studentList[index].mat);
}