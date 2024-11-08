/**prendo i valori degli imput */
const eventForm =document.getElementById("form-biglietto")
const userImput = document.getElementById("username");
const kmImput = document.getElementById("km");
const ageImput = document.getElementById("eta");
const showTiket = document.getElementById("result");
const prezzo = 0.21;

/**prendo i valori dell'imput */

const userOutput = document.querySelector(".user");
const tipoBigliettoOut = document.querySelector(".tipo-di-biglietto");
const numCarrozOut = document.querySelector(".n-carrozza");
const codeOut = document.querySelector(".code");
const prezzoOut = document.querySelector(".prezzo-finale");


/**callbackfunction */

eventForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    showTiket.classList.remove("d-none");
    const nameValue = userImput.value.trim();
    const kmValue = parseInt(kmImput.value.trim());
    const ageValue =parseInt(ageImput.value);

    const unsaleTiket = tiketprize(kmValue, prezzo);
    let finalTiket = 0
    let fasciaSconto = "";
    if(ageValue ===1){
        finalTiket = unsaleTiket - (unsaleTiket * 0.2);
        fasciaSconto = "Biglietto Scontato"
    }
    if(ageValue ===2){
        finalTiket = unsaleTiket;
        fasciaSconto = "Biglietto standard"
    }
    if(ageValue === 3){
        finalTiket = unsaleTiket - (unsaleTiket * 0.4);
        fasciaSconto = "Biglietto super scontato, sei vecchio!"

    }

    userOutput.innerHTML = nameValue;
    tipoBigliettoOut.innerHTML = fasciaSconto;
    numCarrozOut.innerHTML = randomizzatore(1, 10);
    codeOut.innerHTML = randomizzatore (10000, 99999);
    prezzoOut.innerHTML = finalTiket.toFixed(2);



})


function tiketprize(distanza, prezzo){
    const costo = distanza * prezzo;
    return costo;
}

function randomizzatore(max, min) {
    const numeroTemporaneo = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroTemporaneo
}