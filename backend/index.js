const http = require('http');
const express = require('express');
const ejs = require('ejs');

// express 초기화
const app = express();
// http 모듈에서 제공하는 메서드로 서버를 초기화
const server = http.createServer(app);

const hostname = '127.0.0.1';
const port = 3000;

// ejs를 사용하기 위한 코드
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});