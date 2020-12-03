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

organizeData(passwords, checkPasswords);

console.log('validPasswords', validPasswords);


