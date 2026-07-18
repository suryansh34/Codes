#include<iostream>

int main() {
    // sizeof() --> determine the size in bytes of a:
    //      variable, datatypes, class. objects, etc.

    std::string name = "Bro Code";
    double gpa = 2.5;
    char grade = 'F';
    bool student = true;
    char grades[] = { 'A','B', 'C','D','E', 'F'};
    std::string students[] = {"Suryansh","Surya","Ansh"};

    std::cout<< sizeof(gpa) << " bytes\n"; // o/p ---> 8 bytes
    std::cout<< sizeof(name) << " bytes\n"; // o/p ---> 24 bytes
    std::cout<< sizeof(grade) << " bytes\n"; // o/p ---> 1 bytes
    std::cout<< sizeof(bool) << " bytes\n"; // o/p ---> 1 bytes
    std::cout<< sizeof(grades) << " bytes\n"; // o/p ---> 6 bytes

    std::cout<< sizeof(grades)/sizeof(char) << " elements\n"; // o/p ---> 6 bytes

    std::cout<< sizeof(students)/sizeof(std::string) << " elements in students array\n"; // o/p ---> 6 bytes


    return 0;
}