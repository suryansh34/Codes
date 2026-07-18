#include<iostream>
#include<ctime>
#include<cstdlib>


int main() {
    int num;
    int guess;
    int tries = 0;


    srand(time(NULL));
    num = ( rand() % 100 ) + 1;

    std::cout<< "************ Guess The Number ***********\n";

    do
    {
        std::cout << "Enter a guess a number between ( 1- 100): ";
        std::cin>> guess;
        tries++;

        if(guess < num){
            std::cout<< "low\n";

        }else if( guess > num){
            std::cout<< "high\n";

        }else{
            std::cout << "CORRECT! # of tries " << tries << '\n';
        }

        std::cout<< "***********************************";
        
    } while (guess != num);
    




    return 0;
}