const fs = require('fs');

const data = fs.readFileSync('C:/Users/nicosm/work/regex/test.txt', 'utf8');

var count = 0
for (let i = 0; i<data.length - 13; i++){
    if (data.slice(i, i + 13) == "@softwire.com"){
        count += 1
    }
}
console.log(count)