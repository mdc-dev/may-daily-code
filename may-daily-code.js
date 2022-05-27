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


// May 16 Frequency Distribution
// Create a function that returns the frequency distribution of an array. This function should return 
// an object, where the keys are the unique elements and the values are the frequency in which those 
// elements occur.

function getFrequencies(array) {
    let responseObj = {}
    array.forEach(num => {
        Object.keys(responseObj).includes(num) || Object.keys(responseObj).includes(num.toString()) ? responseObj[num] ++ : responseObj[num] = 1
    }) 

    return responseObj
}

// getFrequencies(["A", "B", "A", "A", "A"]) 
// ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) 
// ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) 
// ➞ { true: 2, false: 3 }

// getFrequencies([]) 
// ➞ {}



// May 17 Persistance
// The additive persistence of an integer, n, is the number of times you have to replace n with the sum of 
// its digits until n becomes a single digit integer. The multiplicative persistence of an integer, n, is the 
// number of times you have to replace n with the product of its digits until n becomes a single digit integer.
// Create two functions that take an integer as an argument and:
// Return its additive persistence.
// Return its multiplicative persistence.

function additivePersistence(number) {
    let count = 1
    const firstNumber = number.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    if(firstNumber.toString().length === 1) {
        return 0
    } else {
        function addDigits(num) {
            count ++
            return num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        }   
        let num = addDigits(firstNumber);
        num.toString().split('').length > 1 ? addDigits(num) : num
        return count
    }
}


function multiplicativePersistence(number) {
    let count = 1
    const firstNumber = number.toString().split('').reduce((a, b) => parseInt(a) * parseInt(b));
    if(firstNumber.toString().length === 1) {
        return 0
    } else {
        function multiplyDigits(num) {
            count ++
            let number = num.toString().split('').reduce((a, b) => parseInt(a) * parseInt(b));
            if (number.toString().split('').length > 1) {
                multiplyDigits(number);
            } else  {
                return count
            }
        }   
    }
    
    multiplyDigits(firstNumber)
}


// additivePersistence(1679583) 
// ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

// additivePersistence(123456) 
// ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

// additivePersistence(6) 
// ➞ 0
// Because 6 is already a single-digit integer.

multiplicativePersistence(77) 
// ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) 
// ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) 
// ➞ 0
// Because 4 is already a single-digit integer.


// May 18 Happy Numbers
// Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, 
// our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:
// 203 -> 13 -> 10 -> 1 -> 1
// Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.

// Not all numbers are happy. If we started with 11, the sequence would be:

// 11 -> 2 -> 4 -> 16 -> ...
// This sequence will never reach 1, and so the number 11 is called unhappy.
// Given a positive whole number, you have to determine whether that number is happy or unhappy.

function happy(num) {
    function breakdown(number) {
        const squaredArray = number.toString().split('').map(digit => {
            return digit * digit;
        });
        let total = squaredArray.reduce((a, b) => a + b, 0);

        if(total === 1) {
            return true
        } else if(total === 4) {
            return false;
        } else {
            breakdown(total)
        }
    };

    breakdown(num)
}

happy(203) 
// ➞ true

happy(11) 
// ➞ false

happy(107) 
// ➞ false

// May 19 Gauss's Addition
// Create a function that adds all the numbers together from 1 to n or, if two numbers are given: n to m. The input can be in any order.

function gauss(...nums) {
    let num;
    if(nums.sort((a, b) => a - b).length > 1) {
        num = nums[1] - nums[0] + 1;
        return (num / 2) * (nums[0] + nums[1]);
    } else {
        num = nums[0];
        return (num * (num + 1)) / 2;
    } 
}

gauss(100) 
// ➞ 5050 // From the video

gauss(5001, 7000) 
// ➞ 12001000 // Also ^^

gauss(1975, 165) 
// ➞ 1937770

// May 20 Headline Hashtags
// Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them 
// into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

function getHashTags(string) {
    let sorted = string.split(' ').sort((a, b) => b.length - a.length).slice(0, 3);
    return sorted.map(hash => {
        return '#' + hash;
    });
}

