// Aller chercher les 3 id -emplacements- de portes dans le fichier HTML
let doorImage1 = document.getElementById('door1') as HTMLImageElement;
let doorImage2 = document.getElementById('door2') as HTMLImageElement;
let doorImage3 = document.getElementById('door3') as HTMLImageElement;

// Aller chercher le bouton de départ dans le fichier HTML
let startButton = document.getElementById('start');

// Aller chercher les images à afficher une fois les portes ouvertes dans le dossier
let broomstickPath = "./images/broomstick.png";
let froggyPath = "./images/frog.png";

// Aller chercher l'image de la porte close dans le dossier
let closedDoorPath = "./images/door.png";


doorImage1.addEventListener('click', () => {
  doorImage1.src = broomstickPath;
});

// Variable de départ : toutes les portes sont closes
let numClosedDoors = 3;

// Variables pour les portes
let openDoor1;
let openDoor2;
let openDoor3;

// Jeu en cours : vrai initialement
let currentlyPlaying = false;


// fonction pour savoir si la porte a déja été ouverte
// si le src de la porte est celui de la porte close retourne vrai, sinon faux
function isClicked (door) {
  if (door.src === closedDoorPath) {
    return true;
  } else {
    return false;
  }
}

// fonction pour savoir si la grenouille est là
// si le src de la porte retourne l'image de la grenouille elle est vrai, sinon fausse
function isFrog (door) {
  if (door.src === froggyPath) {
    return true;
  } else {
    return false;
  }
}

// function game over
// si le status indique win, le bouton change de phrase
// s'il indique loose, également
// elle met également le jeu en pause en rendant faux au currently playing
function gameOver (status) {
  if (status === 'win') {
    startButton!.innerHTML = 'Vous avez échappé à Kaladras, pour cette fois ! Tentez-vous la chance de nouveau ?';
  } else if (status === 'loose') {
    startButton!.innerHTML = "Kaladras est fort... Très fort... Osez-vous retentez votre chance ?";
  }

  currentlyPlaying = false;
}

// fonction enlevant un nombre de porte ouverte à chaque fois
// si toutes les portes sont ouvertes = win
// mais s'il y a la grenouille = loose
function playDoor (door) {
 numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
     } else if (isFrog(door)) {
        gameOver('loose');
     }
}

// fonction pour générer la grenouille de manière aléatoire
function randomFrogDoorGenerator () {
    let froggyDoor = Math.floor(Math.random() * 2);
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

// au click sur l'image 1, 
// si currently playing est vrai 
// si la fonction is clicked renvoit que l'image n'a pas déjà été cliquée
// alors play door
// indique qu'une porte est ouverte
// vérifie si elles le sont toutes
// en cas de grenouille fait perdre
doorImage1!.addEventListener('click', () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1 = openDoor1;
    playDoor(doorImage1);
  }
})

// même chose avec la porte 2
doorImage2!.addEventListener('click', () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2 = openDoor2;
    playDoor(doorImage2);
  }
})

// même chose avec la porte 3
doorImage3!.addEventListener('click', () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3 = openDoor3;
    playDoor(doorImage3);
  }
})

// au click sur le bouton de départ
// si currently playing est faux, ça lance la fonction startround
startButton!.addEventListener('click', () => {
  if (currentlyPlaying === false) {
    startRound();
  }
})

// fonction qui démarre le jeu en mettant les portes fermées, 
// remettant le nombre de portes closes à 3
// indiquant currentlyplaying vrai
// indiquant un texte dans le bouton
// lanceant le générateur random de grenouille
function startRound () {
    openDoor1.src = closedDoorPath;
    openDoor2.src = closedDoorPath;
    openDoor3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton!.innerHTML = 'Bonne chance ! ou... Bon courage';
    randomFrogDoorGenerator();
}