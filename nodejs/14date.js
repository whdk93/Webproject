const today=new Date();
console.log(today.toLocaleString());
const datechild=new Date(2023,5-1,5);
const datechild2=new Date(2023,5-1,5,14,30,32);
console.log('어린이날 =>', datechild.toLocaleString());
console.log('어린이날 행사시간=>', datechild2.toLocaleString());
console.log('오늘 날짜 : %s', today.toLocaleDateString());
console.log('현재 시간 : %s', today.toLocaleTimeString());
console.log('올해 년도 : %s', today.getFullYear());
console.log('이번 달 : %s', today.getMonth()+1);
console.log('오늘 일 : %s', today.getDate());
// today.getHours() - 시, today.getMinutes() - 분, today.getSeconds() - 초
let price=7800000;
console.log(`물품의 가격은 ${price.toLocaleString()}원 입니다.`)
