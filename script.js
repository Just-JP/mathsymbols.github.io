// Author: John Paul Antonovich
let symbols;
let symbolSearchBar = document.getElementById("symbolSearch");
let mainForm = document.getElementById("mainForm");
let symbolList = document.getElementById("symbols");

function getSymbols() {
	let symbolFile = new XMLHttpRequest();
	symbolFile.open("GET", "symbols.txt", true);
	symbolFile.onreadystatechange = function() {
		if (symbolFile.readyState === 4) {
			if (symbolFile.status === 200 || symbolFile.status == 0) {
				let symbolText = symbolFile.responseText;
				symbols = symbolText.split("\n");
			}			
		}
	}
	symbolFile.send(null);
}

mainForm.addEventListener("submit", function (event) {
	event.preventDefault();

	for (let i; i < symbols.length; i++) {
		if (symbols[i].search(symbolSearchBar.innerText)) {
			console.log("fadsfadsf");
		}
	}

}, false);

window.onload = function () {
	getSymbols();
	console.log(symbols)
}