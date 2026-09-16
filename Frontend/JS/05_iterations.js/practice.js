for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(i);
}

// for of loop
const greeting = "Hello Beta";

for (const greet of greeting) {
  if (greet === " ") continue;
  console.log(greet);
}

// map
const map = new Map();

map.set("Brother","Member1");
map.set("Father","Member2");

for(const [key,value] of map){
  console.log(key,value);
}

// for in 
const myObj = {
  js: "Javascript",
  cpp: "C++",
  py: "Python"
};

for (const key in myObj) {
  console.log(`${myObj[key]} shortcut is : ${key}`);
}


// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);
console.log(newNums);

// filter with arrays of object

const books = [
  { name: "1984", year: 1949 },
  { name: "The Great Gatsby", year: 1925 },
  { name: "Pride and Prejudice", year: 1813 },
  { name: "The Hobbit", year: 1937 },
  { name: "The Alchemist", year: 1988 },
  { name: "Harry Potter", year: 1997 },
  { name: "To Kill a Mockingbird", year: 1960 }
];

const filterBooks = books.filter((a) => a.year > 1950);
console.log(filterBooks);

//map() -- transform data
const myArray = [3,5,8,9,2,6];

const newArray = myArray.map((a)=> a * 10);
console.log(newArray);

// chaining
const result = myArray
  .map((a)=> a * 10)
  .map((a)=> a+2)
  .filter((a) => a > 50)
console.log(result);


// reduce

const myArray2 = [3,5,8,9,2,6];

const reduce = myArray2.reduce((acc,val)=> acc + val , 0)
console.log(reduce); // 33

//  shopping cart
const shoppingCart = [
  {
    itemName: "Mobile", price: 28184
  },
  {
    itemName: "Laptop", price: 397233
  }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0);
console.log(priceToPay);




    



