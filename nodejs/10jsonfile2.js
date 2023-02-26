const fs=require('fs');
const product = [
    {name : '삼각김밥', price : 1200, maker : '북산식품'},
    {name : '혜자도시락', price : 4500, maker : '산왕식품'},
    {name : '새우깡', price : 1200, maker : '농심'}
]
fs.writeFile('./prolist.json',JSON.stringify(product),function (error) {
    console.log('저장완료.');
});