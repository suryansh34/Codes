#include<iostream>
#include<cmath>  // we need to import c math library ---> to use math functions.

int main() {
    double x = 3.14;
    double y = 4;
    double z;
    double a;
    //max
    z= std::max(x,y);
    // std::cout<< z << '\n';
    // min
    a = std::min(x,y);
    // std::cout<< a << '\n';
    
    // z = pow(2,5);
    // z = sqrt(9);
    // z = abs(-5); //absolute value --> means positive value.
    // z = round(x); // rounding off 
    // z = ceil(x); // ceiling function --> upar.
    z = floor(x); // floor function --> niche.
    std::cout<< z << '\n';

    


    return 0;
}