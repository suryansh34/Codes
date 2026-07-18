// genrela approach

// fetch('https://something.com').then().catch().finally()

// Q and bluebird lib of js --> their is no use , bcoz node.js gives us.

const promiseOne = new Promise(function(resolve,reject) {
    // Do an async task
    // DB Calls, crpytography related, network related
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },2000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
    
})
.then((myusername) => {
    console.log(myusername);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "Surya", password: "Surya@123"})
        }else{
            reject('ERROR: JS went wrong.')
        }
    },2000)
});

// promiseFive.then()

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);       
    }
    
    
}

consumePromiseFive();

// async function getAllUsers(){
//       try {
          
          
//           const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //   console.log(response);
//         const data = await response.json()
//         console.log(data); 
        
//       } catch (error) {
//         console.log("E: ",error);
        
//       } 
// }
// getAllUsers()


// another approach of writing the code 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))
