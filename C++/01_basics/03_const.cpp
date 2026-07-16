#include<iostream>

int main() {
    /*
    the const keyword specifies that a variable's value is constant 

    it tells the compiler to prevent anything from modifying it 

    (read-only)
    */


    // 

    double radius = 10;
    const double PI = 3.14; // to make it permanent , taht anybody doesnot change the value of pi
    // PI = 4.240; //we cant able to change Valure of PI
    double circumference = 2 * PI * radius;

    std::cout << "Circumference of circle is:" << circumference;




    const double PI = 3.24;
    const double LIGHT_SPEED = 3.24;
    const double WIDTH = 3.24;
    const double HEIGHT = 3.24;
    const double EXPONENTIAL = 2.76;

    return 0;
}