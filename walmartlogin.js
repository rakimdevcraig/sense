var rp = require('request-promise');


var options = {
    method: 'POST',
    uri: 'https://www.walmart.com/p13n/v1/walmart/postaddtocart/content',
    headers: {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "credentials": "include",
        "omitcsrfjwt": "true",
        "origin": "https://www.walmart.com",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "wm_site_mode": "0",
        "cookie": "DL=02122%2C%2C%2Cip%2C02122%2C%2C; vtc=dlF848caalRbYi7MFn4l-U; TBV=7; tb_sw_supported=true; athrvi=RVI~h19fff2cc; hasACID=1; hasCRT=1; ACID=67aa38e3-ea16-4132-b6a6-e73ba41fa191; CRT=6cb1f9ed-ebc0-4e63-a438-06cfa53679c8; WLM=1; GCRT=3865cf96-4455-4bd4-82e3-2a9d86e09029; hasGCRT=1; TS01bae75b=01538efd7cca02bdeafacf0ff82c89a192efb6a686439dff6f9b1809260da84d068c41d4ab49ed6da169d67441572c43a488123667; TS012c809b=01538efd7cca02bdeafacf0ff82c89a192efb6a686439dff6f9b1809260da84d068c41d4ab49ed6da169d67441572c43a488123667; TS01af768b=01538efd7cca02bdeafacf0ff82c89a192efb6a686439dff6f9b1809260da84d068c41d4ab49ed6da169d67441572c43a488123667; x-csrf-jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY29va2llIiwidXVpZCI6ImM4NjZlMjMwLTIzZTktMTFlYi1iMzM5LWQzODM0MTkwODY5MiIsImlhdCI6MTYwNTA3NzI1NiwiZXhwIjoxNjA2MTU3MjU2fQ.66rQDuzTgEMj-eHvr8tJwaw7mhyJKlWnBRT0UTkrn3o; wm_mystore=Fe26.2**538346c010ab4cdd4122c15b8ad157fc6d7707be9e0ed892cc7753a85a394ff8*XEQ97IZC9yf3ZWpXyi7A-g*gy1VKVi9XYIoSEtwN01FwtY8fT0IRKCHfhydkN6vP-Ig2aLYgRtHuPq1q9YtbFzA2Km3qcDrrfGTNAEoWMYI-1hYAQp_Fgcc7icYDwaOjDWBs3JjCodoBb1BG0h2ZN1INt7cWIq5Jbyyd103Uc1b7w**37de504fffbb1571385b1502458db1cdb618d219e82c3de4da6ef9e259f432c3*7_PA5Gt8z76zgeNxORcN6W7lxmzurG_kWKdNxaTF9qQ; akavpau_p14=1605077866~id=940e8f7b18759a64fb76b532768534fa; akavpau_p2=1605078858~id=16880b6c17efa7b292d9ef741e7e415a; bstc=cL5GtIDVlkBlOVK8q5rWDE; xpa=; _abck=f7v81d8xwyfxfzqckerj_1982; auth=MTAyOTYyMDE4KUDyHrgnRUc7%2BDIvCxYNaZqs7%2Fr5SgzJbeykmVfYsDRXVg1VBmczxZQS4ADdgLFWF3Q3RlMiOXOEAnnsGOChuk9YXptqDS44VDez3iGKD%2FXxl773I%2B54vTjXFs8Snxk2RMvR4vpAGLQJj3IgMhxaylJmP51OnmiqNepslwindpBxQx0%2Bv4LnJWLlPIsBpNZJhzSrhR7LVpzfRdcc1O1T91L6CZSzVZykBKTRtORKnJVxU44fd5CBJWII9nXGtMY3OCC1y3FfuL%2BCqfOHRyV1rEA6Vfm5VJNrR3y3AU7SCb9Nsvn2khEfDrUXp1PuLFGWVSR0plNsQiFPjuUM%2FO06eUaeGpNd%2FxQ%2FHoddnilVHW45uMe0MZXKqH7GYDV0x8iglpzDKHiOaSv1NwIhcPhFmQ%3D%3D; rtoken=MDgyNTUyMDE4Y%2Fv6HnHRE4rKCFeiNVDeuhiHmQkzbUMpuirA2i7IhJx2Kk5RuG5ezQ4Au6dCONm%2FVDP%2BJc4aDKkkrzlv%2BRGf8qOQol97XA8bVyt4jeGixy%2FypljPa79ytFzvZ%2F%2Fv4btb62oVarD4Gn8eAFkESb5gzyfWrfU2HiDegS7Vw7FHrGBkKe0bMCEO6uFr1g5yBBfgz3iNQRxb%2Fk%2B8Z3RYfIMH%2FPDTNvaj6YPRk8h%2FAm49WIAMnY2pyE4gjc2KbJ0MwnPr8I3jc4TgcAYMhUnbDRh4mZH11%2BKysdMZYfcoMOp7AKJ9P052HMaZx42JJ%2Bedrk0vP3QpI6venEwCcqBYdkMHUdn938zYUuNLpXL9Zp7KoiNVU3z9uILYezRgamty%2BAyRH58XRDlD5TgMLNo8Z6VPYg%3D%3D; SPID=7b2689accd068c72b531fb8cef65529b268c6a48abbcdd91554c402b694b719f969ae13edf377775c1f8a069fbd72649wmcxo; CID=9e8cd86c-50d8-489d-a294-b3d400540876; hasCID=1; customer=%7B%22firstName%22%3A%22Rakim%22%2C%22lastNameInitial%22%3A%22C%22%2C%22rememberme%22%3Atrue%7D; type=REGISTERED; WMP=4; location-data=02122%3ADorchester%3AMA%3A%3A8%3A1|1t1%3B%3B5.41%2C2gw%3B%3B8.73%2C1nf%3B%3B11.54%2C1my%3B%3B12.18%2C2ei%3B%3B12.24%2C1mf%3B%3B13.48%2C28o%3B%3B13.71%2C1pv%3B%3B14.5%2C21c%3B%3B14.95%2C28m%3B%3B17.67||7|1|1xtp%3B16%3B0%3B3.8%2C1xts%3B16%3B1%3B4.03%2C1xs0%3B16%3B2%3B4.17%2C1xrs%3B16%3B3%3B4.21%2C1xs1%3B16%3B4%3B4.39; xpm=3%2B1605468636%2BdlF848caalRbYi7MFn4l-U~9e8cd86c-50d8-489d-a294-b3d400540876%2B0; next-day=1605546000|true|false|1605614400|1605469433; TS01b0be75=01538efd7c120916b5a0246095c339599776a46926c266fd2cd02391ef673cd91880d5ab89c82e137f5eaa45b63864cb52e56182e5; TS013ed49a=01538efd7c120916b5a0246095c339599776a46926c266fd2cd02391ef673cd91880d5ab89c82e137f5eaa45b63864cb52e56182e5; cbp=436204236-1605469451387; akavpau_p8=1605470070~id=c6d30eb85d876d47def3cfeb87516843; speed=slow; spp=0.9312; mobileweb=1; CXO_CART_ST=%7B%22mtoken%22%3A%22636%3A26%23198472386%232%3D71727898%237%3D213515531%22%7D; tb-c30=scus-t1; cart-item-count=1; com.wm.reflector=\"reflectorid:0000000000000000000000@lastupd:1605469489835@firstcreate:1604973786893\"; akavpau_p3=1605470089~id=b6071bf550560a0db2df2221995407cd",
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Mobile Safari/537.36"
    },
    "referrer": "https://www.walmart.com/pac?id=8af79225-9981-42d2-8971-6d831c3872c2&quantity=1&cv=7",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": { "reqId": "15c06f77-007-175cd704aaa3c0", "inflateContent": true, "modules": [{ "moduleId": "99e6267e-07f0-4a7e-a9e2-b70594722ae6", "moduleType": "DefaultCarousel", "zone": "contentZone3" }], "userReqInfo": { "cartContext": { "items": [{ "id": "436204236", "price": 289.99, "pcp": "0:2636:1224908:1224995", "rhPath": "20000:26000:26005:26170:26775", "isNextDayEligible": false }], "threshold": { "balanceToThreshold": 0, "thresholdType": "FreeShipping" } } }, "userClientInfo": { "deviceType": "desktop", "ipAddress": "IP=0:0:0:0:0:0:0:1-0:0:0:0:0:0:0:1", "callType": "CLIENT", "zipCode": "02122", "isZipLocated": true } },
    mode: "cors",
    json: true // Automatically stringifies the body to JSON
};

rp(options)
    .then(function (parsedBody) {
        console.log('success', parsedBody)
    })
    .catch(function (err) {
        console.log('error', err)
    });