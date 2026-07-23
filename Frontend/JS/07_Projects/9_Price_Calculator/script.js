// calculate the final price of product after discount and tax . the discount is applied first, and tax is calculated on the discounted price.

function calculateDiscount(price, discountPercent){

    return price - (price*(discountPercent/100)) 
}

function calculateTax(priceAfterDiscount, taxPercent){
    if(priceAfterDiscount>1000){

        return priceAfterDiscount * (taxPercent/100)
    }
    else {
        return 0;
    }
}

function calculatefinalPrice(priceAfterDiscount,taxAmount){
    return priceAfterDiscount + taxAmount
}


const originalPrice = 1500;
const  discount = 5;
const taxRate = 2;

const discountedPrice = calculateDiscount(originalPrice, discount)
const totalTax = calculateTax(discountedPrice, taxRate)
const finalPrice = calculatefinalPrice(discountedPrice, totalTax)

console.log("DiscountPrice: ",discountedPrice);
console.log("Total Tax: ",totalTax);
console.log("Final Price: ",finalPrice);
