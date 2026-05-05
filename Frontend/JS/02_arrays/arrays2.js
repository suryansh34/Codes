// Arrays some more methods --> isArray , from , of

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][0]) // not a=correct way to merge 

const all_heros = marvel_heros.concat(dc_heros)
console.log(typeof all_heros);

// Easiet way --> spread 

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

// to get array , if although it has array inside array.

const another_array =[1,2,3,[4,5,6,[7,8,9]]]
const real_another_array = another_array.flat(Infinity) // we use infinity to check all the possible arrays inside arrays 
console.log(real_another_array)

//is.Array

console.log(Array.isArray("Suryansh"))

// to make it array use from

console.log(Array.from("Suryansh"))
console.log(Array.from({name:"Suryansh"})) // an interescting case. , use to make arrays from keys and other things.


//
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3 ))