const fs=require('fs'); // fs :file stream
const data=fs.readFileSync('./message.txt'); // readFileSync : 동기방식(데이터 완료 전까지 수행x)
const str=data.toString();
console.log(str);