function play(choice) {
    let options = [
        'paper',
        'scissors',
        'rock'
    ];
    let computer = options[Math.floor(Math.random() * 3)];
    let result = "NO WINNER -- TRY AGAIN";
    switch (choice) {
        case "paper":
            if (computer == "scissors") result = "YOU LOSE...HA-HA!";
            if (computer == "rock") result = "YOU WIN!!!!!!!!";
            break;
        case "scissors":
            if (computer == "rock") result = "YOU LOSE...HA-HA!";
            if (computer == "paper") result = "YOU WIN!!!!!!!!";
            break;
        case "rock":
            if (computer == "paper") result = "YOU LOSE...HA-HA!";
            if (computer == "scissors") result = "YOU WIN!!!!!!!!";
            break;
    }

    //alert(result);
    if (result == "YOU WIN!!!!!!!!") {
        document.getElementById("game-output").style.backgroundColor = "green";
    }
    else if (result == "YOU LOSE...HA-HA!"){
        document.getElementById("game-output").style.backgroundColor = "red";
    }
    else {
        document.getElementById("game-output").style.backgroundColor = "white";
    }
    document.getElementById("game-output").innerHTML = `<h1>Game Results:</h1><p>You played ${choice}<br>The computer played ${computer}</p><h2>${result}</h2}`
    
}