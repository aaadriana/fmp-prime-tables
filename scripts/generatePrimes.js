// basic prime numbers generator
function generatePrimes(limit) {
  if (!Number.isInteger(limit)) return [];

  const primeNumbers = [];

  // we start from 2 because 2 is the first possible prime number
  let number = 2;
  while (primeNumbers.length < limit) {
    // we assume that all numbers are prime
    let isPrime = true;

    // we need to test what numbers are not prime numbers in order to ensure they do not end up in our array
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        // once we identify that dividing our number to the factor doesn't produce any remainder, it means that our number is not a prime number
        isPrime = false;

        // since our number is not prime, there's no need to continue looping through our for
        break;
      }
    }

    // we only add to our array if number is indeed prime
    if (isPrime) {
      primeNumbers.push(number);
    }

    number++;
  }

  return primeNumbers;
}

export default generatePrimes;
