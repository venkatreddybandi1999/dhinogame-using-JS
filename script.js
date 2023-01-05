let score=0;
let cross=true;
audio=new Audio('musicc.mp3');
audiogo=new Audio('gameover.mp3');
setInterval(()=>{
    audio.play()
},1000)

document.onkeydown=function(e){
    // console.log(e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classlist.add(".animate-dino");
        setTimeout(()=>{
            dino.classlist.remove('.animate-dino')
        },7000)
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=(dinoX+112)+"px";
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=(dinoX-200)+"px";
    }
}

setInterval(()=>{
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));
    offsetX=Math.abs(dx-ox)
    offsetY=Math.abs(dy-oy);
    // console.log(offsetX,offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameover.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleani')
        audiogo.play();
        audio.pause();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            // console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scorecount.innerHTML = "Your Score: " + score
}
    
