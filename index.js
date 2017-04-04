
function StackSort (array, compFn) {
  var arr = array.slice()
  var compareFn = compFn ? compFn : function (a, b) { return a - b }
  var stack = []
  while (arr.length !== 0) {
    var element = arr.pop()
    var tempStack = []
    while (compareFn(stack[stack.length - 1], element) > 0) tempStack.push(stack.pop())
    stack.push(element)
    while (tempStack.length > 0) stack.push(tempStack.pop())
  }
  return stack
}

module.exports = StackSort
