
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');

let broomstickPath = "./images/broomstick.png";
let froggyPath = "./images/frog.png";
let closedDoorPath = "./images/door.png";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;



const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return true;
  } else {
    return false;
  }
}

const isFrog = (door) => {
  if (door.src === froggyPath) {
    return true;
  } else {
    return false;
  }
}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'Vous avez échappé à Kaladras, pour cette fois ! Tentez-vous la chance de nouveau ?';
  } else {
    startButton.innerHTML = "Kaladras est fort... Très fort... Osez-vous retentez votre chance ?";
  }

  currentlyPlaying = false;
}

const playDoor = (door) => {
 numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
     } else if (isFrog(door)) {
        gameOver();
     }
}

const randomFrogDoorGenerator = () => {
    let froggyDoor = Math.floor(Math.random() * numClosedDoors);
    if (froggyDoor === 0) {
        openDoor1 = froggyPath;
        openDoor2 = broomstickPath;
        openDoor3 = broomstickPath;
    } else if (froggyDoor === 1) {
        openDoor1 = broomstickPath;
        openDoor2 = froggyPath;
        openDoor3 = broomstickPath;
    } else if (froggyDoor === 2) {
        openDoor1 = broomstickPath;
        openDoor2 = broomstickPath;
        openDoor3 = froggyPath;
    }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Bonne chance ! ou... Bon courage';
    randomFrogDoorGenerator();
}

startRound();