#!/usr/bin/node
const randomWords = require('random-words');
const question = "Enter a word or press enter to stop";

var answers = [];

function ask() {
    process.stdout.write(question + '\n');
    process.stdout.write('  >  ');
}

process.stdin.on('data', function(data) {
    var response = data.toString().trim();
    if (response == "") {
	process.stdout.write('\nYour words were: ')
	for (let i = 0; i < answers.length; i++) {
	    process.stdout.write(answers[i])
	    if (i + 1 < answers.length) {
		process.stdout.write(', ')
	    }
	}
	process.stdout.write('\n');
	split(answers);
	process.exit();
    } else {
	answers.push(data.toString().trim());
	ask();
    }
    
});

ask();

function split(array){
    const half = array.length/2

    if (array.length < 2) {
	return array
    }

    const left = array.splice(0,half)
    process.stdout.write( merge(split(left),split(array)))
}
function sort() {

}

function merge(left, right) {
    let output = []

    while (left.length > 0 && right.length > 0) {
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

//var sortedwordlist = wordlist
//console.log(sortedwordlist)
