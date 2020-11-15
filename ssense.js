var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'https://www.ssense.com/en-us/api/shopping-bag/202020M20501302',
    headers: {
        "authority": "www.ssense.com",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "origin": "https://www.ssense.com",
        "cookie": "__cfduid=d8451ed5a5b1fa4d9213b6b1d9d8e00ef1605074332; _pxhd=7c9b5eb4df68e1f2601fb481ada32facd8afc526ecc16cd359abb51ac850f2a6:f99f9ba0-23e2-11eb-b230-69ebf9239fc0; gdprCountry=false; visitorId=ab5df2d4c63074441e9c5c37df33b81429eee348b659c2ebcb633ee747e1f05f; is_fit_predictor_enabled=partial; is_new_stock_remaining_v2=old; is_new_trending_enabled=control; isp=comcast cable communications llc; sid=901cfa1d168f5d67601394d6f84e1f40; lang=en_US; country=US; forcedCountry=US; preferredLanguage=en; shopping_bag=5fab7d9ec017514fb72d139f; _sp_ses.c6c8=*; __zlcmid=117jZp33vdFjsB1; SSP_AB_fitpredictor=test1; _sp_id.c6c8=d694e675-eafa-4eb3-96c9-cf9d4a41551c.1605074335.1.1605075309.1605074335.490b4391-4990-4716-8be3-fa53bfdccbd8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Mobile Safari/537.36"
    },
    body: {
        "sku": "202020M20501302",
        "serviceType": "product-details",
        "userId": null
    },
    "referrer": "https://www.ssense.com/en-us/men/product/marine-serre/white-and-black-lizard-turtleneck/5894881",
    "referrerPolicy": "strict-origin-when-cross-origin",
    json: true // Automatically stringifies the body to JSON
};

rp(options)
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.dir(err)
    });