let APIURL = "";

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':

    APIURL = 'https://localhost:3000';
    break;

    case 'fast-reaches-58952.herokuapp.com':
    APIURL ='https://redbadge-app.herokuapp.com'
}

export default APIURL;