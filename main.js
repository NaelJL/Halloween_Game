let doors = document.querySelector(".doors");
let imageDoorOne = document.querySelector(".door1");
let imageDoorTwo = document.querySelector(".door2");
let imageDoorThree = document.querySelector(".door3");
let startButton = document.querySelector(".start");

let images = [
    "images/broomstick.png",
    "images/broomstick.png",
    "images/frog.png"
]

let numClosedDoors = 3;
let closedDoorPath = "images/door.png";
let broomstickPath = "images/broomstick.png";
let froggyPath = "images/frog.png";
let currentImageDoorOne = '';
let currentImageDoorTwo = '';
let currentImageDoorThree = '';
let gameInProgress = false;

function start () {
    imageDoorOne.src = closedDoorPath;
    imageDoorTwo.src = closedDoorPath;
    imageDoorThree.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Bonne chance ! ou... Bon courage';
    doors.style.display = "block";
    gameInProgress = true;
}

function isClicked (door) {
    if (door === closedDoorPath) {
      return false;
    } else if (door !== closedDoorPath) {
      return true;
    } else {
        alert('error with isClicked');
    }
}

function gameOver (status) {
    if (status === 'win') {
        startButton.innerHTML = "Tu as récupéré les trois balais, bien joué ! Retenteras-tu le sort ?";
    } else if (status === 'loose') {
        startButton.innerHTML = "Nooon... Kalabras t'as transformé-é en souris ! As-tu la force d'ouvrir à nouveau les portes ?";
    } else {
        alert('error with gameOver');
    }
    gameInProgress = false;
}

function playDoor (door) {
    numClosedDoors--;
       if (numClosedDoors === 0 && door !== froggyPath) {
           gameOver('win');
        } else if (door === froggyPath) {
            gameOver('loose');
        }
}

imageDoorOne.addEventListener('click', () => {
    if (gameInProgress && isClicked(imageDoorOne)) {
        let randomNumber = Math.floor(Math.random() * images.length);
        currentImageDoorOne = images[randomNumber];
        imageDoorOne.src = currentImageDoorOne;
        playDoor(currentImageDoorOne);
    }
})

imageDoorTwo.addEventListener('click', () => {
    if (gameInProgress && isClicked(imageDoorTwo)) {
        let randomNumber = Math.floor(Math.random() * images.length);
        currentImageDoorTwo = images[randomNumber];
        imageDoorTwo.src = currentImageDoorTwo;
        playDoor(currentImageDoorTwo);
    }
})

imageDoorThree.addEventListener('click', () => {
    if (gameInProgress && isClicked(imageDoorThree)) {
        let randomNumber = Math.floor(Math.random() * images.length);
        currentImageDoorThree = images[randomNumber];
        imageDoorThree.src = currentImageDoorThree
        playDoor(currentImageDoorThree);
    }
})