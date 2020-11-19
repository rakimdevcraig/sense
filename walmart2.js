var rp = require('request-promise');

//add item to cart
//click checkout
//click "shipping address request"
//the url in the uri is the one that I want to make my post request to
var options = {
    "method": 'POST',
    "uri": 'https://www.walmart.com/api/v3/cart/guest/0881a3c9-7bea-4af8-966b-53e0e60f9529/items',
    "headers": {
        "accept": "application/json",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        "content-type": "application/json",
        "origin": "https://www.walmart.com",
        "referer": "https://www.walmart.com/ip/Xbox-Wireless-Controller-Carbon-Black/752722058",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36"
    },
    "body": {
        'quantity': 1,
        'offerId': "3023DA9271544F98BD1A0D254F564C46"
    },
    mode: "cors",
    resolveWithFullResponse: true,
    json: true

};

rp(options)
    .then(function (parsedBody) {
        console.log('success', parsedBody.statusCode)
    })
    .catch(function (err) {
        console.log('error', err)
    });

//For offer ID:
//go to product page and open network tabs
//click contenr tab
//open modules all the way up until I see the "offer ID which is what I need to make a post"
// in the headers section I have to grab the referrers link


