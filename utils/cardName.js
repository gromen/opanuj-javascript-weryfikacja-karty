import { CARD } from './constants.js';

export default function cardName(cardNumber) {
  cardNumber = cardNumber.toString();
  let providerName = 'Nieprawidłowy';

  for (const cardProvider in CARD) {
    const isValidLength = CARD[cardProvider].LENGTH.some((length) => length === cardNumber.length);
    const isValidPrefix = CARD[cardProvider].PREFIXES.some((prefix) => cardNumber.startsWith(prefix));

    if (isValidPrefix && isValidLength) {
      providerName = cardProvider;
    }
  }

  return providerName
    .split('_')
    .map((name) => {
      name = name.toLowerCase();

      return `${name[0].toUpperCase()}${name.substring(1)}`;
    })
    .join(' ');
}
