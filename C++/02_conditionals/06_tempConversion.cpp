#include<iostream>

int main() {
    double temp;
    char unit;

    
    std::cout<< "***** Temp conversion ****** '\n";

    std::cout<< "Enter F --> Fahrenheit or C --> Celcius: ";
    std::cin>> unit;

    if(unit == 'F' || unit == 'f'){
        std::cout<<"You have chosen fahrenheit";
        std::cin>>temp;

        temp = (temp * 1.8) + 32.0;
        std::cout<<"To celcius is: "<< temp << "F'\n'";

    }else if (unit == 'C' || unit == 'c'){

        std::cout<<"You have chosen celcius";
        std::cin>>temp ;

        temp = (temp - 32) / 1.8;
        std::cout<<"To celcius is: "<< temp << "C'\n'";

    }





    std::cout<< "*******************************************'\n";

    return 0;
}