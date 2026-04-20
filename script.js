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
            <img src="./img/pin.svg" alt="immagine pin">
            <img src="${card.url}" alt="immagine ${card.title}">
            <h2> ${card.title} </h2>  
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


if (msgCaricamento !== null && msgErrore !== null) {
    msgCaricamento.innerHTML = 'Caricamento';

    fetch(API_URL)
        .then(response => {
            return response.json();
        })
        .then(json => {
            creaCard(json);
        })
        .catch(error => {
            console.error(error);
            msgErrore.innerHTML = 'Si è verificato un errore';
        })
        .finally(() => {
            msgCaricamento.innerHTML = '';
        })
}
