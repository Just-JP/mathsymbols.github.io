// Author: John Paul Antonovich

"use strict";
let symbols;
let symbolSearchBar = document.getElementById("symbolSearch");
let mainForm = document.getElementById("mainForm");
let symbolList = document.getElementById("symbols");
let noResultText = document.getElementById("noResultText");

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
	let searchText = symbolSearchBar.value;

	symbolList.innerHTML = "";
	noResultText.innerText = "";


	for (let i = 0; i < symbols.length; i++) {
		if (symbols[i].search(searchText) != -1 && searchText != "") {
			let newListItem = document.createElement("li");
			let node = document.createTextNode(symbols[i]);
			newListItem.appendChild(node);
			symbolList.appendChild(newListItem);	
		}
	}

	if (symbolList.innerHTML == false) {
		noResultText.innerText = "Looks like your search found nothing";
	}

}, false);

window.onload = function () {
	getSymbols();
	console.log(symbols);
}