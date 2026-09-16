const checkEmptyObject = {}

if(Object.keys(checkEmptyObject).length === 0){
    console.log("Object is Empty");    
}

// ternary operator:
const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// switch case:

let month = 5;

switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febrauary");
        break;
    case 3:
        console.log("March");
        break;        
    case 4:
        console.log("April");
        break;        
    case 5:
        console.log("May");
        break;        
    case 6:
        console.log("June");
        break;        
}