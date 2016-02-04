document.querySelector('button').addEventListener('click', function () {
	chrome.runtime.sendMessage({
	   proxyEnabled: !chrome.runtime.proxyEnabled
	});
});