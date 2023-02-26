const fs=require('fs'); // require : file관련 메소드
const contents='안녕하세요\n노드js공부중\nUI테스트병행';
fs.writeFile('./message.txt', contents, function(error) {
    console.log('저장완료.');
});