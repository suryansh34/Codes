class User {
    constructor(email,password){
        this.email = email;
        this.password = password

    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
        // setter me return mat karo
    }


    get password() {
        // return this._password.toUpperCase()
        return `${this._password}surya`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const surya = new User("Surya@gmail.com","abc")
console.log(surya.password);
console.log(surya.email);
