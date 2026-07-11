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

console.log(`Total Price to Pay:   ${pricetoPay}`);