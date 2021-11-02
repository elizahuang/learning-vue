url='https://private-1d5cc2-rxhelper.apiary-mock.com/patientRecord/'
data={lineID: 'U17af47e63476cf11bce74ade5a87a5b2', date: '2021-06-16', patientID: 2}

fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => console.log(res,typeof(res)))
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));


fetch(url, {
  method: 'POST', // or 'PUT'
  mode: 'no-cors',
  credentials: 'include',
  body: encodeURI(JSON.stringify(data)), // data can be `string` or {object}!
  headers: new Headers({
    // 'Content-Type': 'application/json'
    'user-agent': 'Mozilla/4.0 MDN Example',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'Content-Length':0
  })
}).then(function(res){
  console.log('TESTTESTTEST: \n',JSON.stringify(res));
  return JSON.stringify(res);
  // console.log('********TYPE OF RES******',typeof(res))
  // return JSON.parse(res.replace(/ 0+(?![\. }])/g, ' '));
})
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));