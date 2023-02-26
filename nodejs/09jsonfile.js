const fs=require('fs');
fs.readFile('./list.json',(err, data) => {
    if(err) throw err;
    const json=JSON.parse(data.toString());
    console.log('이름 : ' + json[0].name);
    console.log('이름 : ' + json[1].name);
});