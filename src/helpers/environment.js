let APIURL = "";

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':

    APIURL = 'https://localhost:3000';
    break;

    case 'mixipedia-app-client.herokuapp.com':
    APIURL ='https://mixipedia-app.herokuapp.com/'
}

export default APIURL;