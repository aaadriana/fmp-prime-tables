import generatePrimes from "./scripts/generatePrimes.js";
import generateTable from "./scripts/generateTable.js";

const form = document.querySelector("#form");
const input = document.querySelector("#number");

form.addEventListener("submit", formSubmit);
input.focus();

function formSubmit(e) {
  e.preventDefault();
  const t0 = performance.now();

  // get the list of generated primes
  const primeList = generatePrimes(parseInt(input.value));

  // generate the table and add it to the HTNML
  const tableContent = generateTable(primeList);

  // add the table to HTML
  if (tableContent !== "") {
    document.querySelector("#result").innerHTML = tableContent;
  }

  const t1 = performance.now();
  console.log(`Performance: ${t1 - t0}ms`);
}
