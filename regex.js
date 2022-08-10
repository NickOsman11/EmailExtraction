const fs = require('fs');

const data = fs.readFileSync('C:/Users/nicosm/work/regex/test.txt', 'utf8');


function findEmail(){

    var numberOfDomains = data.match(/@[A-Za-z0-9-]*(\.[A-Za-z0-9-]*)+/g).length
    return numberOfDomains

}

console.log(findEmail())