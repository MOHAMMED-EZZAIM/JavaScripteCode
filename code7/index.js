// let nbr=prompt("enter un nomber");
// let min=1;
// let max=100;
// let conteur=0;
// let random=Math.round(Math.random()*100)+1;
// console.log(random);
// let ok=true;
// while(ok){
//  if(isNaN(nbr)){
//     nbr=prompt("plaise enter un nomber");
//  }
//  else if(nbr>max ||  nbr<min){
//     nbr=prompt(`plaise enter un nombre entre ${min} - ${max}`);
//  }
//  else{
//     if(nbr==random){
//      ok=false;
//      console.log(`you are rigth corret !!! le nomber est : ${nbr}`);
//     }
//     else{
//         nbr=prompt(`plaise enter un nombre   `);
//     }
//  }
    
// }

let email=prompt("enlter email ?");
function isemail(email){
    return email.includes("@") ? true : false;
}

console.log("this is a email :"+isemail(email));