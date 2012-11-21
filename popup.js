	function returnfunc(){
	alert("function returned to popup!");
	<!-- do stuff to change page on return from background.js -->
	}
	function addText(terms) {
		
		console.log(terms);
		//var text = terms.join(",<br>");
		//console.log(text);
		console.log("got text");
		var container = document.getElementById("found");
		container.innerHTML = "";
		var blue = '#B9CCED';
		var color = blue;
		var termOL = document.createElement("ol");
		termOL.style.padding = "0px";
		console.log(container);
		for (var i = 0; i < terms.length; i++) {
			var div = document.createElement("div");
			div.appendChild(document.createTextNode(terms[i]));
			div.style.padding = '0px 5px';
			div.style.backgroundColor = color;
			if (color == blue) {
				color = 'white';
			} else {
				color = blue;
			}
			termOL.appendChild((document.createElement("li")).appendChild(div));
			
		}
		container.appendChild(termOL);
	}
	function main() {

		console.log("listener added");
		var bg = chrome.extension.getBackgroundPage();
		chrome.tabs.query({active:true, currentWindow:true}, function (tab) {
		bg.searchPage(tab[0].id);
		});
		console.log("after");
    }
	

	document.addEventListener('DOMContentLoaded', function () {
		console.log("popup onload");
		main();
	});
