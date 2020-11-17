// Author: John Paul Antonovich
let symbols;
let symbolSearchBar = document.getElementById("symbolSearch");

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

symbolSearchBar.addEventListener("keyup", function (event) {
	console.log('fadsfjadsf');


}, false);

window.onload = function () {
	getSymbols();
	console.log(symbols)
}