export function renderGoblin(booger) {
    const goblinList = document.createElement('div');
    goblinList.textContent = `${booger.name} has ${booger.HP} HP`;
    if (booger.HP === 0) 
        goblinList.classList.add('dead'); 
    return goblinList; 
}
