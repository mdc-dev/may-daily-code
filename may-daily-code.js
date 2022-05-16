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


oddishOrEvenish(43); 
// ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373);
// ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433);
// ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0


// May 3 Calculate the Total Price of Groceries
// Create a function that takes an array of objects (groceries) which calculates the total price and 
// returns it as a number. A grocery object has a product, a quantity and a price

function getTotalPrice(array) {
    let totalCost = 0;
    array.forEach(groceryObj => {
        totalCost = totalCost + (groceryObj.price * groceryObj.quantity)
    })

    return parseFloat(totalCost.toFixed(1))
}


// 1 bottle of milk:
getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
  ]) 
//   ➞ 1.5
  
  // 1 bottle of milk & 1 box of cereals:
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]) 
//   ➞ 4
  
  // 3 bottles of milk:
  getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
  ]) 
//   ➞ 4.5
  
  // Several groceries:
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]) 
//   ➞ 10.4
  
  // Some cheap candy:
  getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
  ]) 
//   ➞ 0.3

// May 4 Burglary Series (15): Number of Occurrences 
// To further increase the statistical knowledge of your fight, count the number of times 
// a certain adjective was used. Given an object that contains several adjectives as values, 
// return a new object where you count the ocurrences of each adjective.

function countNumberOfOccurrences(object) {
    let occurrencesObj = {};
    let array = Object.values(object)
    array.forEach(insult => {
        if(!Object.keys(occurrencesObj).includes(insult)) {
            occurrencesObj[insult] = 1
        } else {
            occurrencesObj[insult] ++;
        }
    })

    return occurrencesObj;
}

countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
  }) 
//   ➞ { moron: 2, scumbag: 1, idiot: 2 }
  
  
  countNumberOfOccurrences({
    a: "moron",
    b: "moron",
    c:"moron"
  }) 
//   ➞ { moron: 3 }
  
  
  countNumberOfOccurrences({
    a: "idiot",
    b: "scumbag"
  }) 
//   ➞ { idiot: 1, scumbag: 1 }

// May 5 Pronouncing the X's
// Create a function which replaces all the x's in the string in the following ways:
// Replace all x's with "cks" UNLESS:
// The word begins with "x", therefore replace it with "z".
// The word is just the letter "x", therefore replace it with "ecks".

function xPronounce(string) {
    let wordArray = string.split(' ');
    let newArray = [];
    wordArray.forEach(word => {
        if(word.includes('x') || word.includes('X')) {
            let lettersArr = word.split('');
            if (lettersArr.length === 1) {
                newArray.push('ecks')
            } else if (lettersArr[0] == 'x') {
                lettersArr[0] = 'z'
                newArray.push(lettersArr.join(''))
            } else {
                let newWord = ''
                lettersArr.forEach(letter => {
                    if (letter === 'x' || letter === 'X') {
                        newWord += 'cks';
                    } else {
                        newWord += letter
                    }
                })
                newArray.push(newWord)
            }
        } else {
            newArray.push(word)
        } 
    });

    return newArray.join(' ');
}



xPronounce("Inside the box was a xylophone") 
// ➞ "Inside the bocks was a zylophone"

xPronounce("The x ray is excellent") 
// ➞ "The ecks ray is eckscellent"

xPronounce("OMG x box unboxing video x D") 
// ➞ "OMG ecks bocks unbocksing video ecks D"

// May 6 Who Left The Array
// You are given two arrays. The elements in arr1 threw a party and started to mix around. However, 
// one of the elements got lost! Your task is to return the element which was lost.

function missing(array1, array2) {
    let missingItem = array1.find((item, i) => item !== array2[i])
    return missingItem;
}

missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) 
// ➞ 2

missing([true, true, false, false, true], [false, true, false, true]) 
// ➞ true

missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]) 
// ➞ "ugly"

// May 7 Weekly Salary
// Write a function that takes a list of hours and returns the total weekly salary.
// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate, regardless how many hours 
// were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, 
// but on a weekend it would pay 160+60 = $220.

function weeklySalary(hours) {
    let totalPay = 0;
    for (let i = 0; i < 5; i++) {
        const day = hours[i];
        if(day > 8) {
            totalPay += 80;
            totalPay += (day - 8) * 15
        } else {
            totalPay += day * 10
        }
    }
    for (let i = 5; i < hours.length; i++) {
        const day = hours[i];
        if(day > 8) {
            totalPay += 160
            totalPay += (day - 8) * 30
        } else {
           totalPay += day * 20 
        }
    }

    return totalPay
}

weeklySalary([8, 8, 8, 8, 8, 0, 0]) 
// ➞ 400

weeklySalary([10, 10, 10, 0, 8, 0, 0]) 
// ➞ 410

weeklySalary([0, 0, 0, 0, 0, 12, 0]) 
// ➞ 280


// May 8 Burglary Series (22): Sign All
// You finally receive the entire stolen list document from the police. You need to sign at the end of the 
// document but also each sub-list corresponding to each room in your house where the items were stolen.
// You are given two arguments, one object with nested objects and a string that corresponds to your name. 
// The object already contains several signature properties, one on the root, the others on each nested 
// object. Return an object with all containing signature values set to your name.

