#include<iostream>
using namespace std;
int main() {
    string name;
    cin>>name;
    int size = name.size();
    int left = 0;
    int right = size - 1;

    while(left<right){
        if(name[left] != name[right]){
            std::cout<<"Not palindrome";
            return 0;
        }

        left++;
        right--;
        
    }
    std::cout<<"Palindrome";

    return 0;
}