// Opvragen van de grote H1

var el = document.getElementById("mainTitle");
var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
var hfontSize = parseFloat(style); 

el.style.hfontSize = (hfontSize + 1) + "px";

// Varianbelen die rekenen

var hLineHeight 	= (hfontSize * 1.1);
var hMargin		 	= (hLineHeight * 0.5);
var pLineHeight 	= (hLineHeight * 1);
var pFontSize 		= (hfontSize * 0.6);
var pMargin		 	= (hLineHeight * 0.5);
	

// Functie die de grote van de H1 verwerkt en daarmee p bepaald

function myFunction() {
	document.getElementById("mainTitle").style.fontSize = mainTitle + "px";
	document.getElementById("mainTitle").style.lineHeight = hLineHeight + "px";
	document.getElementById("mainTitle").style.margin = hMargin + "px 0";
	
	var paragraphs = document.getElementsByTagName("p");
	
	for (var i = 0; i<paragraphs.length; i++){
		paragraphs[i].style.lineHeight = pLineHeight  + "px";
		paragraphs[i].style.fontSize = pFontSize  + "px";
		paragraphs[i].style.margin = pMargin  + "px 0";
	}
	
	//console.log(pFontSize);
}

myFunction();