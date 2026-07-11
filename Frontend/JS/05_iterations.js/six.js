const myNumbers = [1,2,3,4,5,6,7,8,9,0]

// const newNums = myNumbers.map((number)=> number + 10)

// chaining ---> using multiple methods at once 

const newNums = myNumbers
                .map((number)=> number * 10)
                .map((number)=> number + 2)
                .filter((number)=> {return number > 30})

console.log(newNums);



