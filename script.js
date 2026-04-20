//@ts-check
'use strict';

const API_URL = 'https://lanciweb.github.io/demo/api/pictures/';

//chiamata id card-container
const cardContainer = document.querySelector('#card-container');

//funzione x creazione card
/**
 * @param {{id: number,
        title: string,
        date: string,
        url: string}[]} cards
 */
function creaCard(cards) {
    let cardCreate = '';

    //ciclo for of per iterazione (in base agli oggetti nell'API)
    for (const card of cards) {
        cardCreate += `
        <div class="card">
            <img src="./img/pin.svg" class="card-pin" alt="immagine pin">
            <img src="${card.url}" class="card-img" alt="immagine ${card.title}">
            <h2 class="card-title"> ${card.title} </h2>  
            <p class="card-text"> ${card.date} </p>
        </div>
        `
    }
    if(cardContainer !== null){
        cardContainer.innerHTML = cardCreate;
    }
};

//chiamata id x messaggi caricamento/errore
const msgCaricamento = document.querySelector('#msg-caricamento');
const msgErrore = document.querySelector('#msg-errore');

//if x tscheck
if (msgCaricamento !== null && msgErrore !== null) {
    msgCaricamento.innerHTML = 'Caricamento';
    //creazione promessa fetch
    fetch(API_URL)
        //estrazione contenuto promessa in json
        .then(response => {
            return response.json();
        })
        //restituzione contenuto seconda promessa
        .then(json => {
            creaCard(json);
        })
        //restituzione messaggio errore se presente
        .catch(error => {
            console.error(error);
            msgErrore.innerHTML = 'Si è verificato un errore';
        })
        //azione da svolgere in entrambi i casi (errore/successo)
        .finally(() => {
            msgCaricamento.innerHTML = '';
        })
}
