//app.js 가 엔트리 포인트

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const { PORT } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const APP = './app/routes';

// 이 부분은 제이쿼리에서 $().()와 기능이 동일
const nodes = ['basic', 'board', 'user'];
for (const leaf of nodes) {
  require(`${APP}/${leaf}.route`)({ url: `/api/${leaf}`, app });
  //(url) 부분 : 즉시실행
}

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.listen(PORT, () => {
  console.log('***************** ***************** *****************');
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********');
  console.log('***************** ***************** *****************');
});
app.get('/', (req, res) => {
  res.json({ '현재 시간 : ': new Date().toLocaleString() });
});

app.get('/api/now', cors(corsOptions), (req, res) => {
  res.json({ now: new Date().toLocaleString() });
});
