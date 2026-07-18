#include<iostream>

void happyBirthday(std::string name, int age);
  

int main() {
    // function -- > a block of reusable code.
    std::string name = "Suryansh!";
    int age = 21;


    happyBirthday(name,age);
    return 0;
}
void happyBirthday(std:: string name, int age){
    std::cout<< name << " a very happy birthday to you!\n";
    std::cout<< "Your age is now : " << age;
}