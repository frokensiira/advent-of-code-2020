const rules = [ "byr", "iyr", "eyr" , "hgt", "hcl", "ecl", "pid" ];

const result = batch.filter(passport => rules.every(rule => passport.includes(rule)));

console.log('The number of valid passports are', result.length);

