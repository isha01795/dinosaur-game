score = 0;
cross = true;

var audio = new Audio('mario.mp3');
var audioc = new Audio('abe yaar.mp3');
// var audioc = new Audio('ouch.mp3');
var audioj = new Audio('jump.mp3');
setTimeout(() => {
    audio.play();
}, 10);

document.onkeydown = function (e) {
    // console.log("Key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
             audioj.play();
        },0 )
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 1200);

    }


    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    monster = document.querySelector('.monster');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(monster, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(monster, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY);

    if (offsetX < 100 && offsetY < 40) {
        gameover.innerHTML = "GAME OVER!";
        monster.classList.remove('obstacle');
        audioc.play();
        setTimeout(() => {
            audio.pause();
        },0);
       
        setTimeout(() => {
            audioc.pause();
        }, 1800);
       

       
        dino = document.querySelector('.dino');
        dino.classList.add('fallDino');
    }
    else if (offsetX < 100 && cross) {
        score = score + 10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDuration = parseFloat(window.getComputedStyle(monster, null).getPropertyValue('animation-duration'));
            newDuration = aniDuration - 0.1;
            monster.style.animationDuration = newDuration + 's';
            // console.log("New animation duration: ", newDuration)
        }, 500);

    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}