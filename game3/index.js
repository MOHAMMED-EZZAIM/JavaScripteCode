const displaye=  document.getElementById("clock");
let timer=null;
let startTime=0;
let elapseTime=0;
let isRunning=false;

function starfunction(){
    if(!isRunning){
            startTime=Date.now()-elapseTime;
            timer=setInterval(update,10);
            isRunning=true;
    }
}

function stopfunction(){
    if(isRunning){
  clearInterval(timer);
  elapseTime=Date.now()-startTime;
  isRunning=false
    }
}

function restfunction(){
    clearInterval(timer);
   startTime=0;
   elapseTime=0;
   isRunning=false;
   displaye.textContent="00:00:00:00"
}
function update(){
  const currenTime=Date.now();
  elapseTime=currenTime-startTime;
  let hours=Math.floor(elapseTime/(1000*60*60));
  let minutes=Math.floor(elapseTime/(1000*60));
  let secounds=Math.floor(elapseTime/1000);
  let milliseconds=Math.floor(elapseTime%1000/10);
  hours=String(hours).padStart(2,"0");
  minutes=String(minutes).padStart(2,"0");
  secounds=String(secounds).padStart(2,"0");
  milliseconds=String(milliseconds).padStart(2,"0");
  displaye.textContent=`${hours}:${minutes}:${secounds}:${milliseconds}`
}