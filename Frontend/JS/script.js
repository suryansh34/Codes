// this works 
// let allH1 = document.querySelector('h1')
// allH1.style.backgroundColor = "red"

//
// let allH1 = document.querySelectorAll('h1')
// //this create a nodelist of all <h1> --> to use this we need to use this methods

// for (let i = 0; i < allH1.length; i++) {
//     allH1[i].style.backgroundColor = "red"
    
// }

// // using arrow function 
// document.querySelectorAll('h1').forEach(h1=>{
//     h1.style.backgroundColor = "yellow"
// })

let h1 = document.createElement('h1')

h1.innerHTML = "This is JS"
// body me h1 child jo create hua hai usko append karega 
document.body.appendChild(h1)
