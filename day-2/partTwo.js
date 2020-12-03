let newValidPasswords = 0;

const newCheckPasswords = (firstPosition, secondPosition, letter, password) => {

    if(password.includes(letter)) {

        if(((password.charAt(firstPosition - 1) === letter) && (password.charAt(secondPosition - 1) !== letter)) || ((password.charAt(firstPosition - 1) !== letter) && (password.charAt(secondPosition - 1) === letter))){
            newValidPasswords++;
        }

    } else {
        return;
    }
}

organizeData(passwords, newCheckPasswords);

console.log('newValidPasswords', newValidPasswords);