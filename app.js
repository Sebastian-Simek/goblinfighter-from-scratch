import { renderGoblin } from './utils.js';

const newGoblin = document.getElementById('new-goblin');
const addGoblin = document.getElementById('add-goblin-button');
const goblinList = document.getElementById('goblin-display');
const playerHPDisplay = document.getElementById('player HP');

let goblinArray = [];
let playerHP = 2;
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
        goblinOutput.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinList.appendChild(goblinOutput);
    } 
}

function goblinClickHandler(booger) {
    const randomNum = Math.random();
    if (booger.HP <= 0) return;
    if (playerHP === 0) return alert('you lose');
    if (randomNum < 0) {
        booger.HP--;
        alert('you have hit the goblin');
    } 
    if (randomNum > 0) {
        playerHP--;
        alert('you have missed');
        playerHPDisplay.textContent = `you have ${playerHP} HP`;
    }
    displayGoblin();
}
