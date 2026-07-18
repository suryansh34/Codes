#include<iostream>
#include<ctime>

int main() {
    srand(time(NULL));

    int randomNumber = rand() % 5 + 1;

    switch(randomNumber){
        case 1: std::cout << "You win a iphone prize";
        break;
        case 2: std::cout << "You win a lambo prize";
        break;
        case 3: std::cout << "You win a tv prize";
        break;
        case 4: std::cout << "You win a buggatti chiron prize";
        break;
        case 5: std::cout << "You win a $100M money prize";
        break;
    }

    return 0;
}