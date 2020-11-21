var rp = require('request-promise');


var options = {
    "method": 'GET',
    "uri": 'https://api.mobile.walmart.com/cart/items',
    json: true, // Automatically parses the JSON string in the response
    gzip: true
};
rp(options)
    .then(function (response) {
        console.dir(response)
        // console.log(response.statusCode)
    })
    .catch(function (err) {
        console.log('error', err)
    });