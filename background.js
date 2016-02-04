var proxyEnabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    proxyEnabled = request.proxyEnabled;

});

chrome.webRequest.onBeforeRequest.addListener(function (details) {
    if (proxyEnabled) {
    	return {
	        redirectUrl: chrome.extension.getURL("responses/member.json")
	    };
    }
}, {
    urls: ["*://*.facebook.com/*"]
}, ["blocking"]);