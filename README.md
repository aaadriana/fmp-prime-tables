# Multiplication Table Of Prime Numbers

## Find My Past - Coding Exercise

![Screenshot](https://github.com/aaadriana/fmp-prime-tables/blob/main/img/Animation.gif?raw=true)

#### [Published here](https://aaadriana.github.io/fmp-prime-tables/)

### How to run

```
npm install
npm start
```

### How to run tests

```
npm run test
```

![Screenshot](https://github.com/aaadriana/fmp-prime-tables/blob/main/img/testScreenshot.png?raw=true)

### I'm pleased with

- The table UI. It's pretty easy to read and works with a large number of columns and rows
- Tests are not running in the browser. It felt heavy to run all those tests when the page loads
- The code structure feels easy to read and follow
- The use of `performance.now()` which shows the time it takes to generate the table

### If I had more time

- I'd try to make prime number generation more performant
- I'd add a loading spinner (I think that for N > 100 it would make a difference for the users)
- I'd try to use CSS-Grid for generating the table, instead of generating the HTML with template literal strings
