
function randInt (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randIntArray (length) {
  var temp = []
  for (var i = 0; i < length; i++) {
    temp.push(randInt(100, 0))
  }
  return temp
}

function randAlpha () {
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'
  return alphabets[randInt(25, 0)]
}

function randAlphaArray (length) {
  var temp = []
  for (var i = 0; i < length; i++) {
    temp.push(randAlpha())
  }
  return temp
}

// Test Codes

var assert = require('assert')
var StackSort = require('./index')

const Alphabets = 'abcdefghijklmnopqrstuvwxyz'
const NumOfTestCases = 100
const ArrayLength = randInt(100, 10)

console.log('--- Test cases (Alphabets) ---')

for (var i = 0; i < NumOfTestCases; i++) {
  let toSort = randAlphaArray(ArrayLength)

  let result = StackSort(toSort, function (a, b) { return Alphabets.indexOf(a) - Alphabets.indexOf(b) })
  let answer = toSort.sort(function (a, b) { return Alphabets.indexOf(a) - Alphabets.indexOf(b) })
  assert.deepEqual(result, answer, 'Alphabets array does not match.')
}

console.log('All Alphabets Test Passed')

console.log('--- Test cases (Integers) ---')

for (var j = 0; j < NumOfTestCases; j++) {
  let toSort = randIntArray(ArrayLength)

  let result = StackSort(toSort, function (a, b) { return a - b })
  let answer = toSort.sort(function (a, b) { return a - b })
  console.log(result)
  assert.deepEqual(result, answer, 'Integers array does not match.')
}

console.log('All Alphabets Test Passed')

console.log('All Test Passed')
