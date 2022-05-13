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

