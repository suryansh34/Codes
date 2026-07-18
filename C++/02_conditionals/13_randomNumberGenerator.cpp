#include<iostream>
#include<ctime>

int main() {
    // pseudo-random  = not truly random ( but close to )

    srand(time(NULL));
    int num1 = (rand() % 6) + 1;
    int num2 = (rand() % 20) + 1;
    int num3 = (rand() % 100) + 1;
    std::cout<<num1 <<'\n'<<num2 << '\n' <<num3;
    return 0;
}