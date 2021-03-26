# RECYLINK-TEST

This is a Algorithm and Data Structure Questions test resolved.

### Composite function [Run here](https://replit.com/@JulioFS12/Composite-function#index.jss)
```js
    // Write a function called "rokket" which produces the following output when called:
    console.log(rokket(2)(5)(3)) // this outputs 30
    console.log(rokket(4)(2)(2)) // this outputs 16
    console.log(rokket(8)(2)(1)) // this also outputs 16
    // This function must work for any three integer numbers.
```

### Longest string [Run here](https://replit.com/@JulioFS12/Longest-String#index.js)
```js
    // Write a function called "rokket" which receives an array with several strings. It must output the longest (character length) string in the array.
    // Example:
    const list = ['best', 'company', 'ever']
    console.log(rokket(list)) // this outputs 'company'
```

### String repetition [Run here](https://replit.com/@JulioFS12/String-repetition#index.js)
```js
    // Write a function called "rokket" which receives a string A and an integer N and returns a new string with A repeated N times.
    // Example:
    console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
    console.log(rokket('abc', 2)) // this outputs 'abcabc'
```

### Only last names [Run here](https://replit.com/@JulioFS12/Only-last-names#index.js)
```js
    // Write a function called "rokket" which receives a list of names from a contact book. Each name is an object consisting of a first name and last name. Return a list that
    // shows only the last names.
    // Example:
    const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
    ]
    console.log(rokket(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']
```

### Unique numbers [Run here](https://replit.com/@JulioFS12/Unique-numbers#index.js)
```js
    // Write a function called "rokket" which receives two number arrays of any size. Return a list containing the intersection of the two arrays (all unique numbers in both
    // arrays).
    // Example:
    console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2]
    console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs []
```
## How to use?

1. Clone:
```ssh
    git clone https://github.com/JulioFS12/RECYLINK-TEST.git
```

3. Install modules
```ssh
    npm install
```
4. Ways to run
```ssh
    # Run all tests
    npm test

    # Run one test
    npm test <nametest>.test.js

    # Run coverage
    npm run test:coverage
```

