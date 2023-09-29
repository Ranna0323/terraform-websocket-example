const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

// express 초기화
const app = express();
// http 모듈에서 제공하는 메서드로 서버를 초기화
const server = http.createServer(app);

// socket.io 서버 생성 및 기존의 WebSocket.Server 대신 사용
const io = socketIo(server);

const hostname = '127.0.0.1';
const port = 3000;

// child-proccess
const { spawn } = require('child_process');
// 배포할 Tenant Terraform 스크립트가 위치한 경로
const TERRAFORM_PATH = 'terraform_scripts';

// ejs를 사용하기 위한 코드
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
        io.emit('message', JSON.stringify(object));
        console.log("+++dd+++")

        try{
            const tenant = data
            console.log(tenant)

            const terraformPath = path.join(__dirname, TERRAFORM_PATH)
            process.chdir(terraformPath);
            const commands = `terraform workspace new ${tenant} && terraform workspace select ${tenant} && terraform init && terraform apply -auto-approve -var="tenant_name=${tenant}"`;

            const terraformProcess = spawn(commands, { shell: true });

            terraformProcess.stdout.on('data', (data) => {
                const message = data.toString().trim(); // 문자열 앞뒤 공백 제거
                console.log(message)
            });
        }catch (e) {

        }
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});