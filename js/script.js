function monsterChosenByThePlayer() {
    // Get the monster chosen by the player
    var monsters = document.getElementsByName('monster');
    for (var i = 0; i < monsters.length; i++) {
        if (monsters[i].checked) {
            alert('You have chosen: ' + monsters[i].value + '!');
            break;
        }
        else {
            alert('You have not chosen a monster!');
        }
    }
}

let monsterSelectorButton = document.getElementById("button-monster");
monsterSelectorButton.addEventListener("click", monsterChosenByThePlayer);