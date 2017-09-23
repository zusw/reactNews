export function getData(){
  var result = fetch("http://www.iwen.wiki/sxtstu/blueberrypai/getChengpinDetails.php",{
    method:"GET"
  });

  result.then(res => {
    return res.json();
  }).then(json => {
    console.log(json);
  })
}

export function postData(){
  var result = fetch("http://iwen.wiki/sxtstu/blueberrypai/login.php",{
      method:"POST",
      headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/x-www-form-urlencoded'
      },
      // 注意 post 时候参数的形式 name=iwen&age=20
      body:"user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
  });

  result.then(res => {
    return res.json();
  }).then(json => {
    console.log(json);
  })
}
