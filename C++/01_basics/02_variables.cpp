#include<iostream>
int main() {
    int x; //declaration
    x = 5; //assignment
    int y = 6;
    int sum = x + y;

    std::cout << "*************    Program to find sum of two nummbers   **************" << '\n';

    std::cout << "X is: "<< x << '\n';
    std::cout << "Y is: "<< y << '\n';
    std::cout << "Sum of X and Y is: " << sum << '\n';

//  ********************* Integer  ************************    
    // integer ( whole number)
    int age = 21;
    int years = 2023;
    // int days = 7.5;
    // std::cout << days; // it returns 7 
    double days = 7.5;

//  ********************* Double  ************************

    // double ( number includign decimal)

    double temp = 25.1;
    double gpa = 9.5;
    double price = 35.63;


//  ********************* Char  ************************
    // char (store only  single character )
    char grade = 'A';
    char intitail = 'B';
    // char grade2 = 'ABC'; // cannnot store more than one character
    char currency = '$';

    
    // std::cout<< '\n' << grade2 << '\n'; //This is wrong 
    
    std::cout << "Initial : " << intitail << '\n';


//  ********************* Boolean  ************************
    
    //boolean ---> true or false

    bool student = true;


//  ********************* String  ************************    

    // string( objects that represents a sequence of text)

     std::string name = "Suryansh;";
     std::string food = "Pizza;";
     std::string day = "Monday;";

     std::cout << "Your name is: " << name;





    
    return 0;
}