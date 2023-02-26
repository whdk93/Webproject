// 합성 함수 - 여러가지 함수를 합쳐서 사용
const plus = (a,b) => a+b;
const minus = (a,b) => a-b;
const multiple = (a,b) => a*b;
const add10 = x => x + 10;
console.log(multiple(add10(70),3));
console.log(minus(plus(10,20),15));