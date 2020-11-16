const fetch = require('node-fetch');

const itemNumber = '14660316';

(async () => {
    const res = await fetch('https://www.walmart.com/terra-firma/fetch?rgs=REVIEWS_FIELD,QUESTIONS_FIELD,CARE_PLANS_MAP,HOME_SERVICES_MAP,BUY_BOX_PRODUCT_IDML,CHECKOUT_COMMENTS_FIELD', {
        headers: {
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/json',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'wm_consumer.id': '4b2c3d8c-b075-11e7-abc4-cec278b6b50a',
            wm_site_mode: '0',
            cookie: 'brwsr=4dddc244-743c-11ea-a19f-42010a246f19; DL=97209%2C%2C%2Cip%2C97209%2C%2C; vtc=TA4KT46YsnLqVbfvIM2ifE; TS013ed49a=01538efd7cba7557b93b820cdcaf9e23e98f76e3b2b9f4dd899e894dcc9f65020bf5447a2ad0f87eb9a85ea4e2af721c8bc9dcac83; TBV=7; _pxvid=b73cab77-fc22-11ea-90ed-0242ac12000b; cart-item-count=0; _gcl_au=1.1.401939735.1600703663; s_pers_2=om_mv3d%3Daff%3Aadid-%3Asourceid-imp_waFQRwyk4xyOW3CwUx0Mo34BUkiX7BWPtXwe1c0%3Awmls-imp_159047%3Acn-%7C1600966467407%3B%20%2Bom_mv7d%3Daff%3Aadid-%3Asourceid-imp_waFQRwyk4xyOW3CwUx0Mo34BUkiX7BWPtXwe1c0%3Awmls-imp_159047%3Acn-%7C1601312062196%3B%20%2Bom_mv14d%3Daff%3Aadid-%3Asourceid-imp_waFQRwyk4xyOW3CwUx0Mo34BUkiX7BWPtXwe1c0%3Awmls-imp_159047%3Acn-%7C1601916862197%3B%20%2Bom_mv30d%3Daff%3Aadid-%3Asourceid-imp_waFQRwyk4xyOW3CwUx0Mo34BUkiX7BWPtXwe1c0%3Awmls-imp_159047%3Acn-%7C1603299262198%3B%20useVTC%3DY%7C1663818862%3B%20om_mv7d%3Daff%3Aadid-%3Asourceid-imp_waFQRwyk4xyOW3CwUx0Mo34BUkiX7BWPtXwe1c0%3Awmls-imp_159047%3Acn-%7C1601312067409%3B%20om_mv14d%3Daff%3Aadid-%3Asourceid-imp_waFQRwyk4xyOW3CwUx0Mo34BUkiX7BWPtXwe1c0%3Awmls-imp_159047%3Acn-%7C1601916867410%3B%20om_mv30d%3Daff%3Aadid-%3Asourceid-imp_waFQRwyk4xyOW3CwUx0Mo34BUkiX7BWPtXwe1c0%3Awmls-imp_159047%3Acn-%7C1603299267410; tb_sw_supported=true; athrvi=RVI~hdfb2e7-hffda8e; s_sess_2=c32_v%3DPUT%2Cnull%3B%20prop32%3D; next-day=null|false|true|null|1602534050; location-data=97209%3APortland%3AOR%3A%3A1%3A1|4jv%3B%3B4.78%2C1yw%3B%3B6%2C4kv%3B%3B7.33%2C474%3B%3B7.58%2C2fd%3B%3B7.91%2C4mh%3B%3B7.99%2C2cq%3B%3B8.42%2C2fc%3B%3B8.58%2C1yu%3B%3B9.07%2C4mi%3B%3B9.95||7|1|1yio%3B16%3B0%3B0.32%2C1yog%3B16%3B1%3B0.34%2C1yi8%3B16%3B2%3B0.51%2C1yip%3B16%3B3%3B0.86%2C1yiv%3B16%3B4%3B0.95; bstc=bK4MctO-loFU41_gWVttPQ; mobileweb=0; xpa=3Gwoe|GVCxh|Qcqo1|Xd2Cd|_mhAJ|a4l9O|gf2po|h_-1e|ong7t|piIGs|rFBtC|vPw0w; exp-ck=3Gwoe1GVCxh1Qcqo11Xd2Cd2_mhAJ1a4l9O1gf2po1h_-1e1ong7t1piIGs3vPw0w1; xpm=1%2B1602534050%2BTA4KT46YsnLqVbfvIM2ifE~%2B0; ndcache=d; com.wm.reflector="reflectorid:0000000000000000000000@lastupd:1602534100174@firstcreate:1602270006186"; akavpau_p8=1602534700~id=57d2c9546e81be0239dc43c08aec5db1; _uetsid=6cae8c900cc811eb80ccdb08a9eed453; _uetvid=6c5bb5e583e5e7effb22faa69b4488a8; akavpau_p0=1602534790~id=827a8d0d732486cf2885c4279094098b; _px3=1fb33c07e4a6f3005932de5b8699a725026ec2e4635227f8468eb84666525a5b:fZEKg59hWyBsF4G0g1ilF/H3IAXfPLptvfk0SfihgG93cSGu4p3T7ddXuwAFEgLR1ZgIyzj/ivk5xiDnUflX2Q==:1000:FwtAJkYwkhW+cnWHSWNT+F6FymWqpw5JG7hiLqPYxrPtvVuPG7CuhJeqBblOWaS6jOnGQf0Mi8MisaGY7TwXL4/QImi5z8fd2jCIhx/VsaJ4rYwgBOH3YlzMbjlp/0YItaGeElK5/Wpau65Qp4sCR+XGPtdojfPQZg+GKQvCnV0=; _pxde=9011a1d0e711408bf504c97ef1e5c837303e6451e45556c64dc29a8578bb13b4:eyJ0aW1lc3RhbXAiOjE2MDI1MzQzNDQzNDQsImZfa2IiOjAsImlwY19pZCI6W119; TS01b0be75=01538efd7cc62d88b83fc83c7de873aed84b296f083180dfb16be164d96a0f6bc2a352ce891334e2fdb80ff36108a525722fdc7a4c'
        },
        referrer: 'https://www.walmart.com/ip/Bowflex-SelectTech-552-Adjustable-Dumbbells-Pair/14660327?selected=true',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: `{"itemId":"${itemNumber}","categoryPathId":"0:4125:4134:1026285:1078284:1078285","paginationContext":{"selected":false,"selectedCatalogSellerId":null},"postalAddress":{"postalCode":"97209","zipLocated":true,"stateOrProvinceCode":"OR","countryCode":"USA","addressType":"RESIDENTIAL"},"storeFrontIds":[{"usStoreId":"5899","preferred":false,"semStore":false,"lastPickupStore":false,"distance":4.78},{"usStoreId":"2552","preferred":false,"semStore":false,"lastPickupStore":false,"distance":6},{"usStoreId":"5935","preferred":false,"semStore":false,"lastPickupStore":false,"distance":7.33},{"usStoreId":"5440","preferred":false,"semStore":false,"lastPickupStore":false,"distance":7.58},{"usStoreId":"3145","preferred":false,"semStore":false,"lastPickupStore":false,"distance":7.91}]}`,
        method: 'POST',
        mode: 'cors'
    }).then(data => data.json());

    console.log(res.payload.buyBox);
})();