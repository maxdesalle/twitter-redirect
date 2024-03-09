chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  const url = new URL(details.url);
  if (url.hostname === "twitter.com") {
    chrome.tabs.update(details.tabId, {
      url: url.href.replace("twitter.com", "tweetdeck.twitter.com")
    });
  }
}, {url: [{hostEquals: 'twitter.com'}]});
