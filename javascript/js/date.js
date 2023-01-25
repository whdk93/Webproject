let now=new Date();
let firstDay=new Date("2022-12-24");
let toNow=now.getTime(); //오늘 날짜를 밀리초로 변환
let toFirst=firstDay.getTime();
let passedTime=toNow-toFirst;
let passedDay=Math.round(passedTime/(24*60*60*1000));
window.onload = function () { //브라우저창이 로드된 후에 수행
    document.querySelector('#accent').innerText=passedDay+"일";
    calcDate(100);
    calcDate(200);
    calcDate(365);
    calcDate(500);
}

function calcDate(days) {
    let future=toFirst+days*(24*60*60*1000);
    let someday=new Date(future);
    let year=someday.getFullYear();
    let month=someday.getMonth() +1 ;
    let day=someday.getDate();
    document.querySelector("#date"+days).innerText=year + "년 " + month + "월 " + day +"일";
}