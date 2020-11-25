let rp = require('request-promise');
let encrypt = require('./encrypt.js')
//will store all of the cookies for each request to use
let cookieJar2 = rp.jar();


function addToCart() {
    let options = {
        "method": 'POST',
        "uri": 'https://www.walmart.com/api/v3/cart/guest/0881a3c9-7bea-4af8-966b-53e0e60f9529/items',
        "headers": {
            "accept": "application/json",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "content-type": "application/json",
            "origin": "https://www.walmart.com",
            "referer": "https://www.walmart.com/ip/Exquisite-Gaming-Cable-Guy-Charging-Controller-and-Device-Holder-Marvel-Deadpool-8/913038699",
            // "referer": "https://www.walmart.com/ip/Xbox-Wireless-Controller-Carbon-Black/752722058",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36"
        },
        "body": {
            'quantity': 1,
            // 'offerId': "3023DA9271544F98BD1A0D254F564C46" //xbox controller
            "offerId": "F0713C1F22EF4F2993649B0AB3568CF4" //charging controller and device holder
        },
        // resolveWithFullResponse: true,
        gzip: true,
        mode: "cors",
        jar: cookieJar2,

        json: true // Automatically parses the JSON string in the response
    };
    rp(options)
        .then(function (response) {
            console.log('ITEM ADDED TO CART',) //response)
            // console.log(response.statusCode)
            checkoutCart()
        })
        .catch(function (err) {
            console.log('error', err)
        });
}

function checkoutCart() {
    let options = {
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
            //first 3 comes from the cookie"
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
        json: true,
        jar: cookieJar2,
        gzip: true

    };

    rp(options)
        .then(function (response) {
            let id = response.items[0].id
            console.log('CART CHECKED OUT',)
            // console.log("ID that we're using", id)
            submitShippingMETHOD(id)
        })
        .catch(function (err) {
            console.log('error', err)
        });
}

function submitShippingMETHOD(id) {
    let options = {
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
            //if the total price is over $35 then shipping must be expedited if it's under $35 shipping must be standard
            "groups": [{ "fulfillmentOption": "S2H", "itemIds": [`${id}`], "shipMethod": "EXPEDITED" }]
            // "groups": [{ "fulfillmentOption": "S2H", "itemIds": [`${id}`], "shipMethod": "STANDARD" }]
        },
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true
    };
    rp(options)
        .then(function (response) {
            submitShippingAddress()
            console.log('SHIPPING METHOD SUBMITTED',)// response)

        })
        .catch(function (err) {
            console.log('Shipping Method error', err)
        });
}


function submitShippingAddress() {
    let options = {
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
            "changedFields": [],
            "email": "rakimdevraig@gmail.com"
            // "countryCode": "USA",
            // "marketingEmailPref": False,
        },
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true
    };
    rp(options)
        .then(function (response) {
            console.log('SHIPPING ADDRESS SUBMITTED')
            getPie()
            // submitCreditCard()
        })
        .catch(function (err) {
            console.log('error', err)
        });
}

function getPie() {
    let e = "4539888360903645"
    let t = "927"
    let options = {
        "method": 'GET',
        "uri": 'https://securedataweb.walmart.com/pie/v1/wmcom_us_vtg_pie/getkey.js?bust="+str(int(time.time()))',
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "content-type": "application/json",
            "origin": "https://www.walmart.com",
            "referer": "https://www.walmart.com/checkout/",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36",
        },
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true
    };
    rp(options)
        .then(function (response) {
            // console.log(response)
            let PIE_L = (response.split("PIE.L = ")[1].split(";")[0])
            let PIE_E = (response.split("PIE.E = ")[1].split(";")[0])
            let PIE_K = (response.split('PIE.K = "')[1].split('";')[0])
            let PIE_key_id = (response.split('PIE.key_id = "')[1].split('";')[0])
            let PIE_phase = (response.split('PIE.phase = ')[1].split(';')[0])
            let cardData = encrypt(e, t, PIE_L, PIE_E, PIE_K, PIE_key_id, PIE_phase)
            let encryptedPan = cardData[0]
            let encryptedCvv = cardData[1]
            let integrityCheck = cardData[2]
            // console.log('from walmart2 file', cardData)
            console.log("CC DATA ENCRYPTED")
            submitCreditCard(encryptedPan, encryptedCvv, PIE_phase, integrityCheck, PIE_key_id)
        })
        .catch(function (err) {
            console.log('error', err)
        });
}

function submitCreditCard(encryptedPan, encryptedCvv, phase, integrityCheck, keyId) {
    let options = {
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
            "addressLineOne": "111 Codman Park",
            "addressLineTwo": "",
            "cardType": "VISA",
            "city": "Roxbury",
            "encryptedCvv": encryptedCvv,//need to encrypt
            "encryptedPan": encryptedPan,//need to encrypt
            "expiryMonth": "09",
            "expiryYear": "2021",
            "firstName": "Winston",
            "integrityCheck": integrityCheck,//not sure i think i'll leave this out and let it get randomly generated
            "keyId": keyId,//not sure i think i'll leave this out and let it get randomly generated
            "lastName": "Haag",
            "phase": phase,
            "phone": "6178251615",
            "postalCode": "02119",
            "state": "MA"
        },
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true,
        resolveWithFullResponse: true,

    };
    rp(options)
        .then(function (response) {
            // console.log('CREDIT CARD INFO SUBMITTED', response.headers.body)
            // console.log('CREDIT CARD INFO SUBMITTED', response.body)
            console.log('CREDIT CARD INFO SUBMITTED', response)
            // console.log('CREDIT CARD INFO SUBMITTED')
            let piHash = response.piHash
            let preferenceId = response.id
            // console.log('pihash:', piHash)
            // console.log('id:', preferenceId)
            // console.log(encryptedCvv, encryptedPan, preferenceId, integrityCheck, keyId, piHash)
            // submitPayment(encryptedCvv, encryptedPan, preferenceId, integrityCheck, keyId, piHash, phase)
        })
        .catch(function (err) {
            console.log('Credit Card Info Error', err)

        });
}


function submitPayment(cvv, pan, preference, integrity, keyId, piHash, phase) {
    let options = {
        "method": 'POST',
        "uri": 'https://www.walmart.com/api/checkout/v3/contract/:PCID/payment',
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
            "payments": [{
                "paymentType": "CREDITCARD",
                "preferenceId": preference, "isNew": true,
                "cardType": "VISA",
                "firstName": "Winston", "lastName": "Haag", "addressLineOne": "111 Codman Park", "addressLineTwo": "",
                "city": "Roxbury", "state": "MA", "postalCode": "02119", "expiryMonth": 9, "expiryYear": 2021, "phone": "6178251615",
                "encryptedPan": pan, "encryptedCvv": cvv, //need to take from the credit card function
                "integrityCheck": integrity, "keyId": keyId, //not sure i think i'll leave this out and let it get randomly generated
                "phase": phase, "piHash": piHash//need to figure out

            }],
            "cvvInSession": true
        },
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true,

    };
    rp(options)
        .then(function (response) {
            console.log('PAYMENT SUBMITTED', response.request.body) //response)

        })
        .catch(function (err) {
            //how to get the body of your errorrequest if you want to look at it
            console.log('SUBMIT PAYMENT ERROR', err.response.request.body)
        });
}



function placeOrder() {
    let options = {
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


addToCart()
