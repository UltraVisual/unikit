document.querySelector('.proxy-button').addEventListener('click', function () {
	chrome.runtime.sendMessage({
		type: 'enableProxy'
	});
});

document.querySelector('.inject-button').addEventListener('click', function () {
	chrome.runtime.sendMessage({
		type: 'enableInjection'
	});
});
