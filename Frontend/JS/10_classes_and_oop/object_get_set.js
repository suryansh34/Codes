const User ={
    _email: 'surya@gmail.com',
    _password: '124763',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },


    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}

// const chai = new User("surya@ai","9024")
const chai = Object.create(User)
console.log(chai.email);
console.log(chai.password);
