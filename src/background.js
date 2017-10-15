chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url.startsWith("https://my.wgu.edu/courses/course/")) {
    chrome.tabs.sendMessage(tabId, {type: 'getQuickLinks'});
  }
});
