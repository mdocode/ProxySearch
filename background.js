console.log("extension running");


// chrome.browserAction.onClicked.addListener(function(tab) {
  // chrome.tabs.executeScript(
      // null, {file: "content.js"});
// });

function searchPage(tabID){
	console.log("searching");
	console.log(tabID);
	chrome.tabs.executeScript(tabID, {file: "content.js"});
}

var terms;
chrome.extension.onMessage.addListener(
	function(request, send, sendResponse) {
		if (request.recipient == "background") {
			console.log("message arrived background"+request.terms + " " + request.recipient);
			console.log(chrome.extension.getViews({type: "popup"})[0].addText(request.terms));
			// chrome.extension.sendMessage({terms: request.terms, recipient: "popup"});
			// chrome.extension.sendMessage({recipient: "popup", terms: request.terms});
			// sendResponse({r: "received"});
			}
		});
// chrome.browserAction.onClicked.addListener(function(tab) {
  // chrome.tabs.executeScript(
      // null, {code:"document.body.style.background='red !important'"});
// });

