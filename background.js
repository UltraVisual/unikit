var proxyEnabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
	if (request.type === 'enableProxy') {
		proxyEnabled = !proxyEnabled;
	} else if(request.type === 'enableInjection') {
		chrome.tabs.query({ currentWindow: true }, function (tab) {
			chrome.tabs.executeScript(tab.ib, {
				file: 'inject.js'
			});
		});
	}
});

chrome.webRequest.onBeforeRequest.addListener(function (details) {
	alert(JSON.stringify(details));
	if (proxyEnabled) {
		return {
			redirectUrl: chrome.extension.getURL("responses/member.json")
		};
	}
}, {
	urls: ["*://*/api/member", "*://*/api/login"]
}, ["blocking"]);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	chrome.tabs.executeScript(tabId, {
		file: 'inject.js'
	});
});
