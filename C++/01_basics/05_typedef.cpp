#include<iostream>
// typedef std::string torNaam; // use typedef or using 
using torNaam = std::string;
int main() {
    /*
    typedef  = reserved keyword used to create an additional name (alias) for another datatype.
    New identifier for an exsiting type
    Helps with readability and reduces typos Use when there is a clear benefit Replaced with 'using' (work better w/ templates)
    */

    torNaam name = "Ramu";
    std::cout << name;

return 0;
}