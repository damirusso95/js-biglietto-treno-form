// prendo i due input
const kmInput = document.getElementById('km');
const ageInput = document.getElementById('age');

const priceForm = document.querySelector('form');

priceForm.addEventListener('submit', function (eventoIntercettato) {
    eventoIntercettato.preventDefault();

    console.log('eventoIntercettato', eventoIntercettato);

    console.log('kmInput.value', kmInput.value);
    console.log('ageInput.value', ageInput.value);

    if (kmInput.value != '' && ageInput.value != '') {
        const costPerKm = 0.21;
        const basePrice = kmInput.value * costPerKm;
        console.log('Prezzo base biglietto:', basePrice);
        
        let finalPrice = basePrice;
        
        if (ageInput.value < 18) {
            console.log('Applico lo sconto del 20%');
        
            finalPrice = basePrice * 0.8;
            console.log('Prezzo scontato del 20%:', finalPrice);
        }
        else if (ageInput.value > 65) {
            console.log('Applico lo sconto del 40%');
        
            finalPrice = basePrice * 0.6;
            console.log('Prezzo scontato del 40%:', finalPrice);
        }
        
        console.log('Prezzo finale:', finalPrice.toFixed(2));

        document.getElementById('price-result').innerHTML = '€ ' + finalPrice.toFixed(2);
    }
    else {
        alert('Dati non validi');
    }
});