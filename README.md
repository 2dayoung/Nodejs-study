## 2023.10.04
git 연결  

$npm install express  
-node_modules/ 폴더 생성 

$ npm install -D nodemon 
-이제 $npm nodemon 하면 중간에 파일 수정해도 변경 사항이 반영됨 

$ npx nodemon 파일이름.js
-이렇게 씀

'next' 다음 미들웨어로 넘어가게해줌 

* express/all.js -- 미들웨어 통합 테스트 
Q. 세션쿠키?
M. /login 에서 /로 돌아가도 돌아가지 않음 
S.  로그인 부분에 res.send(output); 추가함

-> 3장  '5줄로만드는 서버'까지 완료 

