const organizeData = (passwords) => {

    passwords.forEach(pw => {

    const hyphenIndex = pw.indexOf('-');
    const firstSpaceIndex = pw.indexOf(" ");
    const colonIndex = pw.indexOf(":");
    const lastSpaceIndex = pw.lastIndexOf(" ");

    const firstPosition = pw.slice(0, hyphenIndex);
    //console.log('this is firstPosition', firstPosition);
    const secondPosition = pw.slice(hyphenIndex + 1, firstSpaceIndex);
    // const min = pw.slice(0, hyphenIndex);
    // const max = pw.slice(hyphenIndex + 1, firstSpaceIndex);
    const letter = pw.slice(firstSpaceIndex + 1, colonIndex);
    const password = pw.slice(lastSpaceIndex + 1);

    newCheckPasswords(firstPosition, secondPosition, letter, password);
    //checkPasswords(min, max, letter, password)

    });

}