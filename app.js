// import functions and grab DOM elements
const newGoblin = document.getElementById('new-goblin');
const addGoblin = document.getElementById('add-goblin-button');
// let state
let goblinArray = [];
// set event listeners 
addGoblin.addEventListener('click', () => {
    let goblinObject = {
        name: newGoblin.value,
        HP: Math.ceil(Math.random() * 5)
    };
    goblinArray.push(goblinObject);
});
console.log(goblinArray);