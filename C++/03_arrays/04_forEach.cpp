#include<iostream>

int main() {
        // std::string students[] = {"Suryansh","Surya","Ansh"};
        int grades[] = {65,72,81,93};
        

        // for(int i = 0; i < sizeof(students)/sizeof(std::string); i++){
        //     std::cout<<students[i] << '\n';
        // }

        // for(std::string student : students){
        //         std::cout << student << '\n'; 
        // }
        for(int grade : grades){
                std::cout << grade << '\n'; 
        }
    return 0;
}