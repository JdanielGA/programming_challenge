function monsterChosenByThePlayer() {
    // Get the monster chosen by the player
    var monsters = document.getElementsByName('monster');
    for (var i = 0; i < monsters.length; i++) {
        let monsterName = document.getElementById("player-monster-name");
        if (monsters[i].checked) {
            monsterName.innerHTML = monsters[i].value;
            monsterChosen = true;
            monsterChosenByTheComputer();
            break;
        }
    }
    if (!monsterChosen) {
        alert('You have not chosen a monster!');
    }

}

let monsterSelectorButton = document.getElementById("button-monster");
monsterSelectorButton.addEventListener("click", monsterChosenByThePlayer);

function monstersList () {
    var monstersNames = [];
    var monster = document.getElementsByName('monster');
    for (var i = 0; i < monster.length; i++) {
        monstersNames.push(monster[i].value);
    }
    return monstersNames;
}

function monsterChosenByTheComputer() {
    // Get the monster chosen by the computer
    var monsters = monstersList();
    var chosenMosterBtyPC = document.getElementById("enemy-monster-name");
    chosenMosterBtyPC.innerHTML = monsters[Math.floor(Math.random() * monsters.length)];
}