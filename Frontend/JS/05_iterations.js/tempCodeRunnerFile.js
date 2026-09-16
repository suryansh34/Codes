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