const users = [
    { name: "Harry", age: 20 },
    { name: "Alex", age: 17 },
    { name: "John", age: 25 },
    { name: "Sam", age: 22 }
];

const value = document.getElementById('search');
const button = document.getElementById('btn');
const un_li = document.getElementById('list');


button.addEventListener('click', () => {
    const possibleUsers = users
                          .filter(user => user.name.toLowerCase().includes(value.value.toLowerCase()))
                          .map(user => `<li>${user.name}</li>`)

    un_li.innerHTML =  possibleUsers.join("")       
})

