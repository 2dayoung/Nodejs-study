## 2023.10.04
git 연결  


모듈 설치 
$ npm install morgan
npm install cookie-parser
npm install express-session



$ npm install express  
-node_modules/ 폴더 생성 

$ npm install -D nodemon 
-이제 $npm nodemon 하면 중간에 파일 수정해도 변경 사항이 반영됨 

$ npx nodemon 파일이름.js
-이렇게 씀

'next' 다음 미들웨어로 넘어가게해줌 

express/all.js -- 미들웨어 통합 테스트   
Q. 세션쿠키?    
M. /login 에서 /로 돌아가도 돌아가지 않음   
S.  로그인 부분에 res.send(output); 추가함

-> 3장  '5줄로만드는 서버'까지 완료 


### 2023.10.14
5장 데이터베이스 
### * Mysql 설치, 실습
 
### ORM : Sequelize
ORM(object-relational mapping) : 객체와 관계를 매핑해주는 역할

$ npm install sequelize sequelize-cli mysql2
$ cd sequelize/
$ npx sequelize init
-> 폴더 생성됨

config/폴더에 config.json -> 여기서 username 와 password 는 내껄로 root, 0000
models/ 에 customer.js,purchase.js 생성하고 index.js수정 
app.js - models/index.js를 불러와 models/에 있는 entity정보를 읽고 sequelize에 적재 
mysql 터미널 열고 
use roadbook;
show table;
desc new_customers;
desc new_purchase;

-> 이제 데이터베이스를 직접 조작하지 않고 node 에서 CRUD 작업 할 수 있는지 
customer.html - 클라이언트 화면 생성 . POST메서드로 폼 안의 정보를 작성하면 데이터베이스에 저장
app2.js - /customer화면 가서 입력하고  엔터 누르면 new_customer테이블에 레코드 저장해줌.

### NoSQL : MongoDB
* MongoDB설치 
-> 이건 다음에 . 
