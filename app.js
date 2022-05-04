import { renderGoblin } from './utils.js';

const newGoblin = document.getElementById('new-goblin');
const addGoblin = document.getElementById('add-goblin-button');
const goblinList = document.getElementById('goblin-display');

let goblinArray = [];
// set event listeners 
addGoblin.addEventListener('click', () => {
    let goblinObject = {
        name: newGoblin.value,
        HP: Math.ceil(Math.random() * 5)
    };
    goblinArray.push(goblinObject);
    displayGoblin();
});

function displayGoblin() {
    goblinList.textContent = '';
    for (let goblin of goblinArray){
        const goblinOutput = renderGoblin(goblin);
        goblinList.appendChild(goblinOutput);
    }
}

