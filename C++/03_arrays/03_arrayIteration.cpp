#include<iostream>

int main() {
    // std::string students[] = {"Suryansh","Surya","Ansh"};
    char grades[] = { 'A','B', 'C','D','E', 'F'};
        // std::cout<< students[0]<< '\n';
        // std::cout<< students[1]<< '\n';
        // std::cout<< students[2]<< '\n';

        // for(int i = 0; i < 3; i++){
        //     std::cout<<students[i] << '\n';
        // }
    
        // for(int i = 0; sizeof(students)/ sizeof(std::string); i++){
        //     std::cout<<students[i] << '\n';
        // }

        for(int i = 0; i < sizeof(grades)/sizeof(char); i++){
            std::cout<<grades[i] << '\n';
        }
    
    return 0;
}