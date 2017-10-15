chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url.startsWith("https://my.wgu.edu/courses/course/")) {
    chrome.tabs.sendMessage(tabId, {type: 'getQuickLinks'});
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
  var win = window.open("https://github.com/bamhm182/WGU-Plus", "_blank");
  win.focus();
});
