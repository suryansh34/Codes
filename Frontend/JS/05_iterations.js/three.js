// there is 3D library known as three.js 
// the high order loop we will dicuss will be of array based

// for of loop

// const myArray = [2,3,4,5]

// for (const num of myArray) {
//     console.log(num);   
    
// }

// forof string 
const greeting = "Hello Beta"

for (const greet of greeting){
    if(greet === " "){
        continue     
    }
    // console.log(greet);
    
    
}


// Maps

const map = new Map();
map.set("Brother", "Member_1")
map.set("Brother2", "Member_2")
map.set("Mother", "Member_3")
map.set("Father", "Member_5")
// map.set("Father", "Member_4") // this will print , although have different value of line 32.


// console.log(map);



for (const [key,value] of map) {
    console.log(key,value);

        
}

const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'

}

for (const [key,value] of myObj) {
    console.log(key,value);
}

// from these we know map is iterable not object in forof loop , there is another methods ( forin loop)

const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    py : 'Python',
    csharp : 'C#',
    html : "Hypertext Markup Language"

}

for (const key in myObj) {
    console.log(`${myObj[key]} shortcut is : ${key}`);   // particualr key ka object kya hoga  
}



// forin loop for arrays

const animal = ["dog","bandar","hathi","cat","mouse","tiger","lion"]

for (const key in animal) {
    
    console.log(animal[key]);  
    
    
}
// ++++++++++++++++++++++++++++*******************+++++++++++++++++++++++++++++++++++++++ //

const animal = ["dog","bandar","hathi","cat","mouse","tiger","lion"]

for (const key in animal) {
    
    console.log(key);  // this will print index , not the key  ( search why? )
    
    
}


//            ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

const map = new Map();
map.set("Brother", "Member_1")
map.set("Brother2", "Member_2")
map.set("Mother", "Member_3")
map.set("Father", "Member_5")


for (const key in map) {
    console.log(key);   // doesnot give any output beacause map is uniterable 
}  
    

// 

// what we have ----> we have accessed value of key of object of array 
const myObject = [
    {
        "Javascript" : "js",
        

    },
    {
        "Python" : "py",
        
    },
    {
        "MongoDB" : "md",
        
    },
    {
        "Ruby" : "rb"
    }
]

myObject.forEach((item) => {
    console.log(item);
    
})