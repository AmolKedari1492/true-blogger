export const timeSince = (date) => {
    const aDay = 24*60*60*1000;
    date = new Date(Date.now()-aDay);

    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}

export const createMarkup = (html) => {
    return {__html: html};
}

export const parseQueryString = (str) => {
    str = str.replace('?', '')
    let arr = str.split('&');
    let arrLen = arr.length;
    let queryParams = {};
    for(let i =0; i < arrLen; i++) {
        let item = arr[i].split("=");
        queryParams[item[0]] = item[1];
    }
    return queryParams;
};

export const formatQueryString = (url, queryObj) => {
    if(url.indexOf('?') === -1) {
        url += '?';
    };

    for(let i in queryObj) {
        url += `${i}=${queryObj[i]}`;
    }

    return url;
};

