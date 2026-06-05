// Arrays in JS.

const MyArr = [0,1,2,3,4,5]
console.log(MyArr[0]);
console.log(typeof MyArr[0])

const superheros = ["hanuman", "thor", "ironman"]
console.log(superheros[1])



const MyArr2 = new Array(1,2,3,4)
console.log(MyArr2[1]) // Indexing start from 0 here.


// Deep Copy and Shallow Copy


// Arrays Methods:- push,pop,unshift

MyArr2.push(6)
MyArr2.push(7)
console.log(MyArr2)
MyArr2.pop(7)
console.log("Elements is going to poped....")
console.log(MyArr2)

MyArr2.unshift(9) // add the element in the beginning
MyArr2.shift() // remove the element in the beginning
console.log(MyArr2)

// join() --> convertss the array into string type from array type.

const newArr = MyArr2.join()
console.log(newArr)
console.log(typeof newArr)

// Slice and Splice



