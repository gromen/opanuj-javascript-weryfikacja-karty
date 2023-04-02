import { sumOfEvenNumbers, sumOfOddNumbers } from './cardNumberTransformations.js';
import cardName from './cardName.js';

export default function checkCardNumber(cardNumber) {
  if (typeof cardNumber !== 'number') {
    throw new Error('Invalid argument type. Card number should be a number');
  }

  const cardNumberReversed = cardNumber.toString().split('').reverse();
  const oddNumbersTotal = sumOfOddNumbers(cardNumberReversed);
  const evenNumbersTotal = sumOfEvenNumbers(cardNumberReversed);
  const isValidCardProvider = cardName(cardNumber) !== 'Nieprawidłowy';

  return (oddNumbersTotal + evenNumbersTotal) % 10 === 0 && isValidCardProvider
    ? `Karta Marcina ma poprawny numer. Wydał ją ${cardName(cardNumber)}.`
    : 'Nieprawidłowy';
}
