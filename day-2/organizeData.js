const organizeData = (passwords, callback) => {

    passwords.forEach(pw => {

        const hyphenIndex = pw.indexOf('-');
        const firstSpaceIndex = pw.indexOf(" ");
        const colonIndex = pw.indexOf(":");
        const lastSpaceIndex = pw.lastIndexOf(" ");

        const firstNumber = pw.slice(0, hyphenIndex);
        const secondNumber = pw.slice(hyphenIndex + 1, firstSpaceIndex);
        const letter = pw.slice(firstSpaceIndex + 1, colonIndex);
        const password = pw.slice(lastSpaceIndex + 1);

        callback(firstNumber, secondNumber, letter, password);

    });

};