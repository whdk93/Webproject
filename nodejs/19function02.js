function sum(a,b) {
    const result = a+b;
    return result;
}

const result=sum(10,11);
// console.log(`두 수의 합은 ${result}`);

const getyymmdd = (date) => {
    const newDate=new Date(date);
    const yyyy=newDate.getFullYear();
    const mm=newDate.getMonth() < 9 ? `0${newDate.getMonth()+1}` : $(newDate.getMonth()+1);
    const dd=newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
    return `${yyyy}년 ${mm}월 ${dd}일`;
}
let day=100;
const today=new Date();
const dateTimestamp=today.getTime();
let dDay=getyymmdd(dateTimestamp+(day*1000*60*60*24));

console.log('%d일 기념일=>%s',day,dDay);
