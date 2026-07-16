#include<iostream>

int main() {
    char op;
    double num1;
    double num2;
    double result;

    std::cout<< "******************** CALCULATOR **********************"<< '\n';

    std::cout<<"Enter either (+,-/,*): "<< '\n';
    std::cin>> op;


    std::cout<<"Enter first number: " << '\n';
    std::cin>> num1;

    std::cout<<"Enter second number: " << '\n';
    std::cin>> num2;

    switch(op){
        case '+':
            std::cout<< num1+num2;
        break;    
        case '-':
            std::cout<< num1-num2;
        break;    
        case '/':
            std::cout<< num1/num2;
        break;    
        case '*':
            std::cout<< num1*num2;
        break;
        deafult:
            std::cout<<"You have entered wrong operations " << '\n';
        break;


    }
    std::cout<< '\n' << "******************************************";

    return 0;
}