function signAll(obj, name) {
    const keys = Object.keys(obj);
    keys.forEach(key => {
        if(key === 'signature') {
            obj[key] = name;
        } else {
            obj[key].signature = name;
        }
    })
    return obj
}

const obj = {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
  };

signAll(obj, "Rocky") 
// ➞ {
//     kitchen: {
//       painting: 100,
//       piano: 1000,
//       signature: "Rocky",  // changed
//     },
//     bathroom: {
//       stereo: 220,
//       signature: "Rocky",  // changed
//     },
//     signature: "Rocky",  // changed
// }


// May 9 Find First Character That Repeats
// Create a function that takes a string and returns the first character that repeats. 
// If there is no repeat of a character, return "-1".

function firstRepeat(word) {
    const lettersArray = [];
    let repeatedLetter;
    let wordArray = word.split('')
    wordArray.forEach(letter => {
        if(lettersArray.includes(letter) && !repeatedLetter) {
            repeatedLetter = letter;
        } else {
            lettersArray.push(letter)
        }
    });

    return repeatedLetter ? repeatedLetter : -1
}

// firstRepeat("legolas") 
// ➞ "l"

// firstRepeat("Gandalf") 
// ➞ "a"

// firstRepeat("Balrog") 
// ➞ "-1"

// firstRepeat("Isildur") 
// ➞ "-1"
// Case sensitive "I" not equal to "i"

firstRepeat('Galadriel')

firstRepeat('pippin')

// May 10 Count The Lone Ones
// Create a function which counts how many lone 1s appear in a given number. Lone means the number 
// doesn't appear twice or more in a row.

function countLoneOnes(number) {
    const workingArray = number.toString().split('');
    let count = 0;
    workingArray.forEach((num, i) => {
        if(num === '1' && workingArray[i - 1] !== '1' && workingArray[i + 1] !== '1') {
            count ++;
        }
    })

    return count
}

countLoneOnes(101) 
// ➞ 2

countLoneOnes(1191) 
// ➞ 1

countLoneOnes(1111) 
// ➞ 0

countLoneOnes(462) 
// ➞ 0


// May 11 Check If The Brick Fits Through The Hole
// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and 
// returns true if this brick can fit into a hole with the width(w) and height(h).

function doesBrickFit(a,b,c,w,h) {
    const holeSize = w * h;
    const brickLong = a * c;
    const brickShort = a * b;

    return brickShort <= holeSize || brickLong <= holeSize ? true : false
}


doesBrickFit(1, 1, 1, 1, 1) 
// ➞ true

doesBrickFit(1, 2, 1, 1, 1) 
// ➞ true

doesBrickFit(1, 2, 2, 1, 1) 
// ➞ false


// May 12 Censored Strings
// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, 
// I've been able to find the vowels that were removed. Given a censored string and a string of the censored 
// vowels, return the original uncensored string.

function uncensor(phrase, vowels) {
    const splitPhrase = phrase.split('');
    let vowelsArray = vowels.split('')
    let newArray = []
    splitPhrase.forEach(letter => {
        if (letter === '*') {
            newArray.push(vowelsArray[0]);
            vowelsArray.shift()
        } else newArray.push(letter)
    })

    return newArray.join('');
}

uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") 
// ➞ "Where did my vowels go?"

uncensor("abcd", "") 
// ➞ "abcd"

uncensor("*PP*RC*S*", "UEAE") 
// ➞ "UPPERCASE"

// May 13 The Frugal Gentleman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. 
// However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman 
// (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection 
// of two or more wines, he will always buy the second-cheapest.
// Given an array of wine objects, write a function that returns the name of the wine he will buy for the 
// party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

function chosenWine(wineList) {
    let prices = wineList.map(wine => {
        return wine.price;
    });

    if(wineList.length === 0) {
        return null
    } else if (prices.length === 1) {
        let result = wineList.find(wine => {
            return wine.price === prices[0]
        });
        return result.name
    } else {
        let chosenPrice = prices.sort((a, b) => a - b)[1]
        let result = wineList.find(wine => {
            return wine.price === chosenPrice
        });
        return result.name
    }
    
}

chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) 
// ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) 
// ➞ "Wine A"

chosenWine([]) 
// ➞ null


// May 14 Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings 
// that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(array) {
    const numbersArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let results = []
    array.forEach(item => {
        let arr = item.split('');
        arr.forEach(letter => {
            numbersArr.includes(letter) && !results.includes(item) ? results.push(item) : letter;
        })
    });
     return results
}

numInStr(["1a", "a", "2b", "b"]) 
// ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) 
// ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) 
// ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) 
// ➞ ["test1"]


// May 15 Temperature Converter
// Create a function that converts Celsius to Fahrenheit and vice versa.

function convert(temp) {
    let standard;
    let temperature = [];
    const numbersArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    temp.split('').forEach(item => {
        if(numbersArr.includes(item)) {
            temperature.push(item)
        } else if (item === 'F' || item == 'C') {
            standard = item;
        }
    })

    temperature = temperature.join('')

    if(standard !== 'F' && standard !== 'C') {
        return 'Error'
    } else {
        return standard === 'F' ? (parseInt(temperature) - 32) * 5/9 : (parseInt(temperature) * 9/5) + 32
    }
} 

convert("35°C") 
// ➞ "95°F"

convert("19°F") 
// ➞ "-7°C"

convert("33") 
// ➞ "Error"

