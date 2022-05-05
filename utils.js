export function renderGoblin(booger) {
    const goblinList = document.createElement('div');
    goblinList.textContent = `${booger.name} has ${booger.HP} HP`;
    return goblinList; 
}
