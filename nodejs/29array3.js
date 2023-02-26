const studentList=[
    {name: '이명헌', age:18, kor:85, eng:90},
    {name: '신현철', age:18, kor:90, eng:85},
    {name: '정우성', age:17, kor:75, eng:65},
    {name: '최동오', age:18, kor:80, eng:80},
    {name: '신현필', age:16, kor:70, eng:75}
];
const ageSort=studentList.sort((before,next) => before.age - next.age); // 양수면 바꾸고 음수면 안바꿈
// 내림차순 1
const ageDecSort2=ageSort.reverse();
// 내림차순 2
const ageDecSort=studentList.sort((before,next) =>  next.age - before.age);
console.log("▧나이 오름차순 정렬▨");
// ageSort.forEach(student => {
//     console.log(student);
// });
console.log("----------------------");
console.log("▧나이 내림차순 정렬▨");
// ageDecSort.forEach(student => {
//     console.log(student);
// });
const names=['이명헌','정성구','신현철','정우성','김낙수'];
const sliced=names.slice(1,3);
console.log(sliced);

console.log("**영어 경시대회 참여 명단**");
const engSort=studentList.sort((before,next) => next.eng - before.eng);
const slicedEng=engSort.slice(0,3);
slicedEng.forEach((student) => {
    console.log(student.name);
})