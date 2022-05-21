import { renderGoblin } from './utils.js';

const newGoblin = document.getElementById('new-goblin');
const addGoblin = document.getElementById('add-goblin-button');
const goblinList = document.getElementById('goblin-display');
const playerHPDisplay = document.getElementById('player HP');
const defeatedGoblins = document.getElementById('defeated-goblins');
const loserScreen = document.getElementById('explosion');
const loserScreen2 = document.getElementById('hidden');
const explosionSound = document.getElementById('explosion-sound');

let goblinArray = [{ name: 'Professor Oak', HP: 5 }, { name: 'Eddie', HP: 1 }];
console.log(goblinArray);
let playerHP = 1;
let goblinsSlain = 0;

displayGoblin();

// create a function to run renderGoblin. Run

addGoblin.addEventListener('click', () => {
    if (newGoblin.value === '') {
        let goblinObject1 = {
            name: `Goblin #${Math.ceil(Math.random() * 200)}`,
            HP: '1'
            // HP: Math.ceil(Math.random() * 5)
        };
        goblinArray.push(goblinObject1);
        return displayGoblin();
    }
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
        if (goblin.HP === 0){
            goblinArray.pop();
        }
        const goblinOutput = renderGoblin(goblin);
        goblinOutput.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinList.appendChild(goblinOutput);
    } 
}


function goblinClickHandler(booger) {
    const randomNum = Math.random();
    const randomNum2 = Math.random();
    // if (goblinsSlain > 2)
    //     alert('PowerBoost!!!');
    if (booger.HP === 0) return;
    if (randomNum < 1) {
        booger.HP--;
        alert(`you hit ${booger.name} !`);
        if (booger.HP === 0) {
            goblinsSlain++;
            defeatedGoblins.textContent = `You have slain ${goblinsSlain} goblin(s)`;
            return displayGoblin();
        }
    } else alert(`you missed ${booger.name}`);
    if (randomNum2 < .7) {
        alert(`${booger.name} hit you back`);
        playerHP--;
        playerHPDisplay.textContent = `you have ${playerHP} HP`;
        if (playerHP === 0) {
            alert('You Lose!');
            setTimeout(()=> {
                loserScreen.classList.add('backgrounds');
                loserScreen2.classList.add('hidden');
            }, '2300');
            explosionSound.play();
        }
    } else {
        alert(`${booger.name} missed!`);
    }
    if (booger.HP === 0) {
        goblinsSlain++;
        defeatedGoblins.textContent = `You have slain ${goblinsSlain} goblin(s)`;
    }
    displayGoblin();
}
