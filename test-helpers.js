function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `EXPECTED: \n${expected} \nAND RECEIVED: \n${actual}`;
    console.info("PASS: " + (message || defaultMessage));
  } else {
    const defaultMessage = `EXPECTED: \n${expected} \nBUT RECEIVED: \n${actual}`;
    console.error("FAIL: " + (message || defaultMessage));
  }
}

function arrayEqual(actual, expected, message) {
  const isEqual =
    actual.length == expected.length &&
    actual.every(function (element, index) {
      return element === expected[index];
    });

  if (isEqual) {
    const defaultMessage = `EXPECTED: \n${expected} \nAND RECEIVED: \n${actual}`;
    console.info("PASS: " + (message || defaultMessage));
  } else {
    const defaultMessage = `EXPECTED: \n${expected} \nBUT RECEIVED: \n${actual}`;
    console.error("FAIL: " + (message || defaultMessage));
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}
