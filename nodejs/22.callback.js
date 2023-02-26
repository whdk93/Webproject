// 합을 구하는 함수
const sum = (num1, num2) => num1 + num2;
// 결과를 출력하는 함수
const printResult = (result) => console.log(`결과는 ${result} 입니다.`);
// 합을 구하고 결과를 출력하는 함수
const sumAndPrint = (calcResult, callback) => {
    callback(calcResult);  
}
sumAndPrint(sum(78,79), printResult); // printResult(sum(78,79); 과 같음(자바스크립트는 함수를 매개변수로 받을 수 있음)