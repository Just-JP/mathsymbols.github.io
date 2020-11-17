// Author: John Paul Antonovich
let symbols;

function getSymbols() {
	let symbolFile = new XMLHttpRequest();
	symbolFile.open("GET", "symbols.txt", true);
	symbolFile.onreadystatechange = function() {
		if (symbolFile.readyState === 4) {
			if (symbolFile.status === 200 || symbolFile.status == 0) {
				let symbolText = symbolFile.responseText;
				symbols = symbolText;
			}			
		}
	}
	symbolFile.send(null);
}

function searchSymbols() {
	alert('You are searching');
}

window.onload = function () {
	getSymbols();
}