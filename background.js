//background service worker
// https://developer.chrome.com/docs/extensions/reference/api/runtime?hl=ko
chrome.runtime.onMessage.addListener(() => {
  console.log("The Cookie Necessities Extension Installation Finished.");
  // StorageAPI https://developer.chrome.com/docs/extensions/reference/api/storage?hl=ko#description
    chrome.storage.sync.set({
        extensionEnabled: true,
        blockThirdPartyCookies: false 
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    else if (request.action === "toggleBlockThirdPartyCookies") {
        chrome.storage.sync.get('blockThirdPartyCookies', (data) => {
            const pageStatus = !data.blockThirdPartyCookies;
            //allow'= the default browser 
            const settingBlock = {
              true : "block",
              false : "allow"
            };
            const settingValue = settingBlock[pageStatus];
          
            chrome.contentSettings.cookies.set({
                primaryPattern: "<all_urls>", 
                setting: settingValue,
                scope: "third_party" 
            }, () => {
                chrome.storage.sync.set({ blockThirdPartyCookies: settingBlock }, () => {
                    const statusBlock = {
                      true: "ENABLED",
                      false: "DISABLED"
                    };
                    console.log("Third-party block ${statusBlock[settingBlock]}")
                    sendResponse({ blockThirdPartyCookies: settingBlock });
                });
            });
        });
        return true; // sendResponse called asynchronously
    }
});
