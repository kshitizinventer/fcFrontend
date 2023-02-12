chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("here");
  //   if (changeInfo.status == "complete") {
  //     if (tab.url.includes("youtube")) {
  //       console.log("inside the background service");
  //       chrome.tabs.create({ url: "popup.html" });
  //     }
  //   }
});
