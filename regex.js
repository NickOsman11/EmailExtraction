const fs = require('fs');
// const request = require('request');
const readline = require('readline-sync');
// const data = request('http://www.google.com')
const data = fs.readFileSync('test.txt', 'utf8');

function getIntWithPrompt(prompt){

    console.log(prompt)
    var answer = Number(readline.prompt());
    while (!(Number.isInteger(answer))){
        console.log("That was not an integer, please try again")
        answer = Number(readline.prompt())
    }
    return answer
}


function createDomainDictionary(){

    var domains = data.match(/(?<=@)([A-Za-z0-9-]*)(?=(\.[A-Za-z0-9-]*)+)/g);
    var uniqueDomains = [... new Set(domains)];
    domainDictionary = {}
    uniqueDomains.forEach((domain) => (domainDictionary[domain] = domains.filter(x => x == domain).length));

    return domainDictionary
}


function sortDomainsByFrequency(dictionary){

    var domainArray = Object.keys(dictionary).map(key => {return [key, dictionary[key]]})
    console.log(domainArray)
    var domainArray = domainArray.sort((a, b) => b[1] - a[1])
    return domainArray
}


function getDomains(){
    
    var domainDictionary = createDomainDictionary();
    var sortedDomains = sortDomainsByFrequency(domainDictionary);
    console.log("The 10 most common domains are:")
    console.log(sortedDomains.slice(0, 10))

    var minFrequency = getIntWithPrompt("Enter a minimum frequency: ");
    domainsAboveMinFrequency = sortedDomains.filter(x => x[1] > minFrequency)
    console.log(domainsAboveMinFrequency)
}

function parsePhoneNumber(phonenumber){
    //    return phonenumber.match(/((+\d{1,2}\s)|0)(((\d{3})\s){2}(\d{4})|((\d{4})\s)(\d{6})))/g)
    if() phonenumber.match(/((\+\d{1,2}\s)|0)(((\d{3})\s){2}(\d{4})|((\d{4})\s)(\d{6}))/)

    }
    
console.log(parsePhoneNumber("+44 7403 036844"))
// getDomains()
