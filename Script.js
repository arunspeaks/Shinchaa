// 🎂 SET YOUR DATE
let birthday = new Date("October 12, 2026 00:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let gap = birthday - now;

    let d = Math.floor(gap / (1000*60*60*24));
    let h = Math.floor((gap % (1000*60*60*24))/(1000*60*60));
    let m = Math.floor((gap % (1000*60*60))/(1000*60));
    let s = Math.floor((gap % (1000*60))/1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
},1000);

function startSurprise(){
    document.getElementById("bgMusic").play();
    window.location.href="story.html";
}

function openLetter(el){
    el.innerHTML="You are my forever & always 💖";
    launchFireworks();
}

// Simple Fireworks
function launchFireworks(){
    const canvas=document.getElementById("fireworks");
    if(!canvas) return;
    const ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    for(let i=0;i<100;i++){
        ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";
        ctx.beginPath();
        ctx.arc(Math.random()*canvas.width,
                Math.random()*canvas.height,
                3,0,Math.PI*2);
        ctx.fill();
    }
}
