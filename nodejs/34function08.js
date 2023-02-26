// 함수의 유효 범위(scope)- 지역변수, 전역변수
let resultSub;
function subtract(a,b) {
    resultSub=a+b;
}
subtract(50,20);
console.log(resultSub);

function multiple(a,b) {
    const result=a*b;
    return result;
}
const r=multiple(10,10);
console.log(r);

function sum(a,b) {
    const resultSum=a+b;
}
sum(30,80);
console.log(resultSum);
