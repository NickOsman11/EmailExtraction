const fs = require('fs');

const data = fs.readFileSync('C:/Users/nicosm/work/regex/test.txt', 'utf8');


function findEmail(){

    domains = data.match(/@[A-Za-z0-9-]*(\.[A-Za-z0-9-]*)+/g)
    uniqueDomains = [... new Set(domains)]
    domainDictionary = {}

    for (let i = 0; i < uniqueDomains.length; i++){
        var currentDomain = uniqueDomains[i]
        var numberOfOccurances = domains.filter(x => x == currentDomain).length
        domainDictionary[currentDomain] = numberOfOccurances
    }

    return domainDictionary
}

console.log(findEmail())