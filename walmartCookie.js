const requestPromise = require('request-promise');
const tough = require('tough-cookie');


let sessionCookie2 = new tough.Cookie({
  key: "some_key",
  value: "some_value",
  domain: 'walmart.com',
  httpOnly: true,
  maxAge: 31536000
});
let cookieJar2 = requestPromise.jar();
cookieJar2.setCookie(sessionCookie2.toString(), 'https://www.walmart.com/');

let options = {
  uri: 'https://walmart.com/',
  jar: cookieJar2
}

requestPromise(options)
  .then(function (body) {
    // Request succeeded...
    console.log(cookieJar2)
  })
  .catch(function (err) {
    // Request failed...
  });