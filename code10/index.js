function genaretpassword( passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbols){
    const  lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const UpercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symboleChars="!@#$%^&*()_+=";

    let allowedChars="";
    let password="";

    allowedChars+=includeLowercase?  lowercaseChars:"";
    allowedChars+=includeUppercase?  UpercaseChars :"";
    allowedChars+=includeNumber?  numberChars:"";
    allowedChars+=includeSymbols?  symboleChars :"";
    if(passwordLength<=0){
        return " password incorecte";
    }
    else if(allowedChars.length===0){
        return " i ned to selected un charactre;"
    }
    else{
        for(let i=0;i<passwordLength;i++){
            const random=Math.floor(Math.random()*allowedChars.length);
            password+=allowedChars[random];
           }
           return password;
    }
   
    
}

const passwordLength=12;
const includeLowercase=false;
const includeUppercase=true;
const includeNumber=true;
const includeSymbols=false;

const password=genaretpassword( passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumber,
                                includeSymbols
                                );
console.log(`Generated password :${password}`);