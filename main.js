import {options} from './config.js'

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        document.getElementById('quote').innerHTML = '\"'+response.content+'\"';
        document.getElementById('author').innerHTML = '~ ' + response.originator.name + ' ~'; 
    })
    .catch(err => console.error(err));