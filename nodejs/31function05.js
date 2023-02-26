const hap = (a,b) => a+b;
console.log("두 수의 합 :",hap(23,66));
const countDown = (value) =>  {
    console.log("출력값 :",value);
    if(value === 0) return value;
    return countDown(value-1);
};
const lastValue=countDown(10);
console.log("최종값 :", lastValue);