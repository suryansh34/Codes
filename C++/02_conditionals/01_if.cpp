#include<iostream>

int main() {
    int age ;
    std::cout<<"Enter Your Age:";
    std::cin>> age;

    if(age >= 18){
        std::cout<< "You are eligible to vote";
    }
    else if(age < 0){
        std::cout<< "You havn't born";
    }
    else{
        std::cout<< "You are not eligible";
    }
    return 0;
}