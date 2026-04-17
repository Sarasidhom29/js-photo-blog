 //@ts-check
'use strict';

const API_URL = 'https://lanciweb.github.io/demo/api/pictures/';


const msgCaricamento = document.querySelector('#msg-caricamento');
const msgErrore = document.querySelector('#msg-errore');


if(msgCaricamento !== null && msgErrore !== null){
    msgCaricamento.innerHTML ='Caricamento';
    
    fetch(API_URL)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
        
    })
    .catch(error => {
        console.error(error); 
        msgErrore.innerHTML = 'Si è verificato un errore';  
    })
    .finally(() => {
        msgCaricamento.innerHTML = '';
    })
}
    