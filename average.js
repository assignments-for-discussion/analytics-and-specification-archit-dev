function average(numbers) {
  validNumbers = 0;
  sumOfValidNumbers = 0;
  for (let num = 0; num < numbers.length; num++) {
    //if numbers[num] is valid a number
    //include it in the average calculation
    if (!Number.isNaN(numbers[num])) {
      validNumbers += 1;
      sumOfValidNumbers += numbers[num];
    }
  }
  return sumOfValidNumbers / validNumbers;
}

module.exports = { average };
