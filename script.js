// Author: John Paul Antonovich
function getSymbols() {
	let symbolFile = new XMLHttpRequest();
	symbolFile.open("GET", "symbols.txt", true);
	symbolFile.onreadystatechange = function() {
		if (symbolFile.readyState === 4) {
			if (symbolFile.status === 200 || symbolFile.status == 0) {
				let symbolText = symbolFile.responseText;
				alert(symbolText);
			}			
		}
	}
	symbolFile.send(null);
}

