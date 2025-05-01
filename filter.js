chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
    chrome.contentSettings.cookies.set({
      primaryPattern: "<all_urls>",
      setting: "session_only", 
      scope: "regular"
    }, () => {
      console.log(`Applied 'session_only' cookie policy to: ${tab.url}`);
    });
  }
});
