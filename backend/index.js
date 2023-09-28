const http = require('http');
const express = require('express');
const ejs = require('ejs');
const path = require("path");
const socketIo = require('socket.io');

// express 초기화
const app = express();
// http 모듈에서 제공하는 메서드로 서버를 초기화
const server = http.createServer(app);

// socket.io 서버 생성 및 기존의 WebSocket.Server 대신 사용
const io = socketIo(server);

const hostname = '127.0.0.1';
const port = 3000;

// ejs를 사용하기 위한 코드
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
})

// 클라이언트 연결 시 처리
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // 클라이언트에서 메세지(ex. tenant name)가 들어오면 실행
    socket.on('message', (data) => {
        console.log("+++dd+++")
        // 메세지를 모든 클라이언트에게 전송
        io.emit('message', data);
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});