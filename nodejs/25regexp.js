// 정규 표현식
const str="<h1>안녕하세요</h1>";
// const result=str.replace("<h1>","").replace("</h1>","");
const result=str.replace(/<h1>/g,"").replace(/<\/h1>/g,"");
console.log("결과=%s",result);
const str1="<h1>특별가 - </h1><h2>55,000원</h2>";
const result2=str1.replace(/<..>/g,"").replace(/<...>/g,""); // . 1개당 문자 1개 취급
console.log("결과=%s",result2);
const str2="<div>특별가 - <h1>55,000원</h1></div>";
// const result3=str2.replace(/<.{0,1}h1>/g,""); .{0,1} .이 0개 또는 1개 일 수 있다
const result3=str2.replace(/<.{0,4}>/g,"");
console.log("결과=%s",result3);
const str3="/정상가/ - 30000원(특별,할인가 - 23000원)";
const result4=str3.replace(/[\/()\-,]/g,"");
console.log("결과=%s",result4);
const text="hello my name is kangbeakho";
const matched=text.match(/[a-l]{1,3}/g); // 한 단어에 a~l의 범위에서 1~3개까지 찾아서 배열의 방에 넣음(3개가 넘으면 다음 방에 넣음)
console.log("결과=%s",matched);