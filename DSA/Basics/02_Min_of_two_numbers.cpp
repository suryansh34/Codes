#include<iostream>
int main(){
    int a,b;
    std::cout<<"Enter a: ";
    std::cin>>a;

    std::cout<<"Enter b: ";
    std::cin>>b;

    if(a<b){
        std::cout<<"Min Number is: "<< a;
    }else{
        std::cout<<"Min Number is: "<<b;
    }

    return 0;
}