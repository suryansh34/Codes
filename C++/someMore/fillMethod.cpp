#include<iostream>

int main() {
    // fill() = Fills a range of elements with a specified value fill(begin, end, value)

    // std::string subject[10];

    // const int SIZE = 48;
    const int SIZE = 99;
    std::string subject[SIZE];

    // fill(subject, subject + 10, "maths" );
    fill(subject, subject + (SIZE/3), "maths-1" ); //SIZE/2 --> gives 5 value and 5 non-value.
    fill(subject + (SIZE/3),subject + (SIZE/3)*2 ,"maths-2" ); //SIZE/2 --> gives 5 value and 5 non-value.
    fill(subject + (SIZE/3)*2,subject + SIZE ,"maths-3" ); //SIZE/2 --> gives 5 value and 5 non-value.

    for(std::string subjects : subject){
        std::cout<< subjects<< '\n';
    }

    
    return 0;
}