const str="computer";
const repStr=str.replace("pu","ab");
console.log(repStr);
const str2="(hello)";
const repStr2=str2.replace("(","{").replace(")","}")
console.log(repStr2);
const dateString="2023-02-22T09:27:00";
const repDate=dateString.replace("T"," ");
console.log(repDate);
const names="홍길동,이영희,김철수";
const name=names.split(",");
console.log(name[0]);
const data="korea";
const str3=data.split("r");
console.log(str3);
const date=repDate.split(" ")[0];
const time=repDate.split(" ")[1];
console.log("오늘 날짜 ☞ %s", date);
console.log("현재 시간 ☞ %s", time);