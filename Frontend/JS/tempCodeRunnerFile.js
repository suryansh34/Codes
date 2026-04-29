const mySymbol = Symbol('1,2,3')
console.log(typeof mySymbol)

const yourSymbol = Symbol('1,2,3')
console.log(typeof yourSymbol)

console.log(mySymbol == yourSymbol)