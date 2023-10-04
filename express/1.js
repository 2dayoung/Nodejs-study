const express = require('express');
const app = express()

app.get('/', (reo,res)=> {
    res.send('Hello World!');
});

app.listen(8080, () =>
console.log('9090포트에서 서버 실행 중...'));