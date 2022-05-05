import { renderGoblin } from './utils.js';

const newGoblin = document.getElementById('new-goblin');
const addGoblin = document.getElementById('add-goblin-button');
const goblinList = document.getElementById('goblin-display');
const playerHPDisplay = document.getElementById('player HP');
const defeatedGoblins = document.getElementById('defeated-goblins');

let goblinArray = [{ name: 'Professor Oak', HP: 7 }, { name: 'Eddie', HP: 4 }];
let playerHP = 10;
let goblinsSlain = 0;
// set event listeners 
displayGoblin();

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
    if (randomNum < 1) {
        booger.HP--;
        alert('you have hit the goblin');
    } 
    if (booger.HP === 0) {
        goblinsSlain++;
        defeatedGoblins.textContent = `You have slain ${goblinsSlain} goblin(s)`;
    }
    if (randomNum > 5) {
        playerHP--;
        alert('you have missed');
        playerHPDisplay.textContent = `you have ${playerHP} HP`;
    }
    displayGoblin();
}
