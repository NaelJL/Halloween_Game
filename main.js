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

function start () {
    imageDoorOne.src = closedDoorPath;
    imageDoorTwo.src = closedDoorPath;
    imageDoorThree.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Bonne chance ! ou... Bon courage';
    doors.style.display = "block";
}

function isClicked (door) {
    if (door.src === closedDoorPath) {
      return false;
    } else if (door.src !== closedDoorPath) {
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
}

function playDoor (door) {
    numClosedDoors--;
       if (numClosedDoors === 0 && door.src !== froggyPath) {
           gameOver('win');
        } else if (door.src === froggyPath) {
            gameOver('loose');
        } else {
            alert('error with playDoor');
        }
}

imageDoorOne.addEventListener('click', () => {
    if (isClicked(imageDoorOne)) {
        let randomNumber = Math.floor(Math.random() * images.length);
        imageDoorOne.src = images[randomNumber];
        playDoor(imageDoorOne);
    }
})

imageDoorTwo.addEventListener('click', () => {
    if (isClicked(imageDoorTwo)) {
        let randomNumber = Math.floor(Math.random() * images.length);
        imageDoorTwo.src = images[randomNumber];
        playDoor(imageDoorTwo);
    }
})

imageDoorThree.addEventListener('click', () => {
    if (isClicked(imageDoorThree)) {
        let randomNumber = Math.floor(Math.random() * images.length);
        imageDoorThree.src = images[randomNumber];
        playDoor(imageDoorThree);
    }
})