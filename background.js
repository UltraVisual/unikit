var proxyEnabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if (request.type === 'enableProxy') {
    	proxyEnabled = !proxyEnabled;
    }
});

chrome.webRequest.onBeforeRequest.addListener(function (details) {
    if (proxyEnabled) {
    	return {
	        redirectUrl: chrome.extension.getURL("responses/member.json")
	    };
    }
}, {
    urls: ["*://*/api/member", "*://*/api/login"]
}, ["blocking"]);