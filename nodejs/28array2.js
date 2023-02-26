const studentList=[
    {name: '이명헌', age:18, kor:85, eng:85},
    {name: '신현철', age:18, kor:90, eng:80},
    {name: '정우성', age:17, kor:75, eng:75},
    {name: '최동오', age:18, kor:80, eng:85},
    {name: '신현필', age:16, kor:70, eng:75}
];
// const sortStudentList=studentList.sort(); // 배열 객체는 소트가 안됨

// 다중 소트
// 1, -1 오름차순 -1, 1 내림차순
studentList.sort((beforeStudent, nextStudent) => {
    if(beforeStudent.age > nextStudent.age) return 1;
    else if(beforeStudent.age < nextStudent.age) return -1;
    else if(beforeStudent.kor > nextStudent.kor) return -1;
    else if(beforeStudent.kor < nextStudent.kor) return 1;
    return 0;
});
studentList.forEach(student => console.log(student));