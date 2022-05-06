export function renderGoblin(goblin) {
    const goblinList = document.createElement('div');
    const screamSound = document.getElementById('scream');
    // const goblinEmoji = document.createElement('p');
    // const goblinName = document.createElement('p');
    
    // goblinName.textContent = goblin.name; 
    // goblinEmoji.textContent = '😀';
    // goblinNam
    if (goblin.HP === 0) {
        goblinList.classList.add('dead');
        screamSound.play();
    }
    goblinList.textContent = `${goblin.name} with ${goblin.HP} HP`;

    // goblinList.append(goblinName, goblinEmoji);
    return goblinList; 
}
