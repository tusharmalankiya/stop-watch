
let sec = document.getElementById('second');
let min = document.getElementById('minute');
let milisec = document.getElementById('milisecond');
let ref;
let play = document.getElementById('playButton');
play.onclick = playWatch;
let pause = document.getElementById('pauseButton');
pause.onclick = pauseWatch;
let reset = document.getElementById('resetButton');
reset.addEventListener("click",resetWatch);
let countup = document.getElementById('countup');
let id;
let d;
let flag = 0;
let t;
function playWatch(){
    ref = Date.now() - flag;
    // setInterval(startWatch,1);
    play.style.display = "none";
    pause.style.display = "flex";
    id = setInterval(() => {
         t = Date.now() - ref;
        d = (t*6/1000);
        digitalStopWatch(t);
        milisec.style.transform = `rotate(${t}deg)`;
        min.style.transform = `rotate(${d/60}deg)`;
        sec.style.transform = `rotate(${d}deg)`;
    }, 1);
}

function startWatch(){
let t = Date.now() - ref;
    sec.style.transform = `rotate(${t*6/1000}deg)`;
}

function pauseWatch(){
    pause.style.display = "none";
    play.style.display="flex";
    clearInterval(id);
    flag = t;
}

function resetWatch(){
    clearInterval(id);
    milisec.style.transform = `rotate(${0}deg)`;
    sec.style.transform = `rotate(${0}deg)`;
    min.style.transform = `rotate(${0}deg)`;
    ref = 0;
    flag = 0;
    pause.style.display = "none";
    play.style.display="flex";
    countup.innerText = '00:00:00';
}

function digitalStopWatch(a){
    let ml = (a%100).toString();
    let s = (Math.floor((a/1000)%60)).toString();
    let m = (Math.floor(a/60000)).toString();
    let MM = m.padStart(2,'0');
    let SS = s.padStart(2,'0');
    let MS = ml.padStart(2,'0');
    let str = `${MM}:${SS}:${MS}`;
    countup.innerText = str;
}

// console.log(l);
// let id = setInterval(() => {
//     s = Date.now()-l;
//     console.log(s);
//     sec.style=`transform: rotate(${s*6/1000}deg);`;
//     clearInterval(id);
//     // s = s+1;
// },1);


// function toggle(){
//     if(check === 0){
//     document.getElementById('playButton').style.display='none';
//     document.getElementById('stopButton').style.display='flex';
//     check = 1;
//     }
//     else{
//     document.getElementById('playButton').style.display='flex';
//     document.getElementById('stopButton').style.display='none';
//     check = 0;
//     }
// }