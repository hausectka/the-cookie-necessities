document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let current = tabs[0];
      let currentUrl = current.url;
      let pattern =  currentUrl.replace(/\/[^/]*?$/, '/*');
  
      chrome.contentSettings.cookies.get({
        primaryUrl: currentUrl
      }, function (details) {
        let select = document.getElementById('cookieSetting');
        select.disabled = false;
        select.value = details.setting;
  
        select.addEventListener('change', function () {
          chrome.contentSettings.cookies.set({
            primaryPattern: pattern,
            setting: select.value
          }, () => {
            console.log(`setting for manaul selection on ${currentUrl}: ${select.value}`);
          });
        });
      });
    });
  });
  