function basicOp(operation, value1, value2) {
    // return eval(`${value1}${operation}${value2}`)
    return eval(value1 + operation + value2)
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));