var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'https://www.walmart.com/p13n/v1/walmart/postaddtocart/content',
    headers: {
        "authority": "www.walmart.com",
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
        "cookie": "cookie: DL=02122%2C%2C%2Cip%2C02122%2C%2C; vtc=dlF848caalRbYi7MFn4l-U; TBV=7; tb_sw_supported=true; location-data=02122%3ADorchester%3AMA%3A%3A1%3A1|1t1%3B%3B5.41%2C2gw%3B%3B8.73%2C1nf%3B%3B11.54%2C1my%3B%3B12.18%2C2ei%3B%3B12.24%2C1mf%3B%3B13.48%2C28o%3B%3B13.71%2C1pv%3B%3B14.5%2C21c%3B%3B14.95%2C28m%3B%3B17.67||7|1|1xtp%3B16%3B0%3B3.8%2C1xts%3B16%3B1%3B4.03%2C1xs0%3B16%3B2%3B4.17%2C1xrs%3B16%3B3%3B4.21%2C1xs1%3B16%3B4%3B4.39; bstc=UVe9iXv_AGw5mPSBRUxre0; xpa=; xpm=3%2B1605076411%2BdlF848caalRbYi7MFn4l-U~%2B0; athrvi=RVI~h19fff2cc; speed=slow; spp=0.9312; hasACID=1; type=GUEST; hasCRT=1; ACID=67aa38e3-ea16-4132-b6a6-e73ba41fa191; auth=MTAyOTYyMDE4QgV9N3ZkPJhmI%2BWzgsTPl2G6aqZ66%2FE4PFKSD%2B18iC2%2FkVj%2FPP611eGvOOjevWT4JNWK668hBfXXVk1MJudb2JHVx9%2BW9Hvlbx%2BpZ4mpoDhPUCD566jqgE1RP9QajZKX767wuZloTfhm7Wk2Kcjygt6CFmh5hT8BoAhiLFQG8TMevbSZJiJG8HXJajoopoGnNuHt7BJJh3rXeHqbmntGLUaKAbUY3c77yFQt04181yUUMk70P8glgOEpLOprhDfMb%2FEw67%2FGsLtdlJHpe1JgEHXZCX3Nqema9fP8%2BgMGE2pSTAMciAYYEZ8Q88cz3kRUHgEzMjh8yuleblkUpMTErTtUJ2aUtL3UtcHbsh8PaRkWzeb0Nb%2BKOWZXoYshektNwIeg4Y6Zb%2B2Q59tlkzoLGw%3D%3D; CRT=6cb1f9ed-ebc0-4e63-a438-06cfa53679c8; WLM=1; GCRT=3865cf96-4455-4bd4-82e3-2a9d86e09029; hasGCRT=1; TS01bae75b=01538efd7cca02bdeafacf0ff82c89a192efb6a686439dff6f9b1809260da84d068c41d4ab49ed6da169d67441572c43a488123667; TS012c809b=01538efd7cca02bdeafacf0ff82c89a192efb6a686439dff6f9b1809260da84d068c41d4ab49ed6da169d67441572c43a488123667; TS01af768b=01538efd7cca02bdeafacf0ff82c89a192efb6a686439dff6f9b1809260da84d068c41d4ab49ed6da169d67441572c43a488123667; x-csrf-jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY29va2llIiwidXVpZCI6ImM4NjZlMjMwLTIzZTktMTFlYi1iMzM5LWQzODM0MTkwODY5MiIsImlhdCI6MTYwNTA3NzI1NiwiZXhwIjoxNjA2MTU3MjU2fQ.66rQDuzTgEMj-eHvr8tJwaw7mhyJKlWnBRT0UTkrn3o; wm_mystore=Fe26.2**538346c010ab4cdd4122c15b8ad157fc6d7707be9e0ed892cc7753a85a394ff8*XEQ97IZC9yf3ZWpXyi7A-g*gy1VKVi9XYIoSEtwN01FwtY8fT0IRKCHfhydkN6vP-Ig2aLYgRtHuPq1q9YtbFzA2Km3qcDrrfGTNAEoWMYI-1hYAQp_Fgcc7icYDwaOjDWBs3JjCodoBb1BG0h2ZN1INt7cWIq5Jbyyd103Uc1b7w**37de504fffbb1571385b1502458db1cdb618d219e82c3de4da6ef9e259f432c3*7_PA5Gt8z76zgeNxORcN6W7lxmzurG_kWKdNxaTF9qQ; akavpau_p14=1605077866~id=940e8f7b18759a64fb76b532768534fa; tb-c30=wus-t1; next-day=1605200400|true|false|1605268800|1605077917; akavpau_p2=1605078518~id=26db0552714c0b5cfca0982e73307f32; TS01b0be75=01538efd7c0ff23659ae4382dcbb72886c1cece29105590b2dd2ef8f9b13aeebee0ea01a0b3a37aabe53836805607110ec7feb3fab; TS013ed49a=01538efd7c4424af1e5d055f04e63a87e5c906b6a94ef56555b923263401dda03791196ac359925c47664f3f43c39260bbd0b5a47c; akavpau_p8=1605078529~id=fe0433742eec7c271cddc68e85a926ab; mobileweb=1; CXO_CART_ST=%7B%22mtoken%22%3A%22636%3A26%23197839807%232%3D70872179%237%3D212672605%22%7D; cart-item-count=1; com.wm.reflector=reflectorid:0000000000000000000000@lastupd:1605077940989@firstcreate:1604973786893 akavpau_p3=1605078541~id=c63f94469e2d8d838e6e2bb095057a65",
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Mobile Safari/537.36"
    },
    body: {

        "reqId": "61c6a8c7-007-175b615a7afdba",
        "inflateContent": true,
        "modules": [
            {
                "moduleId": "e20f4893-bc39-4590-bd1a-65c915e3c0ff",
                "moduleType": "DefaultCarousel",
                "zone": "contentZone2",
                "inflateContent": false
            }
        ],
        "userReqInfo": {
            "cartContext": {
                "items": [

                ],
                "threshold": {
                    "thresholdType": "FreeShipping"
                },
                "isCartNextDayEligible": false
            }
        },
        "userClientInfo": {
            "deviceType": "mobile",
            "ipAddress": "IP=0:0:0:0:0:0:0:1-0:0:0:0:0:0:0:1",
            "callType": "CLIENT",
            "zipCode": "02122",
            "isZipLocated": true
        }

    },
    "referrer": "https://www.walmart.com/pac?id=447d33a9-a427-42e3-aa0a-9cd41118b354&quantity=1&cv=1",
    "referrerPolicy": "strict-origin-when-cross-origin",
    json: true // Automatically stringifies the body to JSON
};

rp(options)
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.log(err.modules)
    });