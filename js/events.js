/**
 * JavaScript introduktion: 02
 * klasse: D2 
 * dato: 2018.02.08
 * lektioner: 6
 **/

/**
 * LISTER OG LOOPS
 **/

// repetition: en variabel
var foto = "foto.jpg";

// hvordan man skriver en liste (filer til et galleri)
var galleri = [
	"foto.jpg",
	"foto02.jpg"
]; // NB: skarpe parenteser!

// hvordan man kan lave et loop der printer alle elementer ud fra listen
var morgen = 0;
for (var i=0; i<galleri.length; i++) {
	//console.log( galleri[i] );
	visBillede( galleri[i] );
}

// hvordan man afvikler en serie af kommandoer med en funktion
function visBillede( billede ) {
	document.write(
		'<article>'
		+ '<img src="images/'
		+ billede
		+ '" alt="billede" width="200" height="*" class="mini">'
		+ '</article>'
	); // brug hellere css ...
}

//visBillede( "foto02.jpg" );
//visBillede( "foto.jpg" );

/** 
 * EVENTS
 * @url: https://www.w3schools.com/jsref/dom_obj_event.asp
 **/

// husk på CSS :hover 

// onclick (et eksempel på en event, mange andre er mulige)

// hvordan JavaScript kan vælge i DOM (dokument-objekt-modellen)

// EVENT og EVENTLISTENER
// hvordan man vælger et element i DOM 
// og tilføjer en eventlistener og
// hvordan man får en eventlistener til at fyre en funktion af
document.getElementById("etKlik").onclick = function() {
	console.log( "Nogen klikker" );
};

document.getElementById("minId").onclick = function() {
	console.log( "Nogen klikker" );
	document.getElementById("minId").innerHTML = visBillede( "foto.jpg" );
};


// her er den funktion, der startes:
function myFunction() {
    document.getElementById("etKlik").innerHTML = "<h1>Du klikker på mig nu! (clickevent)</h1>";
}

/*
KREATIV UDFORDRING: ANIMATION VIA CSS KLASSER TILFØJET MED JAVASCRIPT
Brug en eventlistener og onclick - eller en anden event.
Fremstil en animation for en CSS klasse.

tip: element.addClass ...
*/

// hvordan man IKKE skal gøre
// <button onclick="myFunction()">Click me</button>
// jammen, det virker jo ...
// htmf ... det er ikke elegant kode!


