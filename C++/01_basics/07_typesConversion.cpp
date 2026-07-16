#include <iostream>

int main()

{
    /*
    type conversion = consideration a value of one data type to another 
    Implicit = automatic
    Explicit = Precode value with new data type (int)
    */

    // double x = (int) 3.14;
    // std::cout<< x;

    // char x = 100;
    // std::cout<<x; //gives output form ACSII table.

    // std::cout<< (char) 100;



    // Suppose having exam 
    // int correct = 8;
    // int questions = 10;
    // double score = (correct/double(questions)) * 100; // take care of denominator datatype.

    // std::cout<<"Your Score is: " << score;

    double principle = 3000;
    double rate = 5;
    double time = 2;
    double simpleInterest = (principle * time * rate)/ 100;
    double totalAmount = principle + simpleInterest;

    std::cout<< "Simple Interest is: " << simpleInterest<< '\n';
    std::cout<< "Total payable Amount is: " << totalAmount;


    return 0;
}