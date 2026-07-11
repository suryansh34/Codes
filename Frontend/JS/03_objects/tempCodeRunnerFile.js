// hoisting --> Hoisting in JavaScript means that declarations are conceptually moved to the top of their scope before code execution.
console.log(addTwo(2))

const addTwo  = function(num){
    return num + 2
}