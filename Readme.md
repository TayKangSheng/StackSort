
# StackSort

StackSort is a simple sorting algorithm implemented with stacks.

```
var StackSort = require('StackSort')

var toSort = [5, 2, 3, 1, 8]

var sorted = StackSort(toSort)

```

## Installation
```
$ npm install stacksort
```

## Examples
#### Sorting Integer arrays
``` javascript
var toSort = [3, 2, 1, 8, 5]

// Ascending order
StackSort(toSort)
// Descending order
StackSort(toSort, function(a, b){
  return b - a
})
```

#### Sorting Alphabets arrays
``` javascript
const Alphabets = 'abcdefghijklmnopqrstuvwxyz'
var toSort = ['d', 'c', 'b', 'a', 'e']

// Ascending order
StackSort(toSort, function (a, b) {
  return Alphabets.indexOf(a) - Alphabets.indexOf(b)
})
// Descending order
StackSort(toSort, function (a, b) {
  return Alphabets.indexOf(b) - Alphabets.indexOf(a)
})
```

## Documentation

### Stacksort( array [, compareFn] )

StackSort takes in an `array` as the first argument, an optional comparison function as the second argument, and returns the sorted array.  

If no comparison function is provided, the comparison function defaults to the following:
```
function (a, b) {
  return a - b
}
```

## Test
```
$ npm install
$ npm test
```
