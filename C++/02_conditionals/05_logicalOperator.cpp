#include<iostream>

int main() {
    // && ---> check if two condiitions are true.
    // || ---> check if atleast one of the two conditions is true.
    // ! ---> reveres thee logical state of its operand.

    int temp;

    std::cout<< "Enter the temperture: ";
    std::cin>> temp;

    if(temp >100 && temp < 0  ) {
        std::cout<<"Enter valid temperature (1-100)";

    }
    else if(temp == 100 ||temp == 0 ){
        std::cout<<"temperature is extreme points";
    }
    else if(temp != 0 && temp != 100){
        std::cout<<"you have chosen temperature between 0 and 100" << '\n';
    }
    
    std::cout<<"Your temperature is :" << temp;
    

    return 0;
}