export function renderGoblin(booger) {
    const goblinList = document.createElement('div');
    goblinList.textContent = `${booger.name} ${booger.HP}`;
    return goblinList; 
}