const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const btn = document.querySelector(".btn");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");

let ts=0;
let tm=0;
let th=0;
function updateTime(){
    interval = setInterval(()=>{
        if(ts>60){
            ts=0
            tm++
            if(tm>60){
                tm=0
                th++
            }
            if(th>12){
                th=0;
                tm=0;
                ts=0;
            }
        }
        let up=ts++
        sec.innerText = up;
        min.innerText = tm;
        hour.innerText = th;
    },1000);
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    ts=0;
    tm=0;
    th=0;
    updateTime();
}
btn.addEventListener("click",updateTime);
btnStop.addEventListener("click",stopTimer);
btnReset.addEventListener("click",resetTimer);
