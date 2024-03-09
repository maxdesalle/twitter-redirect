chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		return { redirectUrl: "https://tweetdeck.twitter.com" };
	},
	{ urls: ["*://twitter.com/"] },
	["blocking"]
);
