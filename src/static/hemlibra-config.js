/**
 *
 * Client side config for Hemlibra Portal
 *
 * Created by paulbarrass on 4/12/2017
 */


// work out where the api is
window.serverRoot = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
if (url.indexOf('localhost') > -1 || url.indexOf('192.168.1.') > -1) {
	window.serverRoot = 'http://academy.dev';
}
window.apiLocation = serverRoot + '/api/v1';
