// Whenever a new tab is created, try and add the Quick Links accordion
chrome.tabs.onCreated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url.startsWith("https://my.wgu.edu/courses/course/")) {
    chrome.tabs.sendMessage(tabId, {type: 'getQuickLinks'});
  }
});

// If the Extension Icon is clicked, bring the user to the GitHub page.
chrome.browserAction.onClicked.addListener(function(tab) {
  var win = window.open("https://github.com/bamhm182/WGU-Plus", "_blank");
  win.focus();
});
