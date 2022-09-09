var randomWords = require('random-words');

var count = 10
var wordlist = randomWords(count)


console.log(wordlist)

function sort() {

}

function merge(left, right) {
    let output = []

    while (left.length > 0 && right.length) {
        if (compare(left[0], right[0], 0)) {
            output.push(left[0])
        } else {
            output.push(right[0])
        }
    }
    return output
}

function compare(left, right, letter) {
    if (left == right) {
        return true
    } else if (left.charCodeAt(letter) < right.charCodeAt(letter)) {
        return true
    } else if (left.charCodeAt(letter) > right.charCodeAt(letter)) {
        return false
    } else if (left.charCodeAt(letter) == right.charCodeAt(letter)) {
        return compare(left, right, letter + 1)
    }
}

var sortedwordlist = wordlist.sort()
console.log(sortedwordlist)

var left = ['poop', 'pee', 'beastie', 'shit', 'apple']
var right = ['balls', 'cock', 'peen', 'ass', 'testicles']

console.log(compare('test', 'another', 0))
console.log(merge(left, right, 0))