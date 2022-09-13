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
	merge(sort(split(answers,1)),sort(split(answers,2)));
	process.exit();
    } else {
	answers.push(data.toString().trim());
	ask();
	
    }
    
});



function split(array, whichHalf){
    const half = array.length/2
    if (array.length < 2) {
	return array
    }
    const right= array.splice(half,half + 1)
    const left = array.splice(0,half)
    if (whichHalf == 1) {
	process.stdout.write(left[0])
	return left
    } else {
	return right
    }
}

function sort(array) {
    const output = []
    var left = 0
    var right = 1
    while (left < array.length && right < array.length) {
	if (compare(array[left],array[right],0)) {
	    output.push(array[left])
	    if (left < right) {
		left = right + 1
	    } else {
		left += 1
	    }
	} else {
	    output.push(array[right])
	    process.stdout.write(output[0])
	    if (right > left) {
		right += 1
	    } else {
		right = left + 1
	    }
	}
    }
    if (left < right) {
	output.push(array[left])
	
    }else{
	output.push(array[right])
	
    }

    for (let i = 0; i < output.length; i++) {
	process.stdout.write(output[i])
	if (i + 1 < output.length) {
	    process.stdout.write(', ')
	}
    }
}


function merge(left, right) {
    let output = []
    var leftWord = 0
    var rightWord = 0 
    while (left.length > 0 && right.length > 0) {
        if (compare(left[leftWord], right[rightWord], 0)) {
            output.push(left[leftWord])
	    leftWord += 1
	    
        } else {
            output.push(right[rightWord])
	    rightWord += 1
        }
    }
    for (let i = 0; i < output.length; i++) {
	    process.stdout.write(output[i])
	    if (i + 1 < output.length) {
		process.stdout.write(', ')
	    }
	}
}


function compare(left, right, letter) {
    if (left == right) {
        return true
    } else if (left.charCodeAt(letter) < right.charCodeAt(letter)) {
	process.stdout.write("true")
        return true
    } else if (left.charCodeAt(letter) > right.charCodeAt(letter)) {
	process.stdout.write("false \n")
        return false
    } else if (left.charCodeAt(letter) == right.charCodeAt(letter)) {
	process.stdout.write("same")
        return compare(left, right, letter + 1)
    }
    
}

ask();
//var sortedwordlist = wordlist
//console.log(sortedwordlist)
