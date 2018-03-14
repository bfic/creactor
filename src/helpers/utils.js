/* Cookie helpers */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            console.log(c.substring(name.length,c.length));
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

window.setCookie = setCookie;
window.getCookie = getCookie;
window.deleteCookie = deleteCookie;





/* Local storage helpers - used for getting and storing data */
function setLocalStorage(cname, cvalue, exdays) {
    localStorage.setItem(cname, cvalue);
}

function getLocalStorage(cname) {
    return localStorage.getItem(cname);
}

function deleteLocalStorage(cname) {
    localStorage.removeItem(cname);
}

window.setLocalStorage = setLocalStorage;
window.getLocalStorage = getLocalStorage;
window.deleteLocalStorage = deleteLocalStorage;


export const asyncLocalStorage = {
  setItem: function (key, value) {
    return Promise.resolve().then(function () {
        localStorage.setItem(key, value);
    });
  },
  getItem: function (key) {
    return Promise.resolve().then(function () {
        return localStorage.getItem(key);
    });
  }
};