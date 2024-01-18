function rollDice(){
    const numberDice=document.getElementById("i1").value;
    const diceResult=document.getElementById("diceResult")
    const diceImages=document.getElementById("diceImages")
    const values=[];
    const images=[];
    for(let i=0;i<numberDice;i++){
        const value=Math.floor((Math.random()*6))+1;
        values.push(value);
        images.push(` <img src="img/${value}.png" >` );
    }
    diceResult.textContent=`dice :${values.join(' ')}`;
    diceImages.innerHTML=`${images}`;
}
//innerHTML  : le but est la posibilitie de changer le code html
//de west composante
//<div>-- ci en ecrire dans innerhtml ecrire ici--</div>
    
