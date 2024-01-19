function updateClock(){
    const now=new Date();
    let hours=now.getHours();
    const ok = hours>=12 ? "PM" : "AM";
    const minu=now.getMinutes();
    const seco=now.getSeconds();
    const timeString=`${hours}:${minu}:${seco} ${ok}`;
    document.getElementById("clock").textContent=timeString;

}

updateClock();
setInterval(updateClock,1000);// chaque 1s travail tout seul

//setTimeote() on fois faire telecharge de la page
//setInterval() travaill seul