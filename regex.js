const fs = require('fs');

const data = fs.readFileSync('C:/Users/nicosm/work/regex/test.txt', 'utf8');


function findEmail(){

    var numberOfEmails = data.match(/@softwire.com/g).length
    return numberOfEmails

}

console.log(findEmail())