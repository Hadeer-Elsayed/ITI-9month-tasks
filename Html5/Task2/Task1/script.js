if(typeof window.fakeLStorage == 'undefined' || typeof window.fakeSStorage == 'undefined')
    (function() {
        let Storage = function(type) {
            let myDate;
            if(type === "local") {
                myDate = new Date("2030-03-25");
            }
            else {
                myDate = new Date();
            }
            //myCookiesFunctions
            function setCookie(cookieName, cookieValue, expDate) {
                document.cookie = cookieName + "=" + cookieValue + "; expires=" + expDate;
            }
            
            function getCookie(cookieName) {
                let cookies = document.cookie.split(";");
                let cookiesValues =[];
            
                for(let i=0; i<cookies.length; i++) {
                    cookies[i] = cookies[i].split("=");
                    cookiesValues[cookies[i][0].trim()] = cookies[i][1];
                }
                return cookiesValues[cookieName];
            }
            
            function deleteCookie(cookieName) {
                document.cookie = cookieName + "=; expires=" + new Date();
            }
            
            // function allCookieList() {
            //     let cookies = document.cookie.split(";");
            //     let cookiesValues =[];
            
            //     for(let i=0; i<cookies.length; i++) {
            //         cookies[i] = cookies[i].split("=");
            //         cookiesValues[cookies[i][0].trim()] = cookies[i][1];
            //     }
            //     return cookiesValues;
            // }
            function deleteAllCookies() {
                let cookies = document.cookie.split(";");
                for(let i=0; i<cookies.length; i++) {
                    cookieName = cookies[i].substring(0, cookies[i].indexOf("=")).trim();
                    deleteCookie(cookieName);
                }
            }
            //
            return {
                setItem: function(key, value) {
                    setCookie(key, value, myDate);
                },
                getItem: function(key) {
                    return getCookie(key);
                },
                removeItem(key) {
                    deleteCookie(key);
                },
                clear: function() {
                    deleteAllCookies();
                }
            }
    }
        //creating storage
        if (typeof window.fakeLStorage == 'undefined') 
            window.fakeLStorage = new Storage('local');
        if (typeof window.fakeSStorage == 'undefined') 
            window.fakeSStorage = new Storage('session');
    })();

    // fakeLStorage.setItem("job", "developer");
    // fakeLStorage.setItem("name", "nourhan");
    // fakeLStorage.setItem("age", 20);