document.querySelector('button').addEventListener('click', function () {
	alert(JSON.stringify(chrome.devtools.network))
});
chrome.devtools.network.onRequestFinished.addListener(function(req) {
   return "Yo yo yo";
})