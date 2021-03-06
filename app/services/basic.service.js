//payload : 컨트롤러의 req.body가 payload가 된다.
exports.bmi = (payload) => {
  const { name, height, weight } = payload;
  //Obtain user inputs
  let _height = Number(height);
  let h = _height / 100; // cm 단위를 m 로 변경함
  let _weight = Number(weight);

  //Perform calculation
  let bmi = _weight / Math.pow(h, 2);
  console.log('bmi 값: ' + bmi);
  let output = Math.round(bmi * 100) / 100;
  console.log('output 값: ' + output);
  var result = { name, height, weight };
  console.log(`계산중인 값들 : ${JSON.stringify(result)}`);
  if (output < 18.5) result.bmi = '저체중';
  if (output >= 18.5 && output <= 25) result.bmi = '정상';
  if (output >= 25 && output <= 30) result.bmi = '과체중';
  if (output > 30) result.bmi = '경도비만';
  console.log(`계산끝난 값들 : ${JSON.stringify(result)}`);
  return result;
};
