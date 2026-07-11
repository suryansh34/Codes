// reduce() ---> used in online shopping sites. 


const myNums = [1,2,3]

// const TotalNums = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc}, currval: ${currval}`);
    
//     return acc + currval
// },0)

const TotalNums = myNums.reduce((acc,currval)=> acc + currval,0) // oneliner code using arrow function  

console.log(TotalNums);


// One more example:

const ShoppingCart = [
    {
        itemName: "JavaScript Course",
        price: 2999     
    },
    {
        itemName: "C Course",
        price: 1999     
    },
    {
        itemName: "WebD Course",
        price: 7999     
    },
    {
        itemName: "Data Science Course",
        price: 4999     
    }
]

const pricetoPay = ShoppingCart.reduce((acc,currval) => acc+ currval.price,0)

console.log(`Total Price to Pay:  ${pricetoPay}`);
