var rp = require('request-promise');
//for gamestop when you first go on the site and click a console it doesn't show the proper product id
// in the link but when you go to your cart and then click the item it will bring you back to
// the page and the proper product id will be in the parameters

//Currently only works when the user is logged have to add to the script the ability to login from the bot 
//then add to the cart

//works for assassins creed
// var options = {
//     method: 'POST',
//     uri: 'https://www.gamestop.com/on/demandware.store/Sites-gamestop-us-Site/default/Cart-AddProduct?redesignFlag=true&productID=158465',
//     headers: {
//         "accept": "*/*",
//         "accept-language": "en-US,en;q=0.9",
//         "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "x-requested-with": "XMLHttpRequest",
//         "cookie": "akaas_ChatThrottling=2147483647~rv=43~id=7989ca695dcbb5b188a549ed9b97e661~rn=; __cfduid=d707f2ef0b9cc490df5af47fea18f76571604973649; cqcid=adcPCtWc3fr8Qd41RU10ebakjn; cquid=||; customergroups=Everyone; dwanonymous_420142ceefb9f0c103b3815e84e9fcef=adcPCtWc3fr8Qd41RU10ebakjn; userInfo=S=N|R=N|C=0; _caid=c518f2f9-8217-491e-9218-9c50df2e144b; __cq_dnt=0; dw_dnt=0; BVImplsfcc=9014_3_0; salsify_session_id=ff8b76cb-cc77-4c71-ae7a-aecb578f8e84; ak_bmsc=BCC36919780FB07000C9B38226B13D2E172427A5FC370000FF8EAB5F230DD811~plluMDKxB3pGU9R0jfQhYwWc/4ULactzyf4WIVLSEVhgk9Esl1r5mSrP8wxnVL7TlRsT7MH7lJRnweA7AMl/Q4++aV2/227kR75V69JhYbI+XkQYH/5WpdxPMFhvC3RpbMdm5OjsKXk6mCVBB1mX/k4PhrlfTRE3ZaQ1Sp/meMNfWSgAtEhhwVu7cz4FA4f8EMW4Tc9dwN/o7XOaPyf2ShoQbw1CuLjcHuApxFTeuT57Y=; bm_sz=D03E75686A12A291B163FD1D4E292AA0~YAAQpSckF54l4rF1AQAAApUmtgnN13ndsG0AuyC/6HjsSIQJyPRE2Rg6ZLxvLv3A0OoZj4zOLboxwGFDhhBoP9waVc7KbnC1CSgABqgY7mqj1aOIjzXnWQrLY5+2BGKpuvynSN9oiwtdxOkn3xzhat/cmghUAZ8LJzpuOoLrvl4K3+DlJDYXOC3PyulvRPu8nLA=; _cavisit=175b6269aff|; dwac_a78eb5a11975e4c9cbc84f55ad=JXlNc8QR-7djpDziISbVfZdfM88d6m_WlMc%3D|dw-only|||USD|false|US%2FCentral|true; sid=JXlNc8QR-7djpDziISbVfZdfM88d6m_WlMc; dwsid=XHsdOOyD5eeftM8uekigIe5dY4Q1eHGGaNfXUb4y-9DWVYA8IG6HiTY2MkhfUTuDFwgnLYATp8Jod1Mnsfbshg==; bm_mi=665D0AE1BDCDB7A978F9987CD99140E0~gth7GY9wQfw6EU+G5Xhljx1dfObkJdY5cYuNK8zpvr3oDJtCrQHzw+JfJVrMJCw8aC8xYKQYfJOltq7tpyqVnu1aOa2X9JmBMkQlatDTR2bJppEbLpak+UJeZ/ZrbqP8oijEjaJBzAhtK5cJ1VYdrkD/J/f4QH5Q8WWBmyNOf1fRUHut/+WkStlz9l+Xa9PKrF9pbYrFGHL/+T9iJmKtff8Qf2g4R+7A3/mLN+6oHnpIQGnmcnuOpgwfftvWCdDboJhWkN9hAmEMwzpKEjopi6M44/9p085qwmehj7CZJmh4BaiDfP9kcpxIpcnShjP+4JYc+I8hndXCwQzGDAFTFg==; bm_sv=491D41B38BAA927A5A599E4CEC886E27~5bQmnXXjeoSeFlejsV4cv/L9WanUlDekR4J0qZ4CrqzdWu+p//oe2rvTseerq7H5VRAbiKwY9zZjv4wzrDGjhAFoxAkyLybwqoK/x7DP68bmkxhHFRlmyTCUtooCkAHRchZc3DFXdCPzuEbarQeCWYcLJjRewwZaBF7BCGH0tkM=; _dd_s=rum=1&id=603cc5a9-a81d-4a5c-a061-884ef93841d6&created=1605078804972&expire=1605079716564; _abck=438145AC61B9946987F9606A51CF2382~-1~YAAQpSckFywm4rF1AQAAmhcntgTENFsm9LJWMyS9iAdqMl8jPO8ackWiHwZ8j/Ej+9C+3K6aGifXJK08TYVZP98b9ys7tOG2lmDkOiI8qzDzr7vx/SObsX5jIZR81lCRJ7gUmzP32soJEKQisDVWmR75g2wrU19nhlcTbIRj8VEc+llVVcYlLJdWq9fZAo0LXNWm+70H3LJvQrhnwp1SY2+T8enHwQmMy4rkGdl+Iv+m7vK+48Fsh0bQgp5c/30Tcri8XJ/yLS3LTGo6cr3d7SmMP2zMmV63TVOoB7dI7QFvqHTGZcPMh5op3T1YpLDadtRdFUe3fP7+xQEybq+BTrlIC/femJwIudQqMXjdkaXtoOqPiQ==~-1~-1~-1",
//         "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Mobile Safari/537.36"
//     },
//     "body": "pid=158465&quantity=1&pageSpecified=PLP&recentCheck=true",
//     "referrer": "https://www.gamestop.com/video-games/xbox-one/consoles",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     json: true // Automatically stringifies the body to JSON
// };

