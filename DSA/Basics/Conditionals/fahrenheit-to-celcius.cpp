// fahrenheit to celcius 

#include<iostream>
using namespace std;
int main() {
    // C = (F - 32)* 5/9;

    float temp;
    cout<<"Enter temperature in fahrenheit: ";
    cin>>temp;

    float f_to_c = (temp - 32) * 5 / 9;
    cout<<f_to_c<<"°C";

}