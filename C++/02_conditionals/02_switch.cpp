#include<iostream>

int main() {
    // int month;
    // std::cout << "Enter a number for months (1-12): ";
    // std::cin >> month;

    char grade;
    std::cout<<"Enter your grade: ";
    std::cin>>grade;


    // switch(month){
    //     case 1:
    //         std::cout<<"January";
    //         break;    
    //     case 2:
    //         std::cout<<"Feb";
    //         break;    
    //     case 3:
    //         std::cout<<"March";
    //         break;    
    //     case 4:
    //         std::cout<<"April";
    //         break;    
    //     case 5:
    //         std::cout<<"May";
    //         break;
    //     default:
    //         std::cout<<"December";


    // }

    switch(grade){
        case 'A':
            std::cout<<"Grandmaster";
        break;
        case 'B':
            std::cout<<"Heroic";
        break;
        case 'C':
            std::cout<<"Gold";
        break;
        case 'D':
            std::cout<<"Bronze";
        break;
        case 'E':
            std::cout<<"Garbage";
        break;
        case 'F':
            std::cout<<"Fail!";
        break;
        default:
            std::cout<< "You have entered wrong grade";
    }



    return 0;
}