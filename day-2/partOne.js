let validPasswords = 0;

const checkPasswords = (min, max, letter, password) => {
    
    if(password.includes(letter)) {
        let occurance = 0;
        
        for(let i = 0; i < password.length; i++){
            if(letter === password[i]) {            
                occurance++;               
            }
        }

        if(occurance >= min && occurance < max || occurance > min && occurance <= max){
            validPasswords++;
        }

    } else {
        return;
    }

}

//organizeData(passwords);

/* passwords.forEach(pw => {

    const hyphenIndex = pw.indexOf('-');
    const firstSpaceIndex = pw.indexOf(" ");
    const colonIndex = pw.indexOf(":");
    const lastSpaceIndex = pw.lastIndexOf(" ");

    const min = pw.slice(0, hyphenIndex);
    const max = pw.slice(hyphenIndex + 1, firstSpaceIndex);
    const letter = pw.slice(firstSpaceIndex + 1, colonIndex);
    const password = pw.slice(lastSpaceIndex + 1);

    checkPasswords(min, max, letter, password);

}); */

//console.log(validPasswords);


