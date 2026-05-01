const name = new String("Suryansh")
// console.log(name)


const Balance = new Number(10000000)
// console.log(Balance)

// console.log(Balance.toString())
// console.log(Balance.toString().length)
// console.log(typeof Balance.toString())
// Balance2 = Balance.toFixed()
// console.log(Balance.toFixed(2))

//To Precision
const number = 100.440134
// console.log(number.toPrecision(5))

// to get teh hundreds of value in indian system

const num = 3257014
// console.log(num.toLocaleString('en-IN'))

// *************************--- Maths----*****************************

console.log(Math)

// Some Commonly used math function in js.

// console.log(Math.abs(-4))
// console.log(Math.round(4.2))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.5))
// console.log(Math.min(3,6,2,4))
// console.log(Math.max(3,6,2,4))

// Random function 
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

// concept of min and max

const min = 10
const max = 20

// to get the minimum value add min and for maximum value we should add max value 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + max)







