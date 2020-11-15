var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'https://dcc.mp.microsoft.com/v1.0/delivertomarket/US',
    headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "ms-cv": "8j8SmPE0v0eGFtdu.0.1",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-authorization-muid": "189C804E244B62F509CF8F3125B663CC",
        "x-ms-correlation-id": "4dc87d58-9dc2-445c-9b24-58c9550b3efb",
        "x-ms-tracking-id": "18d60a6a-0de2-420a-a4ee-a8316228bf87",
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Mobile Safari/537.36"
    },
    "body": { "lineItems": [{ "lineItemId": "9cf96413-2f6a-4282-ad05-dd6a1744e7d2", "productId": "8XN59CRBSQGZ", "skuId": "HG3Q", "availabilityId": "8WMRVQHKBR6R" }] },
    "referrer": "https://www.microsoft.com/",
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