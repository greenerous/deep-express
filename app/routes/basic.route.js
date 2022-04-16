//라우터 -> 컨트롤러 -> 서비스 -> DB

const { getBmi } = require('../controllers/basic.controller');

//public 이랑 비슷
// x는 app.js의 제이쿼리 기능 부분에서의 url을 받게 됨
module.exports = (x) => x.app.post(`${x.url}/bmi`, getBmi);

//app.js -> basic.routes.js -> controller
