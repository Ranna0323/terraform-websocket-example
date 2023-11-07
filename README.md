## Terraform-websocket-example

2023.07

### Service Introduction
- multi-tenancy를 위한 자동화 배포(terraform)에 대한 테스트 코드
- Websocket(socket.io)을 사용하여 대시보드에 실시간 배포 상황 공유 
- AWS VPC를 생성하고 security group과 Internet gateway를 연결하는 간단한 terraform 스크립트 작성
- 짧은 시간 내에 결과물을 만들어내야 했기 때문에 Node.js를 사용

### How to Use
- package.json 다운로드
  - npm install
- 프로그램 실행
  - node index.js

### Tech Stack
- Frontend: ejs 
- Backend : Node.js

### Service function
메인페이지


### 추가해보고 싶은 것
- 예외처리 필요 : 배포 실패 시  
- backend(Node.js)와 frontend(vue)로 코드 분리 
