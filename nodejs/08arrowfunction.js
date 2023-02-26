// function hello() {
//     console.log('안녕하세요');
// }
const hello= () => console.log('안녕하세요');
// function sum(a,b) {
//     return a+b;
// }
const sum= (a,b) => a+b; // return 생략 가능
console.log(sum(10,20));
// function hello2(name) {
//     console.log(name + '님 안녕하세요');
// }
const hello2=(name) => console.log(`${name}님 안녕하세요`); 
hello2('강백호');
const sumAndPrint=(num1, num2) => {
    const result=num1+num2;
    return `두 수의 합은 ${result}입니다.`;
}
console.log(sumAndPrint(45,30));