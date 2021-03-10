// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function ageToAbilities(age) {
    if (age >= 25) { return 'You can do pretty much anything.' }
    else if (age >= 18 && age <= 24) { return 'You can vote but not rent a car.' }
    else if (age >= 16 && age <= 17) { return 'You can drive but not vote.' }
    else {
        return 'You can\'t drive.'
    }
}

function oddIndices(arrayIndices) {
    let newArray = []
    for (let i = 1; i < arrayIndices.length; i++) {
        if (i % 2 !== 0) { newArray.push(arrayIndices[i]) }
    }
    return newArray
}

function numOddValues(arrayOdd) {
    let quantity = 0
    for (const num of arrayOdd) {
        if (num % 2 !== 0) { quantity = quantity + 1 }
    }
    return quantity
}

function averageStringLength(stringArr) {
    if (stringArr.length === 0) { return 0 }
    let letters = 0
    for (const word of stringArr) {
        for (const letter of word) { letters++ }
    }

    return letters / (stringArr.length)
}


function firstPunctuationIndex(stringArr) {
    for (const index in stringArr) {
        if (stringArr[index] === '!' || stringArr[index] === '.' || stringArr[index] === '?') { return Number(index) }
    }
    return -1
}

function getPlace(scoreArray, score) {
    let index = 1
    let place = ''
    for (const each of scoreArray) {
        if (score > each) {
            break;
        }
        index = index + 1
    }

    let indexToString = index.toString()
    if (indexToString[indexToString.length - 1] === '1') { place = 'st' }
    else if (indexToString[indexToString.length - 1] === '2') { place = 'nd' }
    else if (indexToString[indexToString.length - 1] === '3') { place = 'rd' }
    else { place = 'th' }

    return indexToString + place + ' place'
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
