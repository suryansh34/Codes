#include<iostream>

int main() {
    int number;
    
    // do-while loop ---> do some block of code first, then repeat again if condition is true.

    do
    {        
        std::cout<<"Enter a positive number: ";
        std::cin>>number;
    }while(number < 0);

    // while(number < 0){
    //     std::cout<<"Enter a positive number: ";
    //     std::cin>>number;
    // }

    std::cout<<"The Number is: " << number;

    return 0;
}