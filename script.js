const button = document.querySelector("#submit");
const form = document.querySelector("#form");
const input = document.querySelector("#number");
input.focus();

// basic prime numbers generator
function primeGenerator(limit) {
  const primeNumbers = [];

  // we start from 2 because 2 is the first possible prime number
  let number = 2;
  while (primeNumbers.length < limit) {
    // we assume that all numbers are prime
    let isPrime = true;

    // we need to test what numbers are not prime numbers in order to ensure they do not end up in our array
    for (factor = 2; factor < number; factor++) {
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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const t0 = performance.now();
  const result = primeGenerator(input.value);
  const t1 = performance.now();
  console.log(`Performance: ${t1 - t0}ms`);
  document.querySelector("#result").textContent = result;
});
