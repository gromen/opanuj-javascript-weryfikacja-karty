function sumOfEvenNumbers(numbers) {
  return numbers
    .map((number, index) => {
      if (index % 2 == 0) {
        return +number;
      }
    })
    .filter((number) => number !== undefined) // TODO remove undefined values in different way
    .reduce((total, number) => {
      return total + number;
    }, 0);
}

function sumOfOddNumbers(numbers) {
  return numbers
    .map((digit, index) => {
      let number = digit;
      if (index > 0 && index % 2) {
        number = digit * 2;
        return number.toString();
      }
    })
    .filter((number) => number !== undefined) // TODO remove undefined values in different way
    .map((number) => number.split(''))
    .flat()
    .map(Number)
    .reduce((total, number) => total + number);
}

export { sumOfEvenNumbers, sumOfOddNumbers };
