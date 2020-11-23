
//For offer ID:
//go to product page and open network tabs
//click contenr tab
//open modules all the way up until I see the "offer ID which is what I need to make a post"
// in the headers section I have to grab the referrers link
var rp = require('request-promise');
const tough = require('tough-cookie');

//will store all of the cookies for each request to use
let cookieJar2 = rp.jar();
// console.log('before request', cookieJar2)

// add item to cart
// click checkout
// click "shipping address request"
// the url in the uri is the one that I want to make my post request to


// function walmart() {
//     var options = {
//         uri: 'https://walmart.com',
//         jar: cookieJar2,
//         // json: true 
//     };

//     rp(options)
//         .then(function (response) {
//             console.log('COOKIES from 1st request', cookieJar2)
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
            "referer": "https://www.walmart.com/ip/Xbox-Wireless-Controller-Carbon-Black/752722058",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.69 Safari/537.36"
        },
        "body": {
            'quantity': 1,
            'offerId': "3023DA9271544F98BD1A0D254F564C46"
        },
        resolveWithFullResponse: true,
        gzip: true,
        mode: "cors",
        jar: cookieJar2,

        json: true // Automatically parses the JSON string in the response
    };
    rp(options)
        .then(function (response) {
            console.log('ADDED TO CART', response)
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
            console.log('CART CHECKED OUT', response)
            submitShippingMETHOD()
        })
        .catch(function (err) {
            console.log('error', err)
        });
}

function submitShippingMETHOD() {
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
            "wm_vertical_id": "0"
        },
        "body":
            [
                {
                    "fulfillmentOption": "S2H",
                    "itemIds": ["ec312f9a-62ca-4d37-858e-821c1ebced12"],
                    "shipMethod": "EXPEDITED",
                }
            ]
        ,
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true
    };
    rp(options)
        .then(function (response) {
            console.log('Submitted Shipping Method', response)

        })
        .catch(function (err) {
            console.log('error', err)
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
        // "body":
        // {
        //     "addressLineOne": "",
        //     "city":,
        //     "firstName":,
        //     "lastName":,
        //     "phone":,
        //     "email":,
        //     "marketingEmailPref": False,
        //     "postalCode":,
        //     "state":,
        //     "countryCode": "USA",
        //     "addressType": "RESIDENTIAL",
        //     "changedFields": []
        // },
        gzip: true,
        mode: "cors",
        jar: cookieJar2,
        json: true
    };
    rp(options)
        .then(function (response) {
            console.log('Submitted Shipping Address', response)

        })
        .catch(function (err) {
            console.log('error', err)
        });
}

addToCart()

// checkoutCart()

