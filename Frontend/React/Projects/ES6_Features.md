# ES6 Features 
## We have created object mycar on class Car

```class Car{
    constructor(name){
        this.brand = name
    }
}

const mycar = new Car("Ford");
```
# Method in classes
## We can add our own method in class
```
class Car{
    constructor(name){
        this.brand = name;
    }

    company(){
        return 'i am function'
    }
}
const mycar = new Car("Ford");
```

# Arrow Function
```
name = () =>{
    return "Hello Aashu"
}

or you can ;

name = () => "Hello Aashu"
```
## Arrow Function Without Parentheses:

```
hello = val => "Hello " + val;
```

# One more example
```
class Header{
    constructor(){
        this.color = 'red'
    }

    changeColor = () =>{
        document.getElementbyId('demo').innerHTML += this
    }
}
const myheader = new Header();

// Window called object function
window.addEventListener('load',myheader.changeColor);

//A button called the object function
document.getElementbyId('btn').addEventListener('click', myheader.changeColor);
```

# Variables in ES6

```
let 
var
const
```

# Map() method

```
const numbers = [1,2,3,4,5,6]   
const doubled = numbers.map(x => x *2)

```
## but in react.Js we have 

### map with list
```
const fruits = ['apple','banana','guava','grapes']

function Mylist (){
    return(
        <ul>
        {fruitlist.map(fruit => 
        <li key={fruit}>{fruit}</li>
        )}
        </ul>
    )
}

```

### map with objects 
```
const fruits = [
    {
    "username": "Surya",
    "age": 20,
    "place": "raipur"
    },
    {
    "username": "Aashu",
    "age": 07,
    "place": "raipur"
    },
    {
    "username": "Babu",
    "age": 15,
    "place": "raipur"
    }
]

const names = fruit.map((person) =>{
    return person.username;
});

console.log(names);

> **NOTE:** `map()` returns a new array

```
# Destructuring 

### It allows to extract values from object or array into distinct vaariables.

## Example of Destructuring an array
### With ES6 updates we have this syntax
```
const vehicles = ['mustang','f-150','expedition']

const[car,truck,suv] = vehices;

document.getElementbyID('demo').innerHTML = truck;
```