/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let transactionsMap = new Map();
  for(let i = 0; i < transactions.length; i++){
    if(transactionsMap.has(transactions[i].category)){
      transactionsMap.set(transactions[i].category, transactionsMap.get(transactions[i].category) + transactions[i].price);
    } else {
      transactionsMap.set(transactions[i].category, transactions[i].price);
    }
  }
  let ans = []
  transactionsMap.forEach( (value, key) => {
    ans.push({category : key, totalSpent : value});
  })
  return ans;
}

module.exports = calculateTotalSpentByCategory;
