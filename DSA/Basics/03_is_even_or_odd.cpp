#include<iostream>
int main(){
    int a;
    int num;
    std::cout<<"Enter a: ";
    std::cin>>a;

    if(a%2==0){
        std::cout<<"Number is Even";

    }else{
        std::cout<<"Odd Number";
    }
    return 0;
}