#include<iostream>
int main(){
    int count = 1;
    int sum = 0;
    int num;

    std::cout<<"Enter a Number: ";
    std::cin>>num;

    for(count;count<=num;count++){
        sum = sum + count;
    }

    std::cout<<"Sum of the number is: "<< sum;

return 0;

}