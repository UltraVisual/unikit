document.querySelector('button').addEventListener('click', function () {
	chrome.runtime.sendMessage({
	   type: 'enableProxy'
	});
});