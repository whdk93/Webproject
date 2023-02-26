const sumNum=(start,end,accu) => {
    if(start > end) return accu;
    return sumNum(start+1, end, accu+start);
}
console.log("1부터 10까지 합 ☞", sumNum(1,10,0));

const factorial = n => {
    if ( n === 0) return 1;
    return n * factorial(n-1);
}
console.log("최종값 =", factorial(5));

// 피보나치 수열
const fibonacci = (num) => {
    if(num <=1) return 1;
    return fibonacci(num-1) + fibonacci(num-2);
}
for(let i=1; i<10; i++) {
    console.log(fibonacci(i));
}