getHashTags("How the Avocado Became the Fruit of the Global Trade")
// ➞ ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// ➞ ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// ➞ ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
// ➞ ["#visualizing", "#science"] 


// May 21 Product of Digits Sums
// Create a function that takes one, two or more numbers as arguments and adds them together to get a 
// new number. The function then repeatedly multiplies the digits of the new number by each other, yielding 
// a new number, until the product is only 1 digit long. Return the final product.

function sumDigProd(...nums) {
    function reduceNum(num) {
        let arr = num.toString().split('');
        let newNum = arr.reduce((a, b) => parseInt(a) * parseInt(b));
        numCheck(newNum)
    }

    function numCheck(n) {
        if(n.toString().length > 1) {
            reduceNum(n)
        } else {
            return n;
        }
    }

    const number = nums.reduce((a, b) => a + b);
    numCheck(number)
}

sumDigProd(16, 28) 
// ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) 
// ➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) 
// ➞ 2


// May 22 Majority Vote
// Create a function that returns the majority vote in an array. A majority vote is an element that 
// occurs > N/2 times in an array (where N is the length of the array).

function majorityVote(array) {
    let countObj = {};
    array.forEach(item => {
        if(Object.keys(countObj).includes(item)) {
            countObj[item] = countObj[item] + 1;
        } else {
            countObj[item] = 1;
        }
    })

    let winner = Object.keys(countObj).sort((a, b) => b.value - a.value)[0];
    if(countObj[winner] / array.length > .5) {
        return winner
    } else {
        return null
    }
}

majorityVote(["A", "A", "B"]) 
// ➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) 
// ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) 
// ➞ null


// May 23 Remove the Last Vowel
// Write a function that removes the last vowel in each word in a sentence.

function removeLastVowel(string) {
    let wordArr = string.split(' ');
    let returnArr = wordArr.map(word => {
        let reverseWord = word.split('').reverse();
        let newWord = []
        let removed = false;
        reverseWord.forEach(letter => {
            let reg = /[aeiou]/;
            if(reg.test(letter)  && !removed) {
                removed = true;
            } else {
                newWord.push(letter)
            }
        });
        return newWord.reverse().join('')
    })

    return returnArr.join(' ');
}

removeLastVowel("Those who dare to fail miserably can achieve greatly.")
// ➞ "Thos wh dar t fal miserbly cn achiev gretly."

removeLastVowel("Love is a serious mental disease.")
// ➞ "Lov s  serios mentl diseas"

removeLastVowel("Get busy living or get busy dying.")
// ➞ "Gt bsy livng r gt bsy dyng"


// May 24 Find all Digits
// Taking each four digit number of an array in turn, return the number that you are on when 
// all of the digits 0-9 have been discovered. If not all of the digits can be found, return 
// "Missing digits!".

function findAllDigits(array) {
    const matchArr = ['0','1','2','3','4','5','6','7','8','9'];
    let ourDigits = [];
    let returnNum;

    array.forEach(num => {
        let numArr = num.toString().split('');
        numArr.forEach(number => {
            if(!ourDigits.includes(number)) {
                ourDigits.push(number);
            } 

            console.log(number, ourDigits.sort((a,b) => a - b), matchArr)
            if(ourDigits.includes(number) && ourDigits.sort((a,b) => a - b) === matchArr) {
            //    console.log('Match')
            }
        })
    });

    if(!returnNum) {
        // console.log("Missing Numbers")
    } else {
        // console.log(returnNum)
    }
}


// findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) 
// ➞ 5057
// digits found:  517-  4-38  29-6  -0

// findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) 
// ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

// findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) 
// ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing

// May 25 Calculate Combinations
// Create a function that takes a variable number of arguments, each argument representing the number 
// of items in a group. The function should return the number of permutations (combinations) of choices 
// you would have if you selected one item from each group.

function combinations(...nums) {
    let count = nums[0];
    for (let i = 1; i < nums.length; i++) {
        count = count * nums[i]
    }
    console.log(count)
}


combinations(2, 3) 
// ➞ 6

combinations(3, 7, 4) 
// ➞ 84

combinations(2, 3, 4, 5) 
// ➞ 120