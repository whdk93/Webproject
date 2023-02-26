//타임 스탬프(timestamp) : 날짜와 시간을 13자리 숫자로 표현해 놓은 값
const today=new Date();
const dateToTimestamp=today.getTime(); // 타임스탬프 생성
// const timestampToDate=new Date(1676947106315);
const timestampToDate=new Date(1000);
console.log('오늘 현재 시간의 타임스탬프 : ' , dateToTimestamp);
console.log('오늘 : ',timestampToDate);
console.log('타임스탬프 초기날짜 : ', timestampToDate);