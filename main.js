// prezzo base per km
const prezzoKm = 0.21

function Cliccato() {
const nome = document.getElementById('nome').value;
    console.log(nome);
    const eta = document.getElementById('eta').value;
    console.log(eta);
    const kmscelti = document.getElementById('kmscelti').value;
    console.log(kmscelti);
// prezzo base
    const costoBase = prezzoKm * kmscelti;
    console.log(costoBase);

    const etaNumero = parseInt(eta);
    console.log(etaNumero);
    const kmNumero = parseInt(kmscelti);
    console.log(kmNumero);
 }


 if (eta < 18) {
    const minorenne = (costoBase * 0.8).toFixed(2);
    console.log(minorenne);
    document.getElementById("tuoprezzo").innerText = nome + " " + "il tuo prezzo sarà: " + minorenne + "€";
    document.getElementById("tuatariffa").innerText = "Tariffa Junior 20% Sconto"
} else if (eta > 65) {
    const anziano = (costoBase * 0.6).toFixed(2);
    console.log(anziano);
    document.getElementById("tuoprezzo").innerHTML = nome + " " + "il tuo prezzo sarà: " + anziano + "€";
    document.getElementById("tuatariffa").innerHTML = "Tariffa Senior 40% Sconto"
    
} else if (eta >= 18 && eta <= 65) {
    const maggiorenne = costoBase.toFixed(2);
    console.log(maggiorenne);
    document.getElementById("tuoprezzo").innerHTML = nome + " " + "il tuo prezzo sarà: " + maggiorenne + "€";
    document.getElementById("tuatariffa").innerHTML = "Tariffa Adulto"  
}


var button = document.getElementById("myButton");
button.addEventListener("click", Cliccato);