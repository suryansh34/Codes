// Concating 

// let name = "Suryansh"
// let repoCount = 2


//This type of writing is outdated 
// console.log("My name is: "+name+", my repo count is: "+repoCount+"")

// This is modern type of writing we use back text in which we take string interpolation, for this we inject in the back ticks sign.


// have methods name.To --> study further
// console.log(`Hello my name is ${name}, My Repo Count is ${repoCount} `)

const name = new String("SURYANSH"); /*  */
console.log(name[3]) // we can access each element 
console.log(name.__proto__) 
console.log(name.length) 
// console.log(name.toUpperCase()) // it doesnot changes the original value of the key.
console.log(name.charAt('S')) // 
console.log(name.substring(1,4)) // inside substring defines start and end index.
console.log(name.slice(-7,-4)) // this is the same manner in negative indexing.


// Trim in String:-  removes starting and end spaces

const name = "  s  u  r  y  a   "
console.log(name)
console.log(name.trim())

// Replace is the string methods
const url = "https://google.com/suryansh%20sahu"

console.log(url.replace('%20','-'))

console.log(url.includes('google'))


