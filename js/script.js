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

let playerMonsterAttack 

function attack1() {
    playerMonsterAttack = 'attack-1';
    alert(playerMonsterAttack);
}

function attack2() {
    playerMonsterAttack = 'attack-2';
    alert(playerMonsterAttack);
}

function attack3() {
    playerMonsterAttack = 'attack-3';
    alert(playerMonsterAttack);
}

function attack4() {
    playerMonsterAttack = 'attack-4';
    alert(playerMonsterAttack);
}

function playerAttack() {
    let buttonAttack1 = document.getElementById("attack-1");
    buttonAttack1.addEventListener("click", attack1)
    let buttonAttack2 = document.getElementById("attack-2");
    buttonAttack2.addEventListener("click", attack2)
    let buttonAttack3 = document.getElementById("attack-3");
    buttonAttack3.addEventListener("click", attack3)
    let buttonAttack4 = document.getElementById("attack-4");
    buttonAttack4.addEventListener("click", attack4)
}