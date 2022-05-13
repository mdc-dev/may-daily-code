// May 1: Seven Boom
// /Acceptance Criteria: Create a function that takes an array of numbers and return "Boom!" 
// if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".


function sevenBoom(array) {
    var message = 'there is no 7 in the array';
    array.forEach(item => {
        item.toString().includes('7') ? message = 'Boom!' : message;
    });

    return message;
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]) 
// ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) 
// ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) 
// ➞ "Boom!"
// 97 contains the number seven.


// May 2 Oddish v Evenish
// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish 
// if the sum of all of its digits is even. If a number is Oddish, return "Oddish". 
// Otherwise, return "Evenish".

function oddishOrEvenish(number) {
    var array = number.toString().split('');
    let initialValue = 0
    array.forEach(num => {
        initialValue = initialValue + parseInt(num);
    })

    return initialValue % 2 === 0 ? 'Evenish' : 'Oddish'
}


oddishOrEvenish(43) 
// ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) 
// ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) 
// ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0