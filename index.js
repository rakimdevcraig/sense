var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'https://www.ssense.com/en-us/api/shopping-bag/202020M20501302',
    body: {
        "sku":"202020M20501302",
        "serviceType":"product-details",
        "userId":null
    },
    json: true // Automatically stringifies the body to JSON
};

rp(options)
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.log(err)
    });