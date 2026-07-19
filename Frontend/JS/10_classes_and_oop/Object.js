function multipleby5(num){
    return num*5
}

multipleby5.power = 2

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);


function createUSer(username,score){
    this.username = username
    this.score = score
}

createUSer.prototype.increment = function(){
    this.score++
}

createUSer.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUSer("chai",25)
const tea = createUSer("tea",250)

chai.printMe()