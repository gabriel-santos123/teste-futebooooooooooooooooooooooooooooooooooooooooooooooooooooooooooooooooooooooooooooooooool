const player = document.getElementById('player');
const enemy = document.getElementById('enemy');
const gameContainer = document.getElementById('gameContainer');

let playerX = 50;
let playerY = 50;
const playerSpeed = 5;

function movePlayer(event) {
    switch (event.key) {
        case 'ArrowUp':
            playerY -= playerSpeed;
            break;
        case 'ArrowDown':
            playerY += playerSpeed;
            break;
        case 'ArrowLeft':
            playerX -= playerSpeed;
            break;
        case 'ArrowRight':
            playerX += playerSpeed;
            break;
    }

    // Update player position
    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;
}

document.addEventListener('keydown', movePlayer);
