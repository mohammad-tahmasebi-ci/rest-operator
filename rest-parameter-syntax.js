/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

/*
// Regular function call 
let sumAll = (a, b, c) => a + b + c;
console.log(sumAll(1, 2, 3));

// Extra arguments are ignored
console.log(sumAll(1, 2, 3, 4, 5));

// Function using ...rest
let sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let total = sumRest(1, 2, 3, 4, 5, 6);
console.log(total);
*/

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);
const updateSortReverse = (arr, ...letters) => {
    let result = [...arr];
    for (let letter of letters) {
        result.push(letter);
    }
    result.sort();
    result.reverse();
    return result;
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);