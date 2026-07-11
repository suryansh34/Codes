// for 

for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element);
    
    
}

//Printed Table from (0-10)
for (let i = 0; i <=10; i++) {
    console.log(`Inner loop: ${i}`);
    
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner loop: ${j} and Inner Loop: ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
        
        
        
        
    }
    
}


let myArray = ["one","two","three"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}


for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index === 5) {
        console.log(`Detected 5`);
        break        
    }
    console.log(`Value of i is: ${index}`);
    
    
}


for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index === 5) {
        console.log(`Detected 5`);  
        continue        //maaf kar do 5 ko
    }
    console.log(`Value of i is: ${index}`);
    
    
}



