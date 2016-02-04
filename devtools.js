chrome.runtime.proxyEnabled = false;

chrome.devtools.panels.create(
    'Unikit',
    null, // No icon path
    'panels/panel.html',
    null // no callback needed
);