#include<iostream>

int main() {
    // ternary operator ---> condition ? expresssion1 : expression2; --> replacement to if/else statement
    

    // int marks;
    // std::cout<<"Enter your marks out of 100: ";
    // std::cin>> marks;

    // marks >= 60 ? std::cout<<"you passed" : std::cout<<"you failed";


    bool hungry = false;

    // hungry ? std::cout << "You are Hungry" : std::cout << "You are full";
    std::cout<< (hungry ? "Your are hungry" : "you are full");
    return 0;
}