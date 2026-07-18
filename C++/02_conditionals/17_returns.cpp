#include<iostream>

// double square(double length);
// double cube(double length);
// if returning the value --> we need to change to the result datatypes.
// so we need to change from void to double.
std::string concatStrings(std::string string1,std::string string2);

int main() {

    // double length = 6.0;
    // double area = square(length);
    // double volume = cube(length);

    // std::cout<< "Area: "<< area << "cm^2\n";
    // std::cout<< "Volume: "<< volume << "cm^2\n";

    std::string firstName = "Suryansh";
    std::string lastName = "Sahu";
    std::string fullName = concatStrings(firstName,lastName);
    std::cout<< "Hello " << fullName;


    return 0;
}

std::string concatStrings(std::string string1,std::string string2){
    return string1 + " " + string2;
}

// double square(double length){
//     // double result = length * length;
//     // return result;
//     return length* length;
// }
// double cube(double length){
//     return length* length * length;

    
// }
