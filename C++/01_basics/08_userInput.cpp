#include<iostream>

int main() {
    
    std::string name;
    int age;

    // std::cout << "What's Your Name :" ;
    // // std::cin>> name;
    // std::getline(std::cin,name); // to use name with spaces
    // std::cout << "What's Your Age :" ;
    // std::cin>> age;

    std::cout << "What's Your Age :" ;
    std::cin>> age;

    std::cout << "What's Your Name :" ;
    // std::cin>> name;
    // std::getline(std::cin,name); // this is not valid 
    std::getline(std::cin>>std::ws,name);




    std::cout << " Your Name is: "<< name << " And Your age is: " << age;


    

    return 0;
}