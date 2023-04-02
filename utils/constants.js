const CARD = {
  MASTERCARD: {
    LENGTH: [16],
    PREFIXES: ['51', '52', '53', '54', '55'],
  },
  VISA: {
    LENGTH: [13, 16],
    PREFIXES: ['4'],
  },
  AMERICAN_EXPRESS: {
    LENGTH: [15],
    PREFIXES: ['34', '37'],
  },
};

export { CARD };
