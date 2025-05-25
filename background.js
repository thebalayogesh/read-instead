const blockedSites = ["instagram.com", "facebook.com", "x.com"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    const url = tab.url;
    if (blockedSites.some(site => url.includes(site))) {
      chrome.storage.local.get(["startTime"], (data) => {
        if (!data.startTime) {
          chrome.storage.local.set({ startTime: Date.now() });
        }
      });
    }
  }
});


console.log("Background script running");