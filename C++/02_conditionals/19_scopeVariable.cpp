#include<iostream>
int myNum = 3;

void printNum();

int main() {
    // local variable
    // global vairable

    // int myNum = 1;

    int myNum = 1;
    
    printNum();
    // std::cout<< myNum<< '\n';
    std::cout<< ::myNum<< '\n'; // to use global variable

    return 0;
}
void printNum(){
    // int myNum = 2;
    int myNum = 2;
    // std::cout<< myNum<< '\n';
    std::cout<< ::myNum<< '\n';
}