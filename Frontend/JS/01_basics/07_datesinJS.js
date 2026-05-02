// Date is propsal from Temporial 

let  myTime = new Date() // object and instances
console.log(myTime)
//
console.log(myTime.toString()) 


console.log(myTime.toDateString())
console.log(myTime.toLocaleString())


const myCreatedDate = new Date(2006,6,15,12,0)
console.log(myCreatedDate.toDateString()) // My DOB

const myCreatedDate2 = new Date("2006-06-15")
console.log(myCreatedDate2.toDateString()) // My DOB


// Timestamp 


let myDOB = new Date("2006-06-15")
let myTimestamp = Date.now()
console.log(myTimestamp)
//  to get the anser in sconds

console.log(myDOB.getTime())
console.log(myDOB.getTime())

