let accountDetails1 = {
    username: "helloworld2",
    age: 24,
    rollno: 3546
}
    
let accountDetails2 = accountDetails1

accountDetails1.age = 46

console.log(accountDetails1.age)
console.log(accountDetails2.age)