// rp(options)
//     .then(function (parsedBody) {
//         console.log(parsedBody)
//     })
//     .catch(function (err) {
//         console.dir(err)
//     });

//works for mortal kombat
var options = {
    method: 'POST',
    uri: "https://www.gamestop.com/on/demandware.store/Sites-gamestop-us-Site/default/Cart-AddProduct?redesignFlag=true&productID=193589",
    headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "akaas_ChatThrottling=2147483647~rv=43~id=7989ca695dcbb5b188a549ed9b97e661~rn=; __cfduid=d707f2ef0b9cc490df5af47fea18f76571604973649; cqcid=adcPCtWc3fr8Qd41RU10ebakjn; dwanonymous_420142ceefb9f0c103b3815e84e9fcef=adcPCtWc3fr8Qd41RU10ebakjn; _caid=c518f2f9-8217-491e-9218-9c50df2e144b; __cq_dnt=0; dw_dnt=0; BVImplsfcc=9014_3_0; salsify_session_id=ff8b76cb-cc77-4c71-ae7a-aecb578f8e84; __cqact=%5B%7B%22activityType%22%3A%22addToCart%22%2C%22parameters%22%3A%7B%22cookieId%22%3A%22adcPCtWc3fr8Qd41RU10ebakjn%22%2C%22userId%22%3A%22%22%2C%22product%22%3A%7B%22id%22%3A%2211102094%22%2C%22sku%22%3A%22215853%22%2C%22quantity%22%3A1%7D%2C%22realm%22%3A%22BCPK%22%2C%22siteId%22%3A%22gamestop-us%22%2C%22instanceType%22%3A%22prd%22%2C%22locale%22%3A%22default%22%7D%7D%5D; AnonymousSaveForLaterCookie=c8dd19697be60a737d84a4f8f3; lastVisitedCgid=xbox-one; bm_sz=6515EEAB2E1D3550D6893AB5FD563DE8~YAAQ5fzDFwRupq51AQAA8tAmzQmxENwDsksMuiHhB4+jUWPn3pjLjcgVhlJjiL3T829g4IcIyqzx27TOu5lcdeksCkPgfFr41DS0ydDR5hJPCCnx0epUV4UpYhRaNqQXhbh9+xnvYRBb5pLErBtaZL1hFNHv1YLv407BgnHPDP67WeEg1Uev+kewvTstqXzJScQ=; _cavisit=175cd26d653|; bm_mi=8DD72E449C5F77BBA9AFCEB181992AA6~BP/mY9eDLpLf6K8wVkHz723T8Wrzz+d8LCijl+FoMbTJAR24uZriA6YDmSosuAGwWrEcIg47eXU6rMsOP6RmWSZUGID34eOl5RpMzodrziOcyyn4hhq1y0b+tvQU+iXWx1/Cj3qTUtxGhIYRGMX8sJNeTfW0NRHE2gltvXmk63yVyb7UaZ+VcZuFycg3kCxGMauDB3c2AY/U0eJOj080AXn198Pf3iT2bCw1wTqX5fIwt9l0/lP+x6AcWXKdE7CkhQyxUvQU7RAn84PGaYtn2oN9ZqlfcxB5F0421/RD5m5n3KPFt6MCjQLgQtf+cFOV/FViyLMWSYZB0jriluraRA==; bm_sv=623B36E904816CAD5CE98ECDA4EDEAB3~HSZdTpsppnC80fhirPM9poIDodb1pyQPaJ5xXIQOOGBeq2V2q/X2XdeDlurD3TgT4PE+9d6IGrxHIkLWc14p2cITSTsH2MoxrHitOhCDBsn4tdORdFNt6tC/ntq0g/SUv1JD2p3DqpnnbcdNS/mkGHEJDG2x0PNsIss992r+9co=; ak_bmsc=A0564A8785DE00720040A8AF24A442C217C3FCE5872100006272B15FD9FB4562~pl9w/CwZJtloz12IJ9hUob2uukKTkvvoHacBniuqmOnjgkG4UY9LYmbyMWKswXvUNmD0lYvzA1Mg/OgirD6Mp+/QYhztx4q++vD3FCUuV2J5s2lfq5zeJV5zmA8Z1aY/rC7UVK8FH9pS2o5zXZ8VuzWzTdpuHS28ALVTk3RKaFtBcYp45WK97elpwjXjMmYdvpiGVrfIHyq4kIB9ZnuFvLZ7rAQ/4+yKm0/2R+sGFi8prwrXcnLvmKtsXmVGdzet8bagLcvYhhQC2+bIuYgHO62EemMCcGhdeB1O9hBRNQwce0WH5MuWzQl8eOwE9pVIE5dlM5H1qL77ElXlmMF0D1zC7Hx+b57ZSCXwUR3XDh4wG8lgz4VT5kG5hpHDXvhM7R; cartqty=C=0; userInfo=S=Y|R=PLAYER|C=0; customergroups=\"Everyone,PUR-Player,Registered\"; dwsid=HUUthY8Zd-ifDKiK6dKpzuRiFg9Utkn-oBdo9-ync4_X_XbjXBEjmmX5rndJMJbFhXMTPyU_KfrTeVdAu9NvnQ==; username=\"rakim craig\"; dwac_a78eb5a11975e4c9cbc84f55ad=hJ6KDMx2HkIJk5qrP1WJseOUktczO-s1vlE%3D|dw-only|1122299166||USD|false|US%2FCentral|true; cquid=BVXye9SxJmDTj2Z0O52e/kBqh6BsDQWD75T1XHl4ODw=|f8269c3b95271f594f2a14540eee18dde68ca359a590654b65b8e0575ad3cb69|f8269c3b95271f594f2a14540eee18dde68ca359a590654b65b8e0575ad3cb69; sid=dYRNtKpuA-jyb7c2TR4bbIyjdj5xwT3-zXQ; _abck=438145AC61B9946987F9606A51CF2382~-1~YAAQzfzDF+jltKZ1AQAAqXVEzQTy/09GEr8kiBWlyHVazHwkPV/z4HRHDIrIF5bCtnBcYvcu6KYmkRbkayr3OiC1kwNHlcFUOo/eL7HVI1Apj3IYLPiNebYP0w56hq4v01HTVzYTXjamzOZiSfrqgyEY9Y0TmuBmYfF9jzWjGzl5vlS+p0W68H8dwRqim6JE2a1EQHeEEHLxtQoLlk1pSWxjzwBMXUQktLkwT9pUb+NysZm2kGFaz8oaeAjm0m14+Ib0LD85VDRRwenawcwwwgUkHqg2arkMEYPSRRvok0su+LFdT+lsf9XJt6/037xP+jABOwn+nt0+GiJ0O5Hc4L12EHsnPj4KlBgiLnUfmifyYoRAqQ==~-1~-1~-1"

    },
    "body": "pid=193589&upsellID=&quantity=1&purPROID=&options=%5B%7B%22optionId%22%3A%22magazineFormat%22%7D%2C%7B%22optionId%22%3A%22GPG%22%7D%2C%7B%22optionId%22%3A%22GPG%22%2C%22selectedValueId%22%3A%22NULL%22%7D%5D&isSDD=false&deliveryOption=home&storeId=0680&storeInventoryCount=3&pageSpecified=PDP&recommTitle=Buy+Together",
    referrer: "https://www.gamestop.com/video-games/xbox-one/games/products/mortal-kombat-11/10171163.html?condition=Pre-Owned",
    referrerPolicy: "strict-origin-when-cross-origin",
    mode: "cors",
    json: true // Automatically stringifies the body to JSON
};

rp(options)
    .then(function (parsedBody) {
        //have to find out exactly what I want to console log and log that also the price isn't logging
        console.log(parsedBody.action, parsedBody.quantityTotal, parsedBody.message, parsedBody.price)
    })
    .catch(function (err) {
        console.log(err)
    });