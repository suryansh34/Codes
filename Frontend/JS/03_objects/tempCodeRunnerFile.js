let c = 300


if(true){
    let a = 10
    const b = 20
    let c = 30
    console.log("This is local scope")
    console.log("INNER: ",c)
}
console.log("This is global scope")
console.log(c);