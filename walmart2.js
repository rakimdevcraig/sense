var rp = require('request-promise');
const tough = require('tough-cookie');

//will store all of the cookies for each request to use
let cookieJar2 = rp.jar();
// console.log('before request', cookieJar2)


// function walmart() {
//     var options = {
//         uri: 'https://www.walmart.com/ip/XB1-Xbox-Series-X/443574645',
//         jar: cookieJar2,
//         // json: true 
//     };

//     rp(options)
//         .then(function (response) {
//             console.log('1st request')
//             addToCart()
//         })
//         .catch(function (err) {
//             console.log(JSON.stringify(err))
//         });
// }

function addToCart() {
    var options = {
        "method": 'POST',
        "uri": 'https://www.walmart.com/api/v3/cart/guest/0881a3c9-7bea-4af8-966b-53e0e60f9529/items',
        "headers": {
            "accept": "application/json",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "content-type": "application/json",
            "origin": "https://www.walmart.com",
            // "referer": "https://www.walmart.com/ip/Exquisite-Gaming-Cable-Guy-Charging-Controller-and-Device-Holder-Marvel-Deadpool-8/913038699",
            "referer": "https://www.walmart.com/ip/Xbox-Wireless-Controller-Carbon-Black/752722058",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36"
        },
        "body": {
            'quantity': 1,
            'offerId': "3023DA9271544F98BD1A0D254F564C46"
            // "offerId": "F0713C1F22EF4F2993649B0AB3568CF4"
        },
        resolveWithFullResponse: true,
        gzip: true,
        mode: "cors",
        jar: cookieJar2,

        json: true // Automatically parses the JSON string in the response
    };
    rp(options)
        .then(function (response) {
            console.log('ADDED TO CART',) //response)
            // console.log(response.statusCode)
            checkoutCart()
            // console.log(cookieJar2)
        })
        .catch(function (err) {
            console.log('error', err)
        });
}

function checkoutCart() {
    var options = {
        "method": 'POST',
        "uri": 'https://www.walmart.com/api/checkout/v3/contract?page=CHECKOUT_VIEW',
        "headers": {
            "accept": "application/json",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "content-type": "application/json",
            "origin": "https://www.walmart.com",
            "referer": "https://www.walmart.com/checkout/",
            "wm_vertical_id": "0",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36"
        },
        "body": {
            //all of the info past "isZipLocated comes from the cookie"
            "crt:CRT": "be22a646-de5a-483f-b6b2-6e3c4a5a7fe5", //needed
            "customerId:CID": "0881a3c9-7bea-4af8-966b-53e0e60f9529", //needed
            "customerType:type": "CUSTOMER", // needed
            // "postalCode": "02119",
            // "city": "Roxbury", //not needed
            // "state": "MA", //not needed
            // "isZipLocated": true, // not needed
            // "com.wm.reflector": "" // not needed
        },
        mode: "cors",
        // resolveWithFullResponse: true,
        json: true,
        jar: cookieJar2,
        gzip: true

    };

    rp(options)
        .then(function (response) {
            let id = response.items[0].id
            console.log('CART CHECKED OUT',)
            console.log(response.items[0])
            submitShippingMETHOD(id)
        })
        .catch(function (err) {
            console.log('error', err)
        });
}

function submitShippingMETHOD(id) {
    var options = {
        "method": 'POST',
        "uri": 'https://www.walmart.com/api/checkout/v3/contract/:PCID/fulfillment',
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "content-type": "application/json",
            "origin": "https://www.walmart.com",
            "referer": "https://www.walmart.com/checkout/",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36",
            "wm_vertical_id": "0",
        },
        "body":
        {
            "groups": [{ "fulfillmentOption": "S2H", "itemIds": [`${id}`], "shipMethod": "STANDARD" }]
        },
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true
    };
    rp(options)
        .then(function (response) {
            // submitShippingAddress()
            console.log('Shipping Method Submitted',)// response)

        })
        .catch(function (err) {
            console.log('Shipping Method error', err)
        });
}
















function submitShippingAddress() {
    var options = {
        "method": 'POST',
        "uri": 'https://www.walmart.com/api/checkout/v3/contract/:PCID/shipping-address',
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "content-type": "application/json",
            "origin": "https://www.walmart.com",
            "referer": "https://www.walmart.com/checkout/",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36",
            "wm_vertical_id": "0"
        },
        "body":
        {
            "addressLineOne": "111 Codman Park",
            "addressLineTwo": "",
            "city": "Roxbury",
            "firstName": "Rakim",
            "lastName": "Craig",
            "phone": "8572664498",
            "postalCode": "02119",
            "state": "MA",
            "addressType": "RESIDENTIAL",
            "preferenceId": "b1a1aa0d-1de8-4b5a-8f83-6d421bfbf758",
            "changedFields": []
            // "countryCode": "USA",
            // "marketingEmailPref": False,
            // "email":,
        },
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true
    };
    rp(options)
        .then(function (response) {
            console.log('Submitted Shipping Address',) //response)

        })
        .catch(function (err) {
            console.log('error', err)
        });
}

function submitCreditCard() {
    var options = {
        "method": 'POST',
        "uri": 'https://www.walmart.com/api/checkout-customer/:CID/credit-card',
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "content-type": "application/json",
            "origin": "https://www.walmart.com",
            "referer": "https://www.walmart.com/checkout/",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36",
            "wm_vertical_id": "0"
        },
        "body": {
            "encryptedPan": "4539409523233505", "encryptedCvv": "981", "integrityCheck": "07ea2f98e889102f", "keyId": "42d11c27", "phase": "0", "state": "MA",
            "postalCode": "02119", "addressLineOne": "111 Codman Park", "addressLineTwo": "", "city": "Roxbury", "firstName": "Rakim", "lastName": "Craig",
            "expiryMonth": "10", "expiryYear": "2024", "phone": "6178251616", "cardType": "VISA"
        },
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true
    };
    rp(options)
        .then(function (response) {
            console.log('Submitted Credit Card Info',) //response)

        })
        .catch(function (err) {
            console.log('Credit Card Info Error', err)
        });
}

function placeOrder() {
    var options = {
        "method": 'PUT',
        "uri": 'https://www.walmart.com/api/checkout/v3/contract/:PCID/order',
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "content-type": "application/json",
            "origin": "https://www.walmart.com",
            "referer": "https://www.walmart.com/checkout/",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36",
            "wm_vertical_id": "0"
        },
        "body": {},
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true
    };
    rp(options)
        .then(function (response) {
            console.log('Submitted Credit Card Info',) //response)

        })
        .catch(function (err) {
            console.log('Credit Card Info Error', err)
        });
}


// walmart()
addToCart()

