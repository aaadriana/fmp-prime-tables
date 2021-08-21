const button = document.querySelector("#submit");
const form = document.querySelector("#form");
const input = document.querySelector("#number");
input.focus();

// basic prime numbers generator
function primeGenerator(limit) {
  if (typeof limit !== "number") return [];

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

function renderTable(list) {
  if (!Array.isArray(list)) return "";
  if (!list.length) return "";
  if (list.some((el) => typeof el !== "number")) return "";

  var result = "<table><tr><td class='sticky-column sticky-row'>x</td>";

  // our table needs to have n+1 columns and n+1 rows; I'm adding a dummy '0' at the beginning of this array in order to achieve this
  list.unshift(0);

  list.forEach((i) => {
    list.forEach((j) => {
      if (i === 0 && j > 0) {
        result += `<td class='sticky-row'>[${j}]</td>`;
      }

      if (j === 0 && i > 0) {
        result += `<td class='sticky-column'>[${i}]</td>`;
      }

      if (i > 0 && j > 0) {
        result += `<td>${i * j}</td>`;
      }
    });
    result += "</tr>";
  });

  result += "</table>";

  return result;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const t0 = performance.now();

  // get the list of generated primes
  const primeList = primeGenerator(input.value);

  // render the table
  const result = renderTable(primeList);

  const t1 = performance.now();
  console.log(`Performance: ${t1 - t0}ms`);

  // add the table to the HTML
  document.querySelector("#result").innerHTML = result;